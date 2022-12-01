import React from "react";
import "./index.css";
import * as calendar from "../../utils/calendar";
export default class Calendar extends React.Component {
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
  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null,
  };
  get year() {
    return this.state.date.getFullYear();
  }
  get month() {
    return this.state.date.getMonth();
  }
  get day() {
    return this.state.date.getDate();
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
  }
  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;
    const monthDate = calendar.getMonthDate(this.year, this.month);

    return (
      <div className="calendar">
        <header>
          <button onClick={this.handlePrevMonthButtonClick}>{"<"}</button>

          <select
            ref={(element) => (this.monthSelect = element)}
            value={this.month}
            onChange={this.handleSelectChange}
          >
            {monthNames.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select
            ref={(element) => (this.yearSelect = element)}
            value={this.year}
            onChange={this.handleSelectChange}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button onClick={this.handleNextMonthButton}>{">"}</button>
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
                        `day ` +
                        this.getClassName(date, currentDate, selectedDate)
                      }
                      key={index}
                      onClick={() => this.handleDayClick(date)}
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
  }
}
