import React from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./type";
import clsx from "clsx";
import { ModalHeader } from "./modal-header";
import { ModalContent } from "./modal-content";
import { ModalFooter } from "./modal-footer";
export const Modal = ({
  children,
  onClose,
  open,
  size = "lg",
  position = "center",
}: ModalProps) => {
  if (open) {
    return createPortal(
      <div className={clsx("modal-overlay", position)} onClick={onClose}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx("modal-box", size)}
        >
          {children}
        </div>
      </div>,
      document.body
    );
  }
  return null;
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
