import React, { ReactNode } from "react";

export const ModalContent: React.FC<{ children: ReactNode }> = (props) => {
  return <div className="modal-content">{props.children}</div>;
};
