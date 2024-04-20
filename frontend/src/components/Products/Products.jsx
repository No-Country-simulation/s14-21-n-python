import style from "./Products.module.css";
import jsonData from "./products.json";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  /* const testArray = [
    {
      id: "1",
      date: "fecha",
      product: "Producto 1",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
    {
      id: "2",
      date: "fecha",
      product: "Producto 2",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
    {
      id: "3",
      date: "fecha",
      product: "Producto 3",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
    {
      id: "4",
      date: "fecha",
      product: "Producto 4",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
    {
      id: "5",
      date: "fecha",
      product: "Producto 5",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
    {
      id: "6",
      date: "fecha",
      product: "Producto 6",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
    {
      id: "7",
      date: "fecha",
      product: "Producto 7",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
    {
      id: "8",
      date: "fecha",
      product: "Producto 8",
      brand: "Marca",
      amount: "20",
      price: "9999",
    },
  ]; */

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
            {jsonData.map((prod) => {
              return (
                <div className={style.row} key={prod.id}>
                  <div className={style.column}>{prod.name}</div>
                  <div className={style.column}>{prod.description}</div>
                  <div className={style.column}>{prod.brand}</div>
                  <div className={style.column}>{prod.category}</div>
                  <div className={style.column}>{prod.amount}</div>
                  <div className={style.column}>$ {prod.price}</div>
                  <div className={style.column}> {prod.provider}</div>
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
