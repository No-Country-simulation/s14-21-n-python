import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.closeButton} onClick={onClose}>
          x
        </div>
        <div className={styles.modalContent}>
          {children}
          <button className={styles.modalClose} onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
