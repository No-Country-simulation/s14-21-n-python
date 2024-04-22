import style from "./Products.module.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "../Modal/Modal";
import AddProd from "../AddProd/AddProd";
import api from "../../Api.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await api.get("/businesses/4/categories/");
        const categories = categoriesResponse.data;
        console.log(categoriesResponse.data);
        const categoriesMap = {};
        categories.forEach((category) => {
          categoriesMap[category.id] = category.name;
        });
        setCategoriesMap(categoriesMap);

        const productsResponse = await api.get("/businesses/4/products/");
        const products = productsResponse.data;

        const productsWithCategoryNames = products.map((product) => ({
          ...product,
          categoryName: categoriesMap[product.category_id],
        }));
        setProducts(productsWithCategoryNames);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <div className={style.container}>
        <h1 className={style.title}>Productos</h1>
        <hr className={style.separateLine} />
        <section className={style.containerFilters}>
          <div className={style.searchContainer}>
            <input
              type="search"
              placeholder="Buscar..."
              className={style.searchInput}
            />
            <FaSearch className={style.searchIcon} />
          </div>

          <button className={style.admBtn} onClick={openPopup}>
            Agregar
          </button>
          <Modal isOpen={isOpen} onClose={closePopup}>
            <AddProd />
          </Modal>
        </section>

        <section>
          <div className={style.layout}>
            <div className={style.header}>
              <div className={style.column}>Producto</div>
              <div className={style.column}>Descripción</div>
              <div className={style.column}>Marca</div>
              <div className={style.column}>Categoría</div>
              <div className={style.column}>Stock</div>
              <div className={style.column}>
                Precio
                <p>compra</p>
              </div>
              <div className={style.column}>Proveedor</div>
            </div>
            {products.map((product) => {
              return (
                <div className={style.row} key={product.id}>
                  <div className={style.column}>{product.name}</div>
                  <div className={style.column}>{product.description}</div>
                  <div className={style.column}>{product.brand}</div>
                  <div className={style.column}>{product.categoryName}</div>
                  <div className={style.column}>{product.stock}</div>
                  <div className={style.column}>$ {product.original_price}</div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
