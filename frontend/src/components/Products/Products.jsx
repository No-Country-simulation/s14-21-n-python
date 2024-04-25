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
              <div className={style.column}>
                {" "}
                <p className={style.headerColumn1}>Producto</p>
              </div>
              <div className={style.column}>
                <p className={style.headerColumn2}>Descripción</p>
              </div>
              <div className={style.column}>
                <p className={style.headerColumn3}>Marca</p>
              </div>
              <div className={style.column}>
                <p className={style.headerColumn4}>Categoría</p>
              </div>
              <div className={style.column}>
                <p className={style.headerColumn5}>Stock</p>
              </div>
              <div className={style.column}>
                <p className={style.headerColumn6}>Precio</p>
                <p className={style.headerColumn6}>compra</p>
              </div>
            </div>
            {products.map((product) => {
              return (
                <div className={style.row} key={product.id}>
                  <div className={style.column}>
                    {" "}
                    <p className={style.contentColumn1}>{product.name}</p>
                  </div>
                  <div className={style.column}>
                    <p className={style.contentColumn2}>
                      {product.description}
                    </p>
                  </div>
                  <div className={style.column}>
                    <p className={style.contentColumn3}>{product.brand}</p>
                  </div>
                  <div className={style.column}>
                    <p className={style.contentColumn4}>
                      {product.categoryName}
                    </p>
                  </div>
                  <div className={style.column}>
                    <p className={style.contentColumn5}>{product.stock}</p>
                  </div>
                  <div className={style.column}>
                    <p className={style.contentColumn6}>
                      $ {product.original_price}
                    </p>
                  </div>
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
