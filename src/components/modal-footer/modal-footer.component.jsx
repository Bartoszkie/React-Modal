import React from "react";
import "./modal-footer.scss";

import Button from "../button/button.component";

const ModalFooter = ({ toggle, callToActionLabel }) => {
  const toggleWithAlert = () => {
    alert("OK");
    toggle();
  };

  return (
    <footer className="modal-footer">
      <Button buttonMethod={toggle}>Cancel</Button>
      <Button buttonMethod={toggleWithAlert}>{callToActionLabel}</Button>
    </footer>
  );
};

export default ModalFooter;
