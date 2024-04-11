import styles from "./ExpireProducts.module.css";
import product from "../../../assets/gray.jpeg";

export const ExpireProducts = () => {
  return (
    <main className={styles.container}>
      <img
        className="rounded"
        src={product}
        alt="product"
        width={100}
        height={100}
      />
      <h2>Próximos a caducar</h2>
    </main>
  );
};
