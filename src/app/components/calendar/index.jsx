import React from "react";
import "./index.css";
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
    console.log(date);
    this.setState({ date });
  };
  handleNextMonthButton = () => {
    const date = new Date(this.year, this.month + 1);
    console.log(date);

    this.setState({ date });
  };
  handleSelectChenge = () => {};
  //устанавливаем состояние и сообщаем родителю, что выбрана новая дата
  handleDayClick = (date) => {
    this.setState({ selectedDate: date });
    this.props.onChange(date);
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;

    const monthDate = [
      [
        undefined,
        undefined,
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
      ],
      [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
      ],
      [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
      ],
      [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        new Date(),
      ],
      [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        undefined,
        undefined,
        undefined,
      ],
    ];

    return (
      <div className="calendar">
        <header>
          <button onClick={this.handlePrevMonthButtonClick}>{"<"}</button>

          <select>
            {monthNames.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select>
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
                      className="day"
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
