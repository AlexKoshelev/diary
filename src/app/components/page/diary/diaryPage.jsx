import React, { useState } from "react";
import { useEffect } from "react";
import "./diary.scss";
import { useSelector } from "react-redux";
import { getClientsById } from "../../../store/clients";
import { getCurrentTrainerData } from "../../../store/trainers";
import { getWorkoutsById } from "../../../store/workouts";
import { transformDate } from "../../../utils/transformDate";
import Table from "../../ui/table/table";
import TrainersCard from "../../ui/trainersCard/trainersCard";
import Comments from "../../ui/comments/comments";
/* import Calendar from "../../calendar/calendar"; */

const DiaryPage = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());
  const clients = useSelector(getClientsById(currentTrainer._id));
  const [selectClientId, setSectClientId] = useState("");
  const [cardioTime, setCardioTime] = useState("");
  const [workoutNumber, setWorkoutNumber] = useState(0);
  const dateToday = transformDate(new Date());
  const currentClientWorkoutsList = useSelector(
    getWorkoutsById(selectClientId)
  );
  let numAllWorkouts =
    currentClientWorkoutsList && currentClientWorkoutsList.length;

  useEffect(() => {
    setWorkoutNumber(numAllWorkouts++);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectClientId]);
  const clientsList = clients
    ? Object.values(clients).map((c) => ({
        label: c.name,
        value: c._id,
      }))
    : {};

  const handleChange = (id) => {
    setSectClientId(id);
  };

  const handleChangeCardio = (value) => {
    setCardioTime(value);
  };

  return (
    <>
      {currentTrainer && clients && (
        <div className="_container">
          <div className="table__group">
            <div className="diary__trainer diary-container">
              <div className="diary__trainer-name">{currentTrainer.name}</div>
              <div className="table__container">
                <TrainersCard
                  clientsList={clientsList}
                  onChange={handleChange}
                  handleChangeCardio={handleChangeCardio}
                  workoutNumber={workoutNumber}
                  dateToday={dateToday}
                  className="select-client"
                />
                <Table
                  currentClientId={selectClientId}
                  cardioTime={cardioTime}
                  workoutNumber={workoutNumber}
                  dateToday={dateToday}
                />
              </div>
            </div>
            {/*      <Calendar /> */}
          </div>
          {selectClientId && <Comments selectClientId={selectClientId} />}
        </div>
      )}
    </>
  );
};
export default DiaryPage;
