// import AddSale from "../AddSale/AddSale.jsx";
import style from "./Sales.module.css";
import { useState } from "react";
import AddSale from "../AddSale/AddSale";

const Sales = () => {
  const testArray = [
    {
      id: "1",
      name: "Venta 1",
      date: "fecha",
      price: "9999",
    },
    {
      id: "2",
      name: "Venta 2",
      date: "fecha",
      price: "9999",
    },
    {
      id: "3",
      name: "Venta 3",
      date: "fecha",
      price: "9999",
    },
    {
      id: "4",
      name: "Venta 4",
      date: "fecha",
      price: "9999",
    },
  ];

  const [modifySales, setModifySales] = useState(false);

  return (
    <main className={style.container}>
      <div className={style.title}>
        <h1>Ventas</h1>
      </div>
      <section>
        <div>
          <button>Agregar</button>
          <button>Generar Reporte</button>
        </div>
      </section>
      <section className={style.layout}>
        {testArray.map((sale) => {
          return (
            <div className={style.card} key={sale.id}>
              <div className={style.data}>
                <h3>{sale.name}</h3>
                <p> {sale.date}</p>
                <p> $ {sale.price} </p>
                {modifySales && (
                  <div>
                    <button>Mod</button>
                    <button>Elim</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
      <AddSale />
    </main>
  );
};

export default Sales;
