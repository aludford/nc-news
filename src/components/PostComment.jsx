import { useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentAPI } from "../api";

const PostComment = (props) => {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  const [commentPosting, setCommentPosting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setCommentPosting(true);

    postCommentAPI(article_id, "jessjelly", newComment).then((res) => {
      props.setComments((currComments) => [...currComments, res.data.comment]);
      props.setSingleArticle((currArticle) => {
        const revisedArticle = { ...currArticle };
        revisedArticle.comment_count += 1;
        return revisedArticle;
      });
      setNewComment("");
      setCommentPosting(false);
    }); //currently uses default user but should improve so that it uses useContext to post username!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  };

  if (commentPosting) return <p>Posting comment...</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentBox">Add your comment</label>
        <textarea
          id="commentBox"
          rows="5"
          cols="80"
          placeholder="Enter your comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          required
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostComment;
