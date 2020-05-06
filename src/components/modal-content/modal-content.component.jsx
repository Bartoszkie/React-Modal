import React from "react";
import "./modal-content.styles.scss";

const ModalContent = ({ children }, props) => {
  return <div className="modal-content">{children}</div>;
};

export default ModalContent;
