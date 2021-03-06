import React from "react";
import PropTypes from "prop-types";

import "./modal-footer.scss";

import Button from "../button/button.component";

const ModalFooter = ({ toggle, callToActionLabel }) => {
  const toggleWithAlert = () => {
    alert("OK");
    toggle();
  };

  return (
    <footer className="modal-footer">
      <Button onClick={toggle}>Cancel</Button>
      <Button onClick={toggleWithAlert}>{callToActionLabel || "Default Text"}</Button>
    </footer>
  );
};

export default ModalFooter;

ModalFooter.propTypes = {
  callToActionLabel: PropTypes.string,
  toggle: PropTypes.func,
};
