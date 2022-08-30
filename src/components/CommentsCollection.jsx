import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteComment, fetchComments } from "../api";
import styles from "../styles/CommentsCollection.module.css";
import PostComment from "./PostComment";
import { FaTrash } from "react-icons/fa";
import { UserContext } from "../contexts/User";

const CommentsCollection = (props) => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Comments loading...</p>;

  const handleDeleteClick = (event) => {
    event.currentTarget.disabled = true;
    const comment_id = Number(event.currentTarget.value);
    deleteComment(comment_id).then(() => {
      setComments((currComments) => {
        const filteredComments = currComments.filter(
          (commentObj) => commentObj.comment_id !== comment_id
        );
        return filteredComments;
      });
    });
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div className={styles.commentsBox} key={comment.comment_id}>
            <div className={styles.userInfo}>
              <p className={styles.author}> {comment.author}</p>
              <p> {comment.created_at}</p>
              {comment.author === loggedInUser.username ? (
                <button value={comment.comment_id} onClick={handleDeleteClick}>
                  <FaTrash />
                </button>
              ) : null}
            </div>
            <p className={styles.commentBody}> {comment.body}</p>
            <p className={styles.commentVote}> Votes : {comment.votes}</p>
          </div>
        );
      })}
      <PostComment
        setComments={setComments}
        setSingleArticle={props.setSingleArticle}
      />
    </div>
  );
};

export default CommentsCollection;
