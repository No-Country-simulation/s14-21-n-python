import styles from "./DeleteCategory.module.css";
import { useState } from "react";

export const DeleteCategory = ({ onDelete }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const handleDelete = () => {
    onDelete();
    setIsDisplayed(false);
  };

  const handleCancel = () => {
    setIsDisplayed(false);
  };

  if (!isDisplayed) {
    return null;
  }

  return (
    <div className={styles.containerAdm}>
      <h2>¿Estás seguro de que quieres borrar esta categoría?</h2>
      <button className={styles.buttonDelete} onClick={handleDelete}>
        Borrar
      </button>
      <button className={styles.buttonCancel} onClick={handleCancel}>
        No
      </button>
    </div>
  );
};
