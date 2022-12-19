import React from "react";

const TableCell = ({ name, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <td>
      <div className="table__cell">
        <input
          type="text"
          name={name}
          defaultValue={value}
          onChange={handleChange}
        />
      </div>
    </td>
  );
};
export default TableCell;
