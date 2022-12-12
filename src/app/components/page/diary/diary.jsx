import React from "react";
import { useSelector } from "react-redux";
import {
  getClientsById,
  getclientsLoadingStatus,
} from "../../../store/clients";
import { getTrainers, getTrainersLoadingStatus } from "../../../store/trainers";
import Table from "../../ui/table/table";

const Diary = () => {
  const trainer = useSelector(getTrainers());
  const trainerIsLoading = useSelector(getTrainersLoadingStatus());

  const clients = useSelector(getClientsById(trainer.content._id));

  const clientsIsLoading = useSelector(getclientsLoadingStatus());

  return (
    <>
      {!trainerIsLoading && !clientsIsLoading && (
        <Table trainer={trainer} clients={clients} />
      )}
    </>
  );
};
export default Diary;
