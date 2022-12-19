import React, { useState } from "react";
import { useEffect } from "react";
import { useExercise } from "../../../hooks/useExercise";
import { transformDate } from "../../../utils/transformDate";

import "./table.scss";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";

const Table = ({ currentClientId }) => {
  const dateToday = transformDate(new Date());

  const {
    exercise1,
    handleChange1,
    exercise2,
    handleChange2,
    exercise3,
    handleChange3,
    exercise4,
    handleChange4,
    exercise5,
    handleChange5,
    exercise6,
    handleChange6,
    exercise7,
    handleChange7,
    exercise8,
    handleChange8,
    exercise9,
    handleChange9,
    exercise10,
    handleChange10,
  } = useExercise();
  console.log(currentClientId);

  const [workout, setWorkout] = useState({
    date: dateToday,
    cardio: "",
    clientId: "",
    workNum: "",
    exercise1: exercise1,
    exercise2: exercise2,
    exercise3: exercise3,
    exercise4: exercise4,
    exercise5: exercise5,
    exercise6: exercise6,
    exercise7: exercise7,
    exercise8: exercise8,
    exercise9: exercise9,
    exercise10: exercise10,
  });

  useEffect(() => {
    setWorkout((prevState) => ({
      ...prevState,
      exercise1: exercise1,
      exercise2: exercise2,
      exercise3: exercise3,
      exercise4: exercise4,
      exercise5: exercise5,
      exercise6: exercise6,
      exercise7: exercise7,
      exercise8: exercise8,
      exercise9: exercise9,
      exercise10: exercise10,
      clientId: currentClientId,
    }));
  }, [
    exercise1,
    exercise2,
    exercise3,
    exercise4,
    exercise5,
    exercise6,
    exercise7,
    exercise8,
    exercise9,
    exercise10,
    currentClientId,
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(workout);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table className="table__diary">
          <TableHeader />
          <tbody>
            <TableRow exercise={exercise1} onChange={handleChange1} />
            <TableRow exercise={exercise2} onChange={handleChange2} />
            <TableRow exercise={exercise3} onChange={handleChange3} />
            <TableRow exercise={exercise4} onChange={handleChange4} />
            <TableRow exercise={exercise5} onChange={handleChange5} />
            <TableRow exercise={exercise6} onChange={handleChange6} />
            <TableRow exercise={exercise7} onChange={handleChange7} />
            <TableRow exercise={exercise8} onChange={handleChange8} />
            <TableRow exercise={exercise9} onChange={handleChange9} />
            <TableRow exercise={exercise10} onChange={handleChange10} />
          </tbody>
        </table>
        <button className="form__btn" type="submit">
          Сохранить тренировку
        </button>
      </form>
    </>
  );
};

export default Table;
