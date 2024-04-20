import React, { useState } from "react";
import styles from "./Card.module.css";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../Modal/Modal";

const Card = ({ title, content, icon }) => {
  const Icon = icon; // Asigna el ícono dinámicamente

  return (
    <div className={styles.card1}>
      <div className={styles.cardIcon}>
        <Icon styles={{ color: "#003c43" }} />
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const CardAccesos = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.card}>
      <button className={styles.buttonAdd} onClick={openPopup}>
        <IoMdAddCircle fontSize={45} color={"#d6fff5"} />
      </button>
      <h3>{title}</h3>
      <Modal isOpen={isOpen} onClose={closePopup}>
        {children}
      </Modal>
    </div>
  );
};

export { CardAccesos, Card };
