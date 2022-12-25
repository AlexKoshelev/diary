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
import { Calendar } from "antd";
import { ReactComponent as Bookmark } from "../../../assets/svg/around.svg";
import ClientCard from "../../ui/clientCard/clientCard";

const DiaryPage = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());
  console.log(currentTrainer);

  const clients = useSelector(getClientsById(currentTrainer._id));
  const [selectClientId, setSectClientId] = useState("");
  const [cardioTime, setCardioTime] = useState("");
  const [workoutNumber, setWorkoutNumber] = useState(0);
  const dateToday = transformDate(new Date());
  const currentClient =
    clients && clients.find((c) => c._id === selectClientId);

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
  const [selectedDate, setSelectedDate] = useState("");
  console.log(selectedDate);

  console.log(currentClientWorkoutsList);

  const hahdleSelectDate = (date) => {
    const day = date.$D;
    const month = date.$M + 1;
    const year = date.$y;

    const selectDate = `${day}.${month}.${String(year).substr(2, 2)}`;
    setSelectedDate(selectDate);
    console.log(selectDate);
  };
  const handleBookmark = (date) => {
    const day = date.$D;
    const month = date.$M + 1;
    const year = date.$y;

    const DATE = `${day}.${month}.${String(year).substr(2, 2)}`;
    if (currentClientWorkoutsList)
      return currentClientWorkoutsList.map((w) =>
        w.date === DATE ? <Bookmark className="calendar-icon" /> : null
      );
  };
  return (
    <>
      {currentTrainer /* && clients */ && (
        <div className="_container">
          <div className="diary__layout">
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
              {selectClientId && dateToday && (
                <Comments
                  selectClientId={selectClientId}
                  dateToday={dateToday}
                />
              )}
            </div>
            <div>
              <div className="calendar__container">
                <Calendar
                  onSelect={(date) => hahdleSelectDate(date)}
                  dateCellRender={(date) => handleBookmark(date)}
                />
              </div>
              <div className="client__container">
                {currentClient ? (
                  <ClientCard client={currentClient} />
                ) : (
                  "Выберите клиента"
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DiaryPage;
