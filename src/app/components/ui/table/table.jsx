import React from "react";

import TrainersCard from "../trainersCard/trainersCard";
import "./table.scss";

const Table = ({ trainer, clients }) => {
  return (
    <>
      <div className="diary__trainer">
        <div className="diary__trainer-name">{trainer.name}</div>
        <div className="table__container">
          <TrainersCard clients={clients} />
          <table className="table__diary">
            <tbody>
              <tr>
                <td rowSpan="2">Упражнения</td>
                <td colSpan="10">Подходы</td>
              </tr>
              <tr>
                <td>
                  <p className="vertical">Вес</p>
                </td>
                <td>
                  <p className="vertical">Количество повторений</p>
                </td>
                <td>
                  <p className="vertical">Вес</p>
                </td>
                <td>
                  <p className="vertical">Количество повторений</p>
                </td>
                <td>
                  <p className="vertical">Вес</p>
                </td>
                <td>
                  <p className="vertical">Количество повторений</p>
                </td>
                <td>
                  <p className="vertical">Вес</p>
                </td>
                <td>
                  <p className="vertical">Количество повторений</p>
                </td>
                <td>
                  <p className="vertical">Вес</p>
                </td>
                <td>
                  <p className="vertical">Количество повторений</p>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
