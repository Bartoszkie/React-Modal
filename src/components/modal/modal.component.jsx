import React from "react";
import "./modal.styles.scss";

import ModalHeader from "../modal-header/modal-header.component";
import ModalContent from "../modal-content/modal-content.component";
import ModalFooter from "../modal-footer/modal-footer.component";

export default class Modal extends React.Component {
  static Header = ModalHeader;
  static Content = ModalContent;
  static Footer = ModalFooter;

  state = {
    isOpen: true,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  render() {
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { isOpen, toggle: this.toggle })
    );

    return (
      <>
        {isOpen ? (
          <div className="modal-container" onClick={this.toggle}>
            <div
              className="modal-container__items"
              onClick={this.stopPropagation}
            >
              {children}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
