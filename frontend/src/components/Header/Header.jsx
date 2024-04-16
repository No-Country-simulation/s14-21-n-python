import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo.png";
import { faEnvelope, faCog } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de la manera correcta

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt="" />
      <div className={styles.iconButtonContainer}>
        <button className={styles.exitButton}>Salir</button>
      </div>
    </div>
  );
};

export default Header;
