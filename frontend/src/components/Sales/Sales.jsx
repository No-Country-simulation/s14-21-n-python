import style from "./Sales.module.css";
import { useState } from "react";

const Sales = () => {
  const testArray = [
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
  ];

  const [modifySales, setModifySales] = useState(false);

  return (
    <main className={style.container}>
      <h1 className={style.title}>Ventas</h1>
      <hr className={style.separateLine} />
      <section>
        <div>
          <button>Generar Reporte</button>
        </div>
      </section>
      <section>
        <div className={style.layout}>
          <div className={style.header}>
            <div className={style.column}>Fecha</div>
            <div className={style.column}>Producto</div>
            <div className={style.column}>Marca</div>
            <div className={style.column}>Cantidad</div>
            <div className={style.column}>Precio</div>
          </div>
          {testArray.map((sale) => {
            return (
              <div className={style.row} key={sale.id}>
                <div className={style.column}>{sale.date}</div>
                <div className={style.column}>{sale.product}</div>
                <div className={style.column}>{sale.brand}</div>
                <div className={style.column}>{sale.amount}</div>
                <div className={style.column}>$ {sale.price}</div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Sales;
