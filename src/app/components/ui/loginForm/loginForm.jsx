import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField/textField";
/* import CheckBoxField from "../../common/form/checkBoxField/checkBoxField"; */
import "./loginForm.scss";
/* import Logo from "../../../assets/img/logo.png"; */
/* import { NavLink } from "react-router-dom"; */
/* 
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, logIn } from "../../store/users"; */

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    stayOn: false,
  });
  /*   const loginError = useSelector(getAuthErrors()); */
  /*  console.log(loginError); */

  /* const dispatch = useDispatch(); */
  /*   const history = useHistory(); */

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
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);
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
    /*  const redirect = history.location.state
      ? history.location.state.from.pathname
      : "/";
    dispatch(logIn({ payload: data, redirect })); */
  };
  return (
    /*  <div className="form">
      <div className="form__wrapper">
        <div className="form__logo">
          <img src={Logo} alt="Логотип"></img>
        </div>
        <div className="form__login-text">Войди</div>
        <div className="text__main">
          Чтобы получить доступ ко всем программам
        </div> */
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
      {/* <CheckBoxField
            value={data.stayOn}
            onChange={handleChange}
            name="stayOn"
          >
            Оставаться в системе
          </CheckBoxField> */}
      {/* {loginError && <p className="text-danger">{loginError}</p>} */}
      <div className="form__btn-container">
        <button
          className="form__btn"
          type="submit"
          disabled={!isValid /* || loginError */}
        >
          <NavLink to={"/login/signup"} className="href">
            Регистрация
          </NavLink>
        </button>
        <button
          className="form__btn"
          type="submit"
          disabled={!isValid /* || loginError */}
        >
          Войти
        </button>
      </div>
    </form>
    /*    </div>
    </div> */
  );
};

export default LoginForm;
