import React from "react";
import "./trainerPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getClientsById,
  loadClientsList,
  removeClient,
} from "../../../store/clients";
import { getCurrentTrainerData, logOut } from "../../../store/trainers";

import CreateClient from "./createClient";
import ClientList from "./clientList";
import TrainerCard from "./trainerCard";

const TrainerPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentTrainer = useSelector(getCurrentTrainerData());

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/about");
  };
  const clients = useSelector(getClientsById(currentTrainer._id));

  const handleDelete = (id) => {
    console.log(id);
    if (proverka()) {
      dispatch(removeClient(id));
      dispatch(loadClientsList());
    }
  };
  function proverka() {
    if (window.confirm("Подтвердить")) {
      dispatch(loadClientsList());

      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="trainerPage ">
      <div className="trainerPage__main">
        {currentTrainer && (
          <TrainerCard trainer={currentTrainer} logOut={handleLogOut} />
        )}
        <div className="main__info">
          <CreateClient currentTrainer={currentTrainer} />
        </div>
      </div>
      <ul>
        {clients && <ClientList clients={clients} remove={handleDelete} />}
      </ul>
    </div>
  );
};
export default TrainerPage;
