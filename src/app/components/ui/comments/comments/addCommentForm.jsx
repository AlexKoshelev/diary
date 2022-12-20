import React, { useState } from "react";
import TextAreaField from "../../../common/form/textAreaField/textAreaField";
import { validator } from "../../../../utils/validator";
import PropTypes from "prop-types";

const AddCommentForm = ({ onSubmit }) => {
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
    onSubmit(data);
    clearForm();
  };
  return (
    <div className="comment__form-addComment">
      <form onSubmit={handleSubmit}>
        <div className="">
          <button className="">Создать заметку</button>
        </div>
        <TextAreaField
          value={data.content || ""}
          onChange={handleChange}
          name="content"
          label="Введите текст"
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
