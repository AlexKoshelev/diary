import { orderBy } from "lodash";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  getCommentsLoadingStatus,
  getCommentsOfClients,
  loadCommentsList,
  removeComment,
} from "../../../store/comments";
import PropTypes from "prop-types";
import AddCommentForm from "../comments/comments/addCommentForm";
import "./comments.scss";
import CommentsList from "./comments/commentsList";
const Comments = ({ selectClientId, dateToday }) => {
  const dispatch = useDispatch();
  const comments = useSelector(getCommentsOfClients(selectClientId));

  useEffect(() => {
    dispatch(loadCommentsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = useSelector(getCommentsLoadingStatus());
  const handleSubmit = (data) => {
    console.log(data);

    const comment = {
      ...data,
      date: dateToday,
      _id: nanoid(),
      clientId: selectClientId,
      created_at: Date.now(),
    };

    dispatch(createComment(comment));
  };

  const sortedComments =
    comments && orderBy(comments, ["created_at"], ["desc"]);

  const handleRemoveComment = (id) => {
    dispatch(removeComment(id));
  };
  return (
    <>
      <div className="comments__container">
        <AddCommentForm onSubmit={handleSubmit} />

        {sortedComments && sortedComments.length > 0 && (
          <div className="">
            <div className="card-comments ">
              <hr />
              {!isLoading ? (
                <CommentsList
                  comments={sortedComments}
                  onRemove={handleRemoveComment}
                />
              ) : (
                "Загрузка"
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
Comments.propTypes = {
  selectClientId: PropTypes.string,
  dateToday: PropTypes.string,
};
export default Comments;
