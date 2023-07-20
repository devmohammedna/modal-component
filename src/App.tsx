import React from "react";
import "./App.css";
import { Modal } from "./components/modal";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <button className="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal position="center" open={open} onClose={handleClose}>
        <Modal.Header>React Modal Component text Example</Modal.Header>
        <Modal.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Modal.Content>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
