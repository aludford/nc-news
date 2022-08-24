import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleArticle,
  patchArticleVotesUp,
  patchArticleVotesDown,
} from "../api";
import styles from "../styles/SingleArticle.module.css";
import CommentsCollection from "./CommentsCollection";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState();
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;

  const incrementVotes = () => {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + 1;
    });
    setErr(null);
    patchArticleVotesUp(article_id).catch(() => {
      setOptimisticVotes((currOptimisticVotes) => {
        setErr("Something went wrong, please try again.");
        return currOptimisticVotes - 1;
      });
    });
  };

  const decrementVotes = () => {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes - 1;
    });
    setErr(null);
    patchArticleVotesDown(article_id).catch(() => {
      setOptimisticVotes((currOptimisticVotes) => {
        setErr("Something went wrong, please try again.");
        return currOptimisticVotes + 1;
      });
    });
  };

  return (
    <section>
      <div>
        <h2>{singleArticle.title}</h2>
        <table className={styles.articleTable}>
          <tbody>
            <tr>
              <th>Author</th>
              <td>{singleArticle.author}</td>
            </tr>
            <tr>
              <th>Date Created</th>
              <td>{singleArticle.created_at}</td>
            </tr>
            <tr>
              <th>Topic</th>
              <td>
                <Link to={`/topics/${singleArticle.topic}`}>
                  {singleArticle.topic}
                </Link>
              </td>
            </tr>
            <tr>
              <th>Comments</th>
              <td>{singleArticle.comment_count}</td>
            </tr>
            <tr>
              <th>Votes</th>
              <td>{singleArticle.votes + optimisticVotes}</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.voting}>
          <button onClick={incrementVotes}>Like!</button>
          <button onClick={decrementVotes}>Dislike!</button>
          {err ? <p>{err}</p> : null}
        </div>
        <p className={styles.articleBody}>{singleArticle.body}</p>
      </div>
      <CommentsCollection />
    </section>
  );
};

export default SingleArticle;
