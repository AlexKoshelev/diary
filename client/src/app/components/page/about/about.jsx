import React from "react";
import AboutImg from "../../../assets/img/about.png";
import "./about.scss";
const About = () => {
  return (
    <div className="_container">
      <img className="about_img" src={AboutImg} alt="картинка тренируется" />
    </div>
  );
};
export default About;
