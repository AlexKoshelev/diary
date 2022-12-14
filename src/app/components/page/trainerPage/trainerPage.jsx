import React from "react";
import "./trainerPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as OutLogo } from "../../../assets/svg/logoutcurve.svg";
import { ReactComponent as EditLogo } from "../../../assets/svg/edit.svg";
import { ReactComponent as AddLogo } from "../../../assets/svg/addsquare.svg";
import { ReactComponent as RemoveLogo } from "../../../assets/svg/noteremove.svg";
import {
  createClients,
  getClients,
  getClientsById,
  loadClientsList,
  removeClient,
} from "../../../store/clients";
import {
  getCurrentTrainerData,
  loadTrainersList,
  logOut,
} from "../../../store/trainers";
import TextFieldParams from "../../common/form/textField/textFieldParams";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import TextField from "../../common/form/textField/textField";
const TrainerPage = () => {
  const navigate = useNavigate();
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
  useEffect(() => {}, []);
  const currentTrainer = useSelector(getCurrentTrainerData());
  const clients = useSelector(getClients());

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/about");
  };
  const newClients = useSelector(getClientsById(currentTrainer._id));
  if (currentTrainer && clients) {
    console.log(newClients);

    /*  console.log(newClients); */
    const handleDelete = (id) => {
      console.log(id);
      dispatch(removeClient(id));
    };

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
      }
    };
    const handleChange = (target) => {
      setClientData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
        trainerId: currentTrainer._id,
      }));
    };
    const handleShowForm = () => {
      setHiddenState((prevState) => !prevState);
    };
    return (
      <div className="trainerPage ">
        <div className="trainerPage__main">
          {currentTrainer && (
            <div className="main__info">
              <div className="main__btn">
                <div>
                  <button className="trainerPage_button" onClick={handleLogOut}>
                    <OutLogo />
                  </button>
                </div>
                <div>
                  <button className="trainerPage_button">
                    <EditLogo />
                  </button>
                </div>
              </div>
              <div>
                <div>Ваше имя: {currentTrainer.name}</div>
                <div>Ваша почта: {currentTrainer.email}</div>
                <div>Телефон: {currentTrainer.phone}</div>
              </div>
            </div>
          )}
          <div className="main__info">
            <div>
              <button className="trainerPage_button" onClick={handleShowForm}>
                <AddLogo />
                Добавить клиента
              </button>
            </div>
            <div
              className={`${
                hiddenState ? "" : "hiddenForm "
              }createClient__container`}
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
          </div>
        </div>
        <ul>
          {newClients &&
            newClients.map((c) => (
              <div className="clients__list">
                <li key={c._id}>{c.name}</li>
                <div>
                  <button
                    type="button"
                    className="client_button"
                    key={`${c._id}-edit`}
                  >
                    <EditLogo />
                  </button>

                  <button
                    type="button"
                    className="client_button"
                    onClick={handleDelete(c._id)}
                    key={`${c._id}-del`}
                  >
                    <RemoveLogo />
                  </button>
                </div>
              </div>
            ))}
        </ul>
      </div>
    );
  }
};
export default TrainerPage;
