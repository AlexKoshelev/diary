import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateClient } from "../../../store/clients";
import ClientEditForm from "../../common/clientEditForm";
const EditClientPage = ({
  clientCurrentData,
  showForm,
  handleShowFormClient,
}) => {
  const dispatch = useDispatch();
  const [editClientData, setEditClientData] = useState({
    _id: clientCurrentData._id || "",
    name: clientCurrentData.name || "",
    phone: clientCurrentData.phone || "",
    age: clientCurrentData.params.age || "",
    arm: clientCurrentData.params.arm || "",
    bust: clientCurrentData.params.bust || "",
    growth: clientCurrentData.params.growth || "",
    hips: clientCurrentData.params.hips || "",
    leg: clientCurrentData.params.leg || "",
    waist: clientCurrentData.params.waist || "",
    weight: clientCurrentData.params.weight || "",
    trainerId: clientCurrentData.trainerId || "",
  });

  const handleSubmitEditClient = (e) => {
    e.preventDefault();
    const transformEditClientData = {
      _id: editClientData._id,
      name: editClientData.name,
      phone: editClientData.phone,
      params: {
        age: editClientData.age,
        arm: editClientData.arm,
        bust: editClientData.bust,
        growth: editClientData.growth,
        hips: editClientData.hips,
        leg: editClientData.leg,
        waist: editClientData.waist,
        weight: editClientData.weight,
      },
      trainerId: editClientData.trainerId,
    };
    if (transformEditClientData && editClientData) {
      console.log(transformEditClientData);
      dispatch(
        updateClient(transformEditClientData._id, transformEditClientData)
      );
      console.log("Клиент обновлен");
    }
  };
  const handleChangeEditClient = (target) => {
    setEditClientData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <>
      <div
        className={`${showForm ? "" : "hiddenForm "}createClient__container`}
      >
        <button className="trainerPage_addbtn" onClick={handleShowFormClient}>
          Скрыть форму редактирования
        </button>
        {clientCurrentData && (
          <ClientEditForm
            handleSubmit={handleSubmitEditClient}
            clientData={editClientData}
            handleChange={handleChangeEditClient}
            btnTitle="Редактировать клиента"
          />
        )}
      </div>
    </>
  );
};
EditClientPage.propTypes = {
  clientCurrentData: PropTypes.object,
  showForm: PropTypes.bool,
  handleShowFormClient: PropTypes.func,
};
export default EditClientPage;
