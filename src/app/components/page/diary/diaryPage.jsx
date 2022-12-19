import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getClientsById } from "../../../store/clients";
import { getCurrentTrainerData } from "../../../store/trainers";
import Table from "../../ui/table/table";
import TrainersCard from "../../ui/trainersCard/trainersCard";

const DiaryPage = () => {
  const currentTrainer = useSelector(getCurrentTrainerData());
  const clients = useSelector(getClientsById(currentTrainer._id));
  const [selectClientId, setSectClientId] = useState("");
  const clientsList = clients
    ? Object.values(clients).map((c) => ({
        label: c.name,
        value: c._id,
      }))
    : {};

  const handleChange = (id) => {
    setSectClientId(id);
  };
  const [cardio, setCardio] = useState("");
  const handleChangeCardio = () => {
    /*   setCardio(prevState=>) */
  };
  return (
    <>
      {currentTrainer && clients && (
        <div className="diary__trainer">
          <div className="diary__trainer-name">{currentTrainer.name}</div>
          <div className="table__container">
            <TrainersCard clientsList={clientsList} onChange={handleChange} />
            <Table currentClientId={selectClientId} />
          </div>
        </div>
      )}
    </>
  );
};
export default DiaryPage;
