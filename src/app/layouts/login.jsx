import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Login = () => {
  return (
    <>
      {" "}
      <div className="form">
        <div className="form__wrapper">
          <div className="form__logo">
            <img src={Logo} alt="Логотип"></img>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Login;
