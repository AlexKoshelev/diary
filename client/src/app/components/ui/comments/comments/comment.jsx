import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as RemoveLogo } from "../../../../assets/svg/noteremove.svg";

const Comment = ({ content, _id: id, date, onRemove }) => {
  return (
    <>
      <div className="comment__container">
        <div className="comment-elements">
          <div className="">
            <span className="elements__text">{date}г.</span>
          </div>

          <button className="comment-icon" onClick={() => onRemove(id)}>
            <RemoveLogo className="comment-icon" />
          </button>
        </div>
        <p className="elements__text">{content}</p>
      </div>
    </>
  );
};
Comment.propTypes = {
  content: PropTypes.string,
  date: PropTypes.string,
  onRemove: PropTypes.func,
  _id: PropTypes.string,
};

export default Comment;
