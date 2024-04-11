import styles from "./DeleteCategory.module.css";
import product from "../../../assets/gray.jpeg";

export const DeleteCategory = () => {
  return (
    <main className={styles.containerAdm}>
      <h2>¿Estas Seguro que quieres borrar esta categoria?</h2>
      <button>Borrar</button>
      <button>No</button>
    </main>
  );
};
