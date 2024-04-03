import styles from "./Header.module.css";

const Header = ({ nombre }) => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.nombre}>Hola {nombre} </h1>
    </div>
  );
};

export default Header;
