import styles from "./Administrator.module.css";
import product from "../../../assets/gray.jpeg";

export const Administrator = () => {
  return (
    <main className={styles.containerAdm}>
      <img
        className="rounded"
        src={product}
        alt="product"
        width={100}
        height={100}
      />
      <h2>Últimos movimientos</h2>
    </main>
  );
};
