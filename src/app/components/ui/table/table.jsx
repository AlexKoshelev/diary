import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useExercise } from "../../../hooks/useExercise";
import { createWorkouts } from "../../../store/workouts";
import "./table.scss";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";
import PropTypes from "prop-types";

const Table = ({ currentClientId, cardioTime, workoutNumber, dateToday }) => {
  const dispatch = useDispatch();

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

  const [workout, setWorkout] = useState({
    date: "",
    cardio: "",
    clientId: "",
    workNum: "",
    exercise1: "",
    exercise2: "",
    exercise3: "",
    exercise4: "",
    exercise5: "",
    exercise6: "",
    exercise7: "",
    exercise8: "",
    exercise9: "",
    exercise10: "",
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
      cardio: cardioTime,
      workNum: workoutNumber++,
      date: dateToday,
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
    cardioTime,
    workoutNumber,
    dateToday,
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { ...workout, _id: nanoid() };
    if (newWorkout) {
      dispatch(createWorkouts(newWorkout));
    }
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
        <button className="form__btn btn-save" type="submit">
          Сохранить тренировку
        </button>
      </form>
    </>
  );
};
Table.propTypes = {
  currentClientId: PropTypes.string,
  cardioTime: PropTypes.string,
  workoutNumber: PropTypes.number,
  dateToday: PropTypes.string,
};
export default Table;
