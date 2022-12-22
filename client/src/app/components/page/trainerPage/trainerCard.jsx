import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as OutLogo } from "../../../assets/svg/logoutcurve.svg";
import { ReactComponent as EditLogo } from "../../../assets/svg/edit.svg";

import EditTrainerPage from "./editTrainerPage";
const TrainerCard = ({ trainer, logOut }) => {
  const [hiddenState, setHiddenState] = useState(false);

  const handleShowForm = () => {
    setHiddenState((prevState) => !prevState);
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
            <button className="trainerPage_button" onClick={handleShowForm}>
              <EditLogo />
            </button>
          </div>
        </div>
        <div className={`${!hiddenState ? "" : "hiddenForm "}trainerPage_info`}>
          <div>Ваше имя: {trainer.name}</div>
          <div>Ваша почта: {trainer.email}</div>
          <div>Телефон: {trainer.phone}</div>
        </div>
        <EditTrainerPage
          hiddenState={hiddenState}
          trainer={trainer}
          handleShowForm={handleShowForm}
        />
      </div>
    </>
  );
};
TrainerCard.propTypes = { trainer: PropTypes.object, logOut: PropTypes.func };
export default TrainerCard;
