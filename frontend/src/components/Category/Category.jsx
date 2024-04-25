import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./Category.module.css";
import { DeleteCategory } from "./DeleteCategory/DeleteCategory.jsx";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../Modal/Modal.jsx";
import AddCategory from "../AddCategory/AddCategory.jsx";
import api from "../../Api.js";

const Category = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/businesses/4/categories/");
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error("Error: La respuesta de la API no es un array");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  const handleWarning = () => {
    setShowWarning(!showWarning);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Categorías</h1>
      <hr className={styles.separateLine} />

      <section className={styles.productMainContainer}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.productContainer}
            onMouseEnter={() => setHoveredItem(category.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem !== category.name && (
              <h3 className={styles.hideTitle}>{category.name}</h3>
            )}
            {hoveredItem === category.name && (
              <div className={styles.deleteOverlay}>
                <button className={styles.buttonTrash} onClick={handleWarning}>
                  <FaTrashAlt fontSize={40} color={"#ecfefd"} />
                </button>
              </div>
            )}
          </div>
        ))}
        <div className={styles.addContainer}>
          <button
            className={styles.buttonAdd}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={openPopup}
          >
            <IoMdAddCircle fontSize={50} color={"#d6fff5"} />
          </button>
          <h3>Nueva Categoría</h3>
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

export default Category;
