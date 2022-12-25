import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuthErrors, signUp } from "../../../store/trainers";
import { validator } from "../../../utils/validator";
import RadioField from "../../common/form/radioField/radioField";
import TextField from "../../common/form/textField/textField";
import "./registerForm.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(getAuthErrors());
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    sex: "female",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
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
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };
  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const isValid = validate();
    if (!isValid) return; */
    console.log(data);

    dispatch(signUp(data));
    navigate("/workouts");
  };

  return (
    <>
      <div className="form__login-text">Зарегистрируйся</div>
      <div className="text__main">Чтобы получить доступ ко всем программам</div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Введите электронную почту"
          placeholder="Почта"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Введите пароль"
          type="password"
          name="password"
          placeholder="Пароль"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <TextField
          label="Укажите свое имя"
          placeholder="Имя"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />

        <RadioField
          options={[
            { name: "Женщина", value: "female" },
            { name: "Мужчина", value: "male" },
          ]}
          value={data.sex}
          name="sex"
          onChange={handleChange}
          label="Выберите ваш пол"
        />
        <TextField
          label="Введите номер телефона"
          placeholder="Номер телефона"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />

        <div className="form__btn-container">
          <button
            className="form__btn"
            type="submit"
            /*  disabled={!isValid || loginError} */
          >
            Зарегистрироваться
          </button>
          <button className="form__btn">
            <NavLink to={"/login/signin"} className="href">
              Войти
            </NavLink>
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
