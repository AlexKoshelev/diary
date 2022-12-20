import React from "react";
import PropTypes from "prop-types";

import "./textField.scss";
import classNames from "classnames";
const TextFieldTime = ({
  label,

  name,
  value,
  onChange,

  placeholder,
  className,
  classNameInput,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const classesInput = classNames("", classNameInput);

  const classes = classNames("textfield", className);

  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <div className="input__container">
          <input
            type={"text"}
            id={name}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            className={classesInput}
          />
        </div>
      </div>
    </div>
  );
};

TextFieldTime.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextFieldTime;
