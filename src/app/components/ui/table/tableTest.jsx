import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createExersices,
  getExersices,
  getExersicesLoadingStatus,
} from "../../../store/exercise";
import Calendar from "../../calendar/calendar";
import SelectField from "../../common/form/selectField/selectField";
import TextField from "../../common/form/textField/textField";
import "./table.scss";
const Table = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    sex: "female",
    age: "",
    arm: "",
    bust: "",
    growth: "",
    hips: "",
    leg: "",
    waist: "",
    waight: "",
    exersise: "",
  });

  useEffect(() => {
    /*  dispatch(
      createExersices({ _id: nanoid(), name: "Шраги" })
    ); */
  }, []);
  const isLoadingExersices = useSelector(getExersicesLoadingStatus());
  const exersises = useSelector(getExersices());
  const exersisesList = !isLoadingExersices
    ? Object.values(exersises).map((p) => ({
        label: p.name,
        value: p.id,
      }))
    : {};

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <div className="diary__container _container">
      <div className="diary__container">
        <div className="diary__container-table">
          <div className="table__info">
            <SelectField
              defaultOption="Упражнения: "
              value={data.exersise}
              onChange={handleChange}
              options={exersisesList}
              error={""}
              name={"exersise"}
            />
          </div>
          <div className="exercise__input">
            <TextField
              placeholder="Напишите название упражнения:"
              name="exersise"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="diary__container-calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
};
export default Table;
