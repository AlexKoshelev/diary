import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as RemoveLogo } from "../../../assets/svg/noteremove.svg";
import { ReactComponent as EditLogo } from "../../../assets/svg/edit.svg";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination/pagination";
const ClientList = ({ clients, remove }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const count = clients.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const clientsCrop = paginate(clients, currentPage, pageSize);
  return (
    <>
      {clientsCrop.map((c) => (
        <div key={`${c._id}-div`} className="clients__list">
          <li key={c._id}>{c.name}</li>
          <div>
            <button
              type="button"
              className="client_button"
              key={`${c._id}-edit`}
            >
              <EditLogo />
            </button>

            <button
              type="button"
              className="client_button"
              onClick={() => remove(c._id)}
              key={`${c._id}-del`}
            >
              <RemoveLogo />
            </button>
          </div>
        </div>
      ))}
      <div className="paginate__container">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
ClientList.propTypes = {
  clients: PropTypes.array,
  remove: PropTypes.func,
};
export default ClientList;
