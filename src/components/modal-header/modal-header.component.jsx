import React from "react";
import "./modal-header.styles.scss";

import Button from "../button/button.component";

const ModalHeader = ({ title, toggle }) => {
  return (
    <div className="modal-header">
      <h2 className="modal-header__title">{title}</h2>
      <Button buttonMethod={toggle}>Modal Change</Button>
    </div>
  );
};

export default ModalHeader;
