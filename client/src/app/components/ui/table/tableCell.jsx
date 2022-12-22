import React from "react";
import PropTypes from "prop-types";
const TableCell = ({ name, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <td>
      <div className="table__cell">
        <input
          className="table__cell-input"
          type="text"
          name={name}
          defaultValue={value}
          onChange={handleChange}
        />
      </div>
    </td>
  );
};
TableCell.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default TableCell;
