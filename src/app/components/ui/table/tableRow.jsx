import React from "react";
import TableCell from "./tableCell";
const TableRow = ({ exercise, onChange }) => {
  exercise = Object.keys(exercise);
  return (
    <>
      {exercise && onChange && (
        <tr>
          {exercise.map((e) => (
            <TableCell key={e} name={e} value={""} onChange={onChange} />
          ))}
          {/*  */}
          {/*  <TableCell
            name="weight1"
            value={exercise.weight1}
            onChange={onChange}
          />
          <TableCell name={"rep1"} value={exercise.rep1} onChange={onChange} />
          <TableCell
            name={"weight2"}
            value={exercise.weight2}
            onChange={onChange}
          />
          <TableCell name={"rep2"} value={exercise.rep2} onChange={onChange} />
          <TableCell
            name={"weight3"}
            value={exercise.weight3}
            onChange={onChange}
          />
          <TableCell name={"rep3"} value={exercise.rep3} onChange={onChange} />
          <TableCell
            name={"weight4"}
            value={exercise.weight4}
            onChange={onChange}
          />
          <TableCell name={"rep4"} value={exercise.rep4} onChange={onChange} />
          <TableCell
            name={"weight5"}
            value={exercise.weight5}
            onChange={onChange}
          />
          <TableCell name={"rep5"} value={exercise.rep5} onChange={onChange} /> */}
        </tr>
      )}
    </>
  );
};
export default TableRow;
