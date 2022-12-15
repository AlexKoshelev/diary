import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as OutLogo } from "../../../assets/svg/logoutcurve.svg";
import { ReactComponent as EditLogo } from "../../../assets/svg/edit.svg";
import TextField from "../../common/form/textField/textField";
import { validator } from "../../../utils/validator";
import { useDispatch } from "react-redux";
import {
  getCurrentTrainerData,
  loadTrainersList,
  updateTrainer,
} from "../../../store/trainers";
const TrainerCard = ({ trainer, logOut }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    ...trainer,
    email: trainer.email || "",
    name: trainer.name || "",
    phone: trainer.phone || "",
  });
  useEffect(() => {
    dispatch(getCurrentTrainerData());
    console.log("дата изменилась");
  }, [data]);
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handelEdit = () => {
    console.log("редактировать тренера");
  };
  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      min: {
        message: "Имя должно состоять минимум из 3 символов",
        value: 3,
      },
    },
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(updateTrainer(data));
    console.log("обновлен");

    console.log(data);
  };
  return (
    <>
      <div className="main__info">
        <div className="main__btn">
          <div>
            <button className="trainerPage_button" onClick={logOut}>
              <OutLogo />
            </button>
          </div>
          <div>
            <button className="trainerPage_button" onClick={handelEdit}>
              <EditLogo />
            </button>
          </div>
        </div>
        <div className="trainerPage_info">
          <div>Ваше имя: {trainer.name}</div>
          <div>Ваша почта: {trainer.email}</div>
          <div>Телефон: {trainer.phone}</div>
        </div>
        <div className="trainerPage_edit">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Укажите свое имя"
              placeholder="Имя"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Введите электронную почту"
              placeholder="Почта"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />

            <TextField
              label="Введите номер телефона"
              placeholder="Номер телефона"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
            <button className="trainerPage_addbtn" type="submit">
              Внести изменения
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
TrainerCard.propTypes = { trainer: PropTypes.object, logOut: PropTypes.func };
export default TrainerCard;
