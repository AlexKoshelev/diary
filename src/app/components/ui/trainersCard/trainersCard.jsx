import React from "react";
/* import PropTypes from "prop-types"; */
import "./trainersCard.scss";
import SelectField from "../../common/form/selectField/selectField";
import { useState } from "react";
const TrainersCard = ({ clients }) => {
  const [clientData, setClientData] = useState({ name: "", id: "" });
  const clientsList = clients
    ? Object.values(clients).map((c) => ({
        label: c.name,
        value: c.id,
      }))
    : {};
  const handleChange = (target) => {
    setClientData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  console.log(clientData);
  return (
    <div className="trainers__card">
      <div className="trainers__card-selector">
        <SelectField
          defaultOption="Клиенты: "
          value={clients.id}
          onChange={handleChange}
          options={clientsList}
          error={""}
          name={"name"}
          key={clients.id}
        />
      </div>
      <div className="trainers__card-cardio">Кардио:</div>
      <div className="trainers__card-info">
        <div className="info__worknum">Тренеровка:</div>
        <div className="info__date">Дата</div>
      </div>
    </div>
  );
};
export default TrainersCard;
