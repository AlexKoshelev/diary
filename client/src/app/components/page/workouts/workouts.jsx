import React from "react";
import "./workouts.scss";
import AboutImg from "../../../assets/img/load.png";

const Workouts = () => {
  return (
    <div className="_container">
      <img className="about_img" src={AboutImg} alt="картинка тренируется" />
    </div>
  );
};
export default Workouts;
