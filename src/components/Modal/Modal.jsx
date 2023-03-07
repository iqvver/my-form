import React from "react";
import modal from "./Modal.module.css";

const Modal = ({ textModal, titleModal, modalClose }) => {
  return (
    <div className={modal.overlay} onClick={() => modalClose(false)}>
      <div className={modal.wrapper} onClick={e => e.stopPropagation()}>
        <div className={modal.title}>{titleModal}</div>
        <div className={modal.text}>{textModal}</div>
        <div className={modal.close} onClick={() => modalClose(false)}>&times;</div>
      </div>
    </div>
  );
};

export default Modal;
