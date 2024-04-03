import AddProd from "../AddProd/AddProd";
import style from "./Productos.module.css";
import { useState } from "react";

const Productos = () => {
  const testArray = [
    {
      id: "1",
      name: "fideos",
      stock: "99",
      brand: "una marca ahi",
      provider: "uno tambien ahi",
    },
    {
      id: "2",
      name: "arroz",
      stock: "99",
      brand: "una marca ahi",
      provider: "uno tambien ahi",
    },
    {
      id: "3",
      name: "polenta",
      stock: "99",
      brand: "una marca ahi",
      provider: "uno tambien ahi",
    },
    {
      id: "4",
      name: "aceite",
      stock: "99",
      brand: "una marca ahi",
      provider: "uno tambien ahi",
    },
  ];

  const [modifyProds, setModifyProds] = useState(false);

  return (
    <main className={style.container}>
      <div>
        <h1>Titulo de la pagina de productos</h1>
      </div>
      <section>
        <div>
          <input type="text" />
          <button>Agregar</button>
          <button onClick={() => setModifyProds(!modifyProds)}>
            Administrar
          </button>
        </div>
      </section>
      <section className={style.layout}>
        {testArray.map((prod) => {
          return (
            <div className={style.card} key={prod.id}>
              <h3>{prod.name}</h3>
              <p> {prod.brand}</p>
              <p> {prod.provider} </p>
              <p> Stock: {prod.stock}</p>
              {modifyProds && (
                <div>
                  <button>Mod</button>
                  <button>Elim</button>
                </div>
              )}
            </div>
          );
        })}
      </section>
      <AddProd />
    </main>
  );
};

export default Productos;
