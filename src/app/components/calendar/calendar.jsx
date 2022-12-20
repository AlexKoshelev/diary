import React from "react";
import "./calendar.scss";
import * as calendar from "../../utils/calendar";
import { useState } from "react";
/* export default class Calendar extends React.Component { */
/* const Calendar= ()=> {
   static defaultProps = {
    date: new Date(),
    years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange: Function.prototype, //Пустая функция, которая ничего не делает
  }; 
  const defaultProps = {
    date: new Date(),
    years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange: Function.prototype, //Пустая функция, которая ничего не делает
  };
  const state = {
    date: props.date,
    currentDate: new Date(),
    selectedDate: null,
  };
 const receiveYear= ()=> {
    return state.date.getFullYear();
  }
  const receiveMonth=() =>{
    return state.date.getMonth();
  }
  const receiveday=()=> {
    return state.date.getDate();
  }
  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);
    this.setState({ date });
  };
  handleNextMonthButton = () => {
    const date = new Date(this.year, this.month + 1);
    this.setState({ date });
  };
  //получаем из ref выбранное значение года и месяца и передаем в date
  handleSelectChange = () => {
    const month = this.monthSelect.value;
    const year = this.yearSelect.value;
    const date = new Date(year, month);
    this.setState({ date });
  };
  //устанавливаем состояние и сообщаем родителю, что выбрана новая дата
  handleDayClick = (date) => {
    this.setState({ selectedDate: date });
    this.props.onChange(date);
  };
  getClassName(date, currentDate, selectedDate) {
    if (calendar.areEqual(date, currentDate)) {
      return "today";
    } else if (calendar.areEqual(date, selectedDate)) {
      return "selected";
    } else {
      return "";
    }
  } */

/* const Calendar = () => {
  const props = {
    date: new Date(),
    years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange: Function.prototype, //Пустая функция, которая ничего не делает
  };
  const [state, setState] = useState({
    date: props.date,
    currentDate: new Date(),
    selectedDate: null,
  });
  const receiveYear = () => {
    return state.date.getFullYear();
  };
  const receiveMonth = () => {
    return state.date.getMonth();
  };
  const receiveDay = () => {
    return state.date.getDate();
  };
  const handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);
    setState({ date });
  };
  const handleNextMonthButton = () => {
    const date = new Date(this.year, this.month + 1);
    this.setState({ date });
  };
  //получаем из ref выбранное значение года и месяца и передаем в date
  const handleSelectChange = () => {
    const month = monthSelect.value;
    const year = yearSelect.value;
    const date = new Date(year, month);
    this.setState({ date });
  };
  //устанавливаем состояние и сообщаем родителю, что выбрана новая дата
  const handleDayClick = (date) => {
    this.setState({ selectedDate: date });
    this.props.onChange(date);
  };
  const getClassName = (date, currentDate, selectedDate) => {
    if (calendar.areEqual(date, currentDate)) {
      return "today";
    } else if (calendar.areEqual(date, selectedDate)) {
      return "selected";
    } else {
      return "";
    }
  };
  const { years, monthNames, weekDayNames } = props;
  const { currentDate, selectedDate } = state;
  const monthDate = calendar.getMonthDate(receiveYear(), receiveMonth());

  return (
    <div className="calendar">
      <header>
        <button
          className="calendar__element"
          onClick={handlePrevMonthButtonClick}
        >
          {"<"}
        </button>

        <select
          className="calendar__element"
          ref={(element) => (monthSelect = element)}
          value={receiveMonth}
          onChange={handleSelectChange}
        >
          {monthNames.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          className="calendar__element"
          ref={(element) => (yearSelect = element)}
          value={receiveYear}
          onChange={handleSelectChange}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button className="calendar__element" onClick={handleNextMonthButton}>
          {">"}
        </button>
      </header>
      <table>
        <thead>
          <tr>
            {weekDayNames.map((weekDay) => (
              <th key={weekDay}>{weekDay}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthDate.map((week, index) => (
            <tr key={index} className={"week"}>
              {week.map((date, index) =>
                date ? (
                  <td
                    className={
                      `day ` + getClassName(date, currentDate, selectedDate)
                    }
                    key={index}
                    onClick={() => handleDayClick(date)}
                  >
                    {date.getDate()}
                  </td>
                ) : (
                  <td className="day" key={index}></td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
 */
