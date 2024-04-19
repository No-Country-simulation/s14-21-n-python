import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";

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
