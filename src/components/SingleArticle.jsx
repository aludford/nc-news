import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleArticle } from "../api";
import styles from "../styles/SingleArticle.module.css";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState();

  useEffect(() => {
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>loading...</p>;

  return (
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
            <td>{singleArticle.votes}</td>
          </tr>
        </tbody>
      </table>
      <p className={styles.articleBody}>{singleArticle.body}</p>
    </div>
  );
};

export default SingleArticle;
