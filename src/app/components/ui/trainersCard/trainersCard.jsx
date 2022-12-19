import React from "react";
/* import PropTypes from "prop-types"; */
import "./trainersCard.scss";
import SelectField from "../../common/form/selectField/selectField";
import TextField from "../../common/form/textField/textField";

const TrainersCard = ({ clientsList, onChange }) => {
  return (
    <div className="trainers__card">
      <div className="trainers__card-selector">
        <SelectField
          defaultOption="Выберите клиента"
          value={clientsList.value}
          onChange={(target) => onChange(target.value)}
          options={clientsList}
          error={""}
          name={"name"}
          key={clientsList.value}
        />
      </div>
      <div className="trainers__card-cardio">
        <TextField
          label={"Кардио:"}
          className="clients__info"
          name="name"
          /* value={clientData.name} */
          /*   onChange={handleChange} */
        />
      </div>

      <div className="trainers__card-info">
        <div className="info__worknum">Тренеровка:</div>
        <div className="info__date">Дата</div>
      </div>
    </div>
  );
};
export default TrainersCard;
