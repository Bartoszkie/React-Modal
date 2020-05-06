import React from "react";

import "./App.styles.scss";

import Modal from "./components/modal/modal.component";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Modal>
          <Modal.Header title={"Tytuł modala"}></Modal.Header>
          <Modal.Content>
            <h1>to powinno działać tak</h1>
          </Modal.Content>
          <Modal.Footer callToActionLabel={"Udało Się!"} />
        </Modal>
      </div>
    );
  }
}

export default App;
