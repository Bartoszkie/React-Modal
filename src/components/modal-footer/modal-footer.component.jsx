import React from "react";
import "./modal-footer.scss";

const ModalFooter = ({ toggle, callToActionLabel }) => {
  const toggleWithAlert = () => {
    alert("OK");
    toggle();
  };

  return (
    <footer className="modal-footer">
      <button className="modal-footer__btn" onClick={toggle}>
        Change Modal
      </button>
      <button className="modal-footer__btn" onClick={toggleWithAlert}>
        {callToActionLabel}
      </button>
    </footer>
  );
};

export default ModalFooter;
