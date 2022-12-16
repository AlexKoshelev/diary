import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { validator } from "../../../utils/validator";
import { loadTrainersList, updateTrainer } from "../../../store/trainers";
import TextField from "../../common/form/textField/textField";
const EditTrainerPage = ({ hiddenState, trainer, handleShowForm }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    ...trainer,
    email: trainer.email || "",
    name: trainer.name || "",
    phone: trainer.phone || "",
  });
  useEffect(() => {
    dispatch(loadTrainersList());
    console.log("дата изменилась");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const [errors, setErrors] = useState({});
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
    /*   const isValid = Object.keys(errors).length === 0; */
  };
  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    if (data) {
      dispatch(updateTrainer(data));
      handleShowForm();
      console.log("обновлен");
    }
  };
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <>
      <div className={`${hiddenState ? "" : "hiddenForm "}trainerPage_edit`}>
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
    </>
  );
};
EditTrainerPage.propTypes = {
  hiddenState: PropTypes.bool,
  trainer: PropTypes.object,
  handleShowForm: PropTypes.func,
};
export default EditTrainerPage;
