import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {children}
        <button className={styles.modalClose} onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Modal;
