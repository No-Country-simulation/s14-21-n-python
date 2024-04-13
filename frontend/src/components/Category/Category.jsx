import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./Category.module.css";
import { DeleteCategory } from "./DeleteCategory/DeleteCategory.jsx";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../Modal/Modal.jsx";
import AddCategory from "../AddCategory/AddCategory.jsx";

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

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
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
                <button>
                  <FaTrashAlt fontSize={30} />
                </button>
              </div>
            )}
          </div>
        ))}
        <div className={styles.addContainer}>
          <button className={styles.buttonAdd} onClick={openPopup}>
            <IoMdAddCircle fontSize={45} color={"#C1C1C1"} />
          </button>
          <h2>Crear Nueva Categoría</h2>
          <Modal isOpen={isOpen} onClose={closePopup}>
            <AddCategory />
          </Modal>
        </div>
      </section>

      {/*<div className={styles.deleteCategoryBox}>
        <DeleteCategory/>
      </div>*/}
    </main>
  );
};
