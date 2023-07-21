import React from "react";
import { Modal } from "../components/modal";

export const ModalForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal-example-box">
      <h3>3- Form Modal Example</h3>

      <button className="button" onClick={handleOpen}>
        Open Form Modal
      </button>
      <Modal size="sm" position="center" open={open} onClose={handleClose}>
        <Modal.Header>
          <h2>Form Modal Example</h2>
        </Modal.Header>
        <form>
          <Modal.Content>
            <div className="modal-example-box">
              <div className="control-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="control-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <div className="action-form">
              <button className="button" onClick={handleClose}>
                Close
              </button>
              <button className="button submit" type="submit">
                Submit
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};
