import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuthErrors, logIn } from "../../../store/trainers";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField/textField";
import "./loginForm.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(getAuthErrors());
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
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
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
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
  /*  const isValid = Object.keys(errors).length === 0; */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*     const isValid = validate();
    if (!isValid) return; */
    console.log(data);
    navigate("/workouts");

    dispatch(logIn({ payload: data }));
  };
  return (
    <>
      <div className="form__login-text">Войди</div>
      <div className="text__main">Чтобы получить доступ ко всем программам</div>
      <form onSubmit={handleSubmit}>
        <TextField
          label=""
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Почта"
        />
        <TextField
          label=""
          type="password"
          name="password"
          placeholder="Пароль"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="form__btn-container">
          <button className="form__btn">
            <NavLink to={"/login/signup"} className="href">
              Регистрация
            </NavLink>
          </button>
          <button
            className="form__btn"
            type="submit"
            /*   disabled={!isValid || loginError} */
          >
            Войти
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
