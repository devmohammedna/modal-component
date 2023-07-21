import React from "react";
import { Modal } from "../components/modal";

export const ModalText = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="modal-example-box">
      <h3>1- Text Modal Example</h3>

      <button className="button" onClick={handleOpen}>
        Open Text Modal
      </button>
      <Modal size="xs" position="bottom" open={open} onClose={handleClose}>
        <Modal.Header>
          <h2>Text Modal Example</h2>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            molestiae commodi odio quidem pariatur?
          </p>
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
