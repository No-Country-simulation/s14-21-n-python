import style from "./Products.module.css";
import { useState } from "react";
import jsonData from "./products.json";

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

  const [modifyProds, setModifyProds] = useState(false);

  return (
    <main>
      <div className={style.container}>
        <h1 className={style.title}>Productos</h1>
        <hr className={style.separateLine} />
        <section className={style.containerFilters}>
          <div className={style.modifyControls}>
            <button onClick={() => setModifyProds(!modifyProds)}>
              Modificar
            </button>
          </div>

          <div className={style.searchAndFilter}>
            <button>Filtros</button>
            <input type="text" placeholder="Buscar..." />
          </div>
        </section>

        <section>
          <div className={style.layout}>
            <div className={style.header}>
              <div className={style.column}>Producto</div>
              <div className={style.column}>Descripcion</div>
              <div className={style.column}>Marca</div>
              <div className={style.column}>Categoria</div>
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
                  {modifyProds && <button>E</button>}
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
