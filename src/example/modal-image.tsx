import React from "react";
import { Modal } from "../components/modal";

export const ModalImage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="modal-example-box">
      <h3>2- Image Modal Example</h3>

      <button className="button" onClick={handleOpen}>
        Open Image Modal
      </button>
      <Modal size="xl" position="top" open={open} onClose={handleClose}>
        <Modal.Header>
          <h2>Image Modal Example</h2>
        </Modal.Header>
        <Modal.Content>
          <img
            width={"100%"}
            height={"100%"}
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Example"
          />
        </Modal.Content>
        <Modal.Footer>
          <button className="button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
