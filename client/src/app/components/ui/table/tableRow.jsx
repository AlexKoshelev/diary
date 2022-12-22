import React from "react";
import TableCell from "./tableCell";
import PropTypes from "prop-types";
const TableRow = ({ exercise, onChange }) => {
  exercise = Object.keys(exercise);
  return (
    <>
      {exercise && onChange && (
        <tr>
          {exercise.map((e) => (
            <TableCell key={e} name={e} value={""} onChange={onChange} />
          ))}
        </tr>
      )}
    </>
  );
};
TableRow.propTypes = {
  exercise: PropTypes.object,
  onChange: PropTypes.func,
};
export default TableRow;
