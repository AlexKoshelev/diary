import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createExersices,
  getExersices,
  getExersicesLoadingStatus,
} from "../../../store/exercise";
import Calendar from "../../calendar/calendar";
import "./table.scss";
const Table = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    /*  dispatch(
      createExersices({ _id: nanoid(), name: "Шраги" })
    ); */
  }, []);
  const exersises = useSelector(getExersices());

  const isLoadingExersices = useSelector(getExersicesLoadingStatus());

  return (
    <div className="diary__container _container">
      <div className="diary__container">
        <div className="diary__container-table">table</div>
        <div className="diary__container-calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
};
export default Table;
