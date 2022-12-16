import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createClients } from "../../../store/clients";
import PropTypes from "prop-types";
import ClientForm from "../../common/clientForm";

const CreateClient = ({ currentTrainer, hiddenState, setHiddenState }) => {
  const dispatch = useDispatch();

  const [clientData, setClientData] = useState({
    name: "",
    phone: "",
    age: "",
    arm: "",
    bust: "",
    growth: "",
    hips: "",
    leg: "",
    waist: "",
    weight: "",
    trainerId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const transformClientData = {
      _id: nanoid(),
      name: clientData.name,
      phone: clientData.phone,
      params: {
        age: clientData.age,
        arm: `${clientData.arm} см`,
        bust: `${clientData.bust} см`,
        growth: `${clientData.growth} см`,
        hips: `${clientData.hips} см`,
        leg: `${clientData.leg} см`,
        waist: `${clientData.waist} см`,
        weight: `${clientData.weight} кг`,
      },
      trainerId: clientData.trainerId,
    };
    if (transformClientData) {
      dispatch(createClients(transformClientData));
      setHiddenState();
      setClientData({
        name: "",
        phone: "",
        age: "",
        arm: "",
        bust: "",
        growth: "",
        hips: "",
        leg: "",
        waist: "",
        weight: "",
        trainerId: "",
      });
    }
  };
  const handleChange = (target) => {
    setClientData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
      trainerId: currentTrainer._id,
    }));
  };

  return (
    <>
      <div
        className={`${hiddenState ? "" : "hiddenForm "}createClient__container`}
      >
        <ClientForm
          handleSubmit={handleSubmit}
          clientData={clientData}
          handleChange={handleChange}
          btnTitle="Добавить клиента"
        />
      </div>
    </>
  );
};
CreateClient.propTypes = {
  currentTrainer: PropTypes.object,
  clientCurrentData: PropTypes.object,

  handleShowFormClient: PropTypes.func,
};
export default CreateClient;
