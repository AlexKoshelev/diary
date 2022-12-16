import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as AddLogo } from "../../../assets/svg/addsquare.svg";
import { createClients } from "../../../store/clients";

import TextFieldParams from "../../common/form/textField/textFieldParams";
import PropTypes from "prop-types";
const CreateClient = ({ currentTrainer }) => {
  const dispatch = useDispatch();

  const [hiddenState, setHiddenState] = useState(false);
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
  function handleShowForm() {
    setHiddenState((prevState) => !prevState);
  }
  return (
    <>
      <div>
        <button className="trainerPage_button" onClick={handleShowForm}>
          <AddLogo />
          Добавить клиента
        </button>
      </div>
      <div
        className={`${hiddenState ? "" : "hiddenForm "}createClient__container`}
      >
        <form onSubmit={handleSubmit}>
          <TextFieldParams
            className="clients__info"
            name="name"
            value={clientData.name}
            onChange={handleChange}
            placeholder="Имя"
          />
          <TextFieldParams
            className="clients__info"
            name="phone"
            value={clientData.phone}
            onChange={handleChange}
            placeholder="Номер телефона"
          />
          <TextFieldParams
            className="clients__info"
            name="age"
            value={clientData.age}
            onChange={handleChange}
            placeholder="Возраст"
          />
          <TextFieldParams
            className="clients__info"
            name="growth"
            value={clientData.growth}
            onChange={handleChange}
            placeholder="Рост"
          />
          <TextFieldParams
            className="clients__info"
            name="weight"
            value={clientData.weight}
            onChange={handleChange}
            placeholder="Вес"
          />
          <TextFieldParams
            className="clients__info"
            name="waist"
            value={clientData.waist}
            onChange={handleChange}
            placeholder="Обхват талии"
          />
          <TextFieldParams
            className="clients__info"
            name="bust"
            value={clientData.bust}
            onChange={handleChange}
            placeholder="Обхват груди"
          />
          <TextFieldParams
            className="clients__info"
            name="hips"
            value={clientData.hips}
            onChange={handleChange}
            placeholder="Обхват бёдер"
          />
          <TextFieldParams
            className="clients__info"
            name="leg"
            value={clientData.leg}
            onChange={handleChange}
            placeholder="Обхват бедра"
          />
          <TextFieldParams
            className="clients__info"
            name="arm"
            value={clientData.arm}
            onChange={handleChange}
            placeholder="Обхват руки"
          />
          <button className="trainerPage_addbtn" type="submit">
            Добавить клиента
          </button>
        </form>
      </div>
    </>
  );
};
CreateClient.propTypes = {
  currentTrainer: PropTypes.object,
};
export default CreateClient;
