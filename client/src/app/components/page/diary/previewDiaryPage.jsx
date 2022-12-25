import React from "react";
import AboutImg from "../../../assets/img/diary.png";
const PreviewDiaryPage = () => {
  return (
    <div className="_container">
      <div className="text">
        Удобная альтернатива для контроля за параметрами и прогрессом клиентов
        для Тренира.
      </div>
      <img className="about_img" src={AboutImg} alt="картинка тренируется" />
      <div className="text">
        Чтобы получить доступ к дневнику, необходимо войти или
        зарегистрироваться
      </div>
    </div>
  );
};
export default PreviewDiaryPage;
