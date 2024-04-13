import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCog } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de la manera correcta

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>StockEase</h2>
      <div className={styles.iconButtonContainer}>
        <FontAwesomeIcon icon={faCog} className={styles.icon} />
        <button className={styles.exitButton}>Salir</button>
      </div>
    </div>
  );
};

export default Header;
