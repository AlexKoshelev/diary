import AddCommentForm from "../comments/comments/addCommentForm";
import "./comments.scss";
const Comments = ({ selectClientId }) => {
  return (
    <div className="comment__container">
      <AddCommentForm />
    </div>
  );
};

export default Comments;
