import React, { ReactNode } from "react";

export const ModalFooter: React.FC<{ children: ReactNode }> = (props) => {
  return <div className="modal-footer">{props.children}</div>;
};
