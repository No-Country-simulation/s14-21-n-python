import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./Category.module.css";
import { DeleteCategory } from "./DeleteCategory/DeleteCategory.jsx";
import { FaTrashAlt } from "react-icons/fa";

export const Category = () => {
  const categoryItems = [
    "Víveres",
    "Dulces",
    "Bebidas",
    "Pastas",
    "Harinas",
    "Lácteos",
    "Snacks",
    "Aseo Personal",
    "Hogar",
    "Juguetes",
    "Enlatados",
  ];

  const [hoveredItem, setHoveredItem] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleWarning = () => {
    setShowWarning(!showWarning);
  };

  return (
    <main className={styles.container}>
      <div className={styles.searchContainer}>
        <h1 className={styles.titleCategory}>Categorías</h1>
        <input className={styles.inputSearch} placeholder="Buscar..." />
      </div>

      <section className={styles.productMainContainer}>
        {categoryItems.map((item) => (
          <div
            key={item}
            className={styles.productContainer}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem !== item && (
              <h2 className={styles.hideTitle}>{item}</h2>
            )}
            {hoveredItem === item && (
              <div className={styles.deleteOverlay}>
                <button onClick={handleWarning}>
                  <FaTrashAlt fontSize={30} />
                </button>
              </div>
            )}
          </div>
        ))}
        <div className={styles.addContainer}>
          <button className={styles.buttonAdd}>
            <IoMdAddCircle fontSize={45} color={"#C1C1C1"} />
          </button>
          <h2>Crear Nueva Categoría</h2>
        </div>
      </section>

      {showWarning && (
        <div className={styles.deleteCategoryBox}>
          <DeleteCategory />
        </div>
      )}
    </main>
  );
};
