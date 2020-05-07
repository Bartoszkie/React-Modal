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
      <Button buttonMethod={toggle}>Cancel</Button>
      <Button buttonMethod={toggleWithAlert}>{callToActionLabel}</Button>
    </footer>
  );
};

export default ModalFooter;

ModalFooter.propTypes = {
  callToActionLabel: PropTypes.string,
  toggle: PropTypes.func,
};
