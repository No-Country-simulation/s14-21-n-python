import styles from "./Category.module.css";
import { IoMdAddCircle } from "react-icons/io";

export const Category = () => {
  
  const categoryItems = ["Víveres","Dulces", "Bebidas", "Pastas", "Harinas", "Lácteos", "Snacks", "Aseo Personal", "Hogar", "Juguetes", "Enlatados"]
  
  return (
    <main className={styles.container}>
      <div className={styles.searchContainer}>
        <h1 className={styles.titleCategory}>Categorías</h1>
        <input className={styles.inputSearch} placeholder="Buscar..." />
      </div>
      
      <section className={styles.productMainContainer}>
        {categoryItems.map((item) => (
          <div key={item} className={styles.productContainer}>
            <h2>{item}</h2>
          </div>
        ))}
        <div className={styles.addContainer}>
          <IoMdAddCircle fontSize={45} color={"#C1C1C1"}/>
          <h2>Crear Nueva Categoría</h2>
        </div>
      </section>
    
    </main>
  );
};
