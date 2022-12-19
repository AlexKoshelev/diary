import React from "react";
const TableHeader = () => {
  return (
    <>
      <thead>
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
      </thead>
    </>
  );
};
export default TableHeader;
