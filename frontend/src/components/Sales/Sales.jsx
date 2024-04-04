import AddSale from "../AddSale/AddSale.jsx";
import style from "./Sales.module.css";
import { useState } from "react";

const Sales = () => {
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
        <h1>Ventas</h1>
      </div>
      <section>
        <div>
          <button>Agregar</button>
          <button>Generar Reporte</button>
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
      <AddSale />
    </main>
  );
};

export default Sales;
