import styles from "./Card.module.css"; // Asegúrate de tener un archivo CSS para estilizar tu tarjeta


const Card = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
