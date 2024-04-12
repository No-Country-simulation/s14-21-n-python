import styles from "./Card.module.css"; 
import { IoMdAddCircle } from "react-icons/io";


const Card = ({ title, content, icon }) => {
  const IconComponent = icon; // Asigna el ícono dinámicamente
  return (
    
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <IconComponent  />
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};


const CardAccesos = ({ title }) => {
  return (
    
    <div className={styles.card}>
      <button className={styles.buttonAdd}>
            <IoMdAddCircle fontSize={45} color={"#C1C1C1"} />
      </button>
      <h3>{title}</h3>

    </div>
  );
};

export { CardAccesos, Card };