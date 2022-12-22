import React from "react";
import PropTypes from "prop-types";
import TextFieldParams from "./form/textField/textFieldParams";
const ClientForm = ({ handleSubmit, clientData, handleChange, btnTitle }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextFieldParams
          className="clients__info"
          name="name"
          value={clientData.name}
          onChange={handleChange}
          placeholder="Имя"
        />
        <TextFieldParams
          className="clients__info"
          name="phone"
          value={clientData.phone}
          onChange={handleChange}
          placeholder="Номер телефона"
        />
        <TextFieldParams
          className="clients__info"
          name="age"
          value={clientData.age}
          onChange={handleChange}
          placeholder="Возраст"
        />
        <TextFieldParams
          className="clients__info"
          name="growth"
          value={clientData.growth}
          onChange={handleChange}
          placeholder="Рост"
        />
        <TextFieldParams
          className="clients__info"
          name="weight"
          value={clientData.weight}
          onChange={handleChange}
          placeholder="Вес"
        />
        <TextFieldParams
          className="clients__info"
          name="waist"
          value={clientData.waist}
          onChange={handleChange}
          placeholder="Обхват талии"
        />
        <TextFieldParams
          className="clients__info"
          name="bust"
          value={clientData.bust}
          onChange={handleChange}
          placeholder="Обхват груди"
        />
        <TextFieldParams
          className="clients__info"
          name="hips"
          value={clientData.hips}
          onChange={handleChange}
          placeholder="Обхват бёдер"
        />
        <TextFieldParams
          className="clients__info"
          name="leg"
          value={clientData.leg}
          onChange={handleChange}
          placeholder="Обхват бедра"
        />
        <TextFieldParams
          className="clients__info"
          name="arm"
          value={clientData.arm}
          onChange={handleChange}
          placeholder="Обхват руки"
        />
        <button className="trainerPage_addbtn" type="submit">
          {btnTitle}
        </button>
      </form>
    </>
  );
};
ClientForm.propTypes = {
  handleSubmit: PropTypes.func,
  clientData: PropTypes.object,
  handleChange: PropTypes.func,
  btnTitle: PropTypes.string,
};
export default ClientForm;
