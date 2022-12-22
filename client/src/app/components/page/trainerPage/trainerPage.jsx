import React, { useState } from "react";
import "./trainerPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AddLogo } from "../../../assets/svg/addsquare.svg";

import {
  getClientsById,
  getCurrentClientsById,
  loadClientsList,
  removeClient,
} from "../../../store/clients";
import { getCurrentTrainerData, logOut } from "../../../store/trainers";

import CreateClient from "./createClient";
import ClientList from "./clientList";
import TrainerCard from "./trainerCard";
import EditClientPage from "./editClientPage";

const TrainerPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentTrainer = useSelector(getCurrentTrainerData());
  const currentTrainerId = currentTrainer && currentTrainer._id;
  const [currentClientId, setCurrentClientId] = useState("");

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/about");
  };
  const clients = useSelector(getClientsById(currentTrainerId));
  const clientCurrentData = useSelector(getCurrentClientsById(currentClientId));

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

  const [showForm, setShowForm] = useState(false);
  function handleShowFormClient() {
    setShowForm((prevState) => !prevState);
  }
  function handleEdit(id) {
    if (id) {
      setCurrentClientId(id);
      if (!showForm) {
        handleShowFormClient();
      }
    }
  }
  const [hiddenState, setHiddenState] = useState(false);
  function handleShowForm() {
    setHiddenState((prevState) => !prevState);
    if (showForm) {
      handleShowFormClient();
    }
  }
  return (
    <>
      <div className="trainerPage ">
        <div className="trainerPage__main">
          {currentTrainer && (
            <TrainerCard trainer={currentTrainer} logOut={handleLogOut} />
          )}
          <div className="main__info">
            <div></div>
            <button className="trainerPage_button" onClick={handleShowForm}>
              <AddLogo />
              Добавить клиента
            </button>
            <CreateClient
              currentTrainer={currentTrainer}
              hiddenState={hiddenState}
              setHiddenState={setHiddenState}
            />
            {clientCurrentData && (
              <EditClientPage
                clientCurrentData={clientCurrentData}
                showForm={showForm}
                handleShowFormClient={handleShowFormClient}
              />
            )}
          </div>
        </div>
        <ul>
          {clients && (
            <ClientList
              clients={clients}
              remove={handleDelete}
              handleEdit={handleEdit}
            />
          )}
        </ul>
      </div>
    </>
  );
};
export default TrainerPage;
