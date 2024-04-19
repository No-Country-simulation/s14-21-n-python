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
  const [showWarning, setShowWarning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleWarning = () => {
    setShowWarning(!showWarning);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const filteredCategories = categoryItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Categorías</h1>
      <hr className={styles.separateLine} />

      <section className={styles.productMainContainer}>
        {filteredCategories.map((item) => (
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
                <button className={styles.buttonTrash} onClick={handleWarning}>
                  <FaTrashAlt fontSize={60} />
                </button>
              </div>
            )}
          </div>
        ))}
        <div className={styles.addContainer}>
          <button className={styles.buttonAdd} onClick={openPopup}>
            <IoMdAddCircle fontSize={50} color={"#00B389"} />
          </button>
          <h2>Crear Nueva Categoría</h2>
          <Modal isOpen={isOpen} onClose={closePopup}>
            <AddCategory />
          </Modal>
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
