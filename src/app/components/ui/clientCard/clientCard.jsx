import React from "react";
import PropTypes from "prop-types";
import "./clientCard.scss";
const ClientCard = ({ client }) => {
  console.log(client.params);

  return (
    <div className="client__card">
      <h1>{client.name}</h1>
      <h1>Телефон: {client.phone}</h1>
      <br />
      <h1>Параметры:</h1>
      <div className="client__card-flex">
        <div>
          <h3>Возраст: {client.params.age}</h3>
          <h3>Рост: {client.params.growth}</h3>
          <h3>Обхват груди: {client.params.bust}</h3>
          <h3>Обхват бедра: {client.params.leg}</h3>
        </div>
        <div>
          <h3>Вес: {client.params.weight}</h3>
          <h3>Талия: {client.params.waist}</h3>
          <h3>Бёдра: {client.params.hips}</h3>
          <h3>Бицепс: {client.params.arm}</h3>
        </div>
      </div>
      <button className="client__card-link">Перейти на страницу клиента</button>
    </div>
  );
};
ClientCard.propTypes = {
  client: PropTypes.object,
};
export default ClientCard;
