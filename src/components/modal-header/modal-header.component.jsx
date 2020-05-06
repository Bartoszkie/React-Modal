import React from "react";
import "./modal-header.styles.scss";

const ModalHeader = ({ title, toggle, children }, props) => {
  return (
    <div className="modal-header">
      <h2 className="modal-header__title">{title}</h2>
      <button className="modal-header__btn" onClick={toggle}>
        Modal Change
      </button>
    </div>
  );
};

export default ModalHeader;
