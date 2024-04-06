import styles from "./Category.module.css";
import product from "../../assets/gray.jpeg";
import { ExpireProducts } from "./ExpireProducts/ExpireProducts.jsx";
import { Administrator } from "./ Administrator/Administrator.jsx";

export const Category = () => {
  return (
    <main className={styles.container}>
      <div className={styles.searchContainer}>
        <h1 className={styles.titleCategory}>Categorías</h1>
        <input className={styles.inputSearch} placeholder="Buscar..." />
      </div>

      <section className={styles.productContainer}>
        <div className={styles.informationBox}>
          <img className="rounded" src={product} alt="product" width={150} />
          <div className={styles.information}>
            <h4 className="font-bold text-xl">Producto Más Vendido</h4>
            <span className={styles.productInformation}>
              <h3>Nombre Del Producto</h3>
              <p className="text-gray-500">
                Acá podría visualizarse una breve descripción del producto
              </p>
            </span>
          </div>
        </div>

        <div className={styles.availableBox}>
          <select className={styles.select}>
            <option value="" disabled selected hidden>
              Filtrar por..
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <div className={styles.buttonContainer}>
            <h3 className={styles.textAvailable}>Disponibles</h3>
            <button className={styles.buttonAvailable}>25</button>
          </div>
        </div>
      </section>

      <div className={styles.containerComponents}>
        <Administrator />
        <ExpireProducts />
      </div>
    </main>
  );
};
