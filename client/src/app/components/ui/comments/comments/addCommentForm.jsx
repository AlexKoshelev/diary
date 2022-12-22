import React, { useState } from "react";
import TextAreaField from "../../../common/form/textAreaField/textAreaField";
import { validator } from "../../../../utils/validator";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadCommentsList } from "../../../../store/comments";

const AddCommentForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    content: {
      isRequired: {
        message: "Сообщение не может быть пустым",
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const clearForm = () => {
    setData({});
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    if (data.content !== undefined) {
      onSubmit(data);
      clearForm();
      dispatch(loadCommentsList());
      dispatch(loadCommentsList());
      dispatch(loadCommentsList());
    }
  };
  return (
    <div className="comment__form-addComment">
      <form onSubmit={handleSubmit}>
        <div className="addComment__btn-container">
          <button className="addComment__btn">Создать заметку</button>
        </div>
        <TextAreaField
          value={data.content || ""}
          onChange={handleChange}
          name="content"
          error={errors.content}
        />
      </form>
    </div>
  );
};
AddCommentForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddCommentForm;
