import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api";
import styles from "../styles/CommentsCollection.module.css";

const CommentsCollection = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Comments loading...</p>;

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div className={styles.commentsBox} key={comment.comment_id}>
            <div className={styles.userInfo}>
              <p className={styles.author}> {comment.author}</p>
              <p> {comment.created_at}</p>
            </div>
            <p className={styles.commentBody}> {comment.body}</p>
            <p className={styles.commentVote}> Votes : {comment.votes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsCollection;
