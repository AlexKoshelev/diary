import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentClientsById, updateClient } from "../../../store/clients";
import ClientEditForm from "../../common/clientEditForm";
import { ReactComponent as ExitLogo } from "../../../assets/svg/logoutcurve.svg";
import "./clientPage.scss";
const ClientPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { clientId } = params;
  console.log(clientId);
  const clientCurrentData = useSelector(getCurrentClientsById(clientId));
  console.log(clientCurrentData);

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
  const navigate = useNavigate();
  return (
    <div className="_container">
      <div className="clientpage__container">
        <div className="clientpage__header">
          <div>Страница клиента </div>
          <button
            className="clientpage__header-btn"
            onClick={() => navigate(-1)}
          >
            <ExitLogo />
          </button>
        </div>
        <div className={`createClient__container`}>
          <ClientEditForm
            handleSubmit={handleSubmitEditClient}
            clientData={editClientData}
            handleChange={handleChangeEditClient}
            btnTitle="Редактировать клиента"
          />
        </div>
      </div>
    </div>
  );
};
export default ClientPage;
