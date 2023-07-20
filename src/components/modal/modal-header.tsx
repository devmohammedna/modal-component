import React, { ReactNode } from "react";

export const ModalHeader: React.FC<{ children: ReactNode }> = (props) => {
  return <div className="modal-header">{props.children}</div>;
};

