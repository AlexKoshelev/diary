import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import LoginForm from "../components/ui/loginForm/loginForm";
import RegisterForm from "../components/ui/registerForm/registerForm";
const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "registration" ? type : "login"
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "registration" ? "login" : "registration"
    );
  };

  return (
    <>
      {" "}
      <div className="form">
        <div className="form__wrapper">
          <div className="form__logo">
            <img src={Logo} alt="Логотип"></img>
          </div>
          <div className="form__login-text">Войди</div>
          <div className="text__main">
            Чтобы получить доступ ко всем программам
          </div>
          <Outlet />
          {/*  {formType === "registration" ? <RegisterForm /> : <LoginForm />} */}
        </div>
      </div>
    </>
  );
};
export default Login;
