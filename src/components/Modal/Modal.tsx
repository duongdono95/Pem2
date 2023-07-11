import React from "react";
import "./Modal.scss";
const Modal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="Modal">{children}</div>;
};

export default Modal;
