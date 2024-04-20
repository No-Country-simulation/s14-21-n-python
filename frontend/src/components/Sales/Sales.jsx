import style from "./Sales.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddSale from "../AddSale/AddSale";
import Modal from "../Modal/Modal";

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

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <main className={style.container}>
      <h1 className={style.title}>Ventas</h1>
      <hr className={style.separateLine} />
      <section className={style.content}>
        <div className={style.col}>
          <div>
            <button className={style.admBtn} onClick={openPopup}>
              Agregar
            </button>
            <Modal isOpen={isOpen} onClose={closePopup}>
              <AddSale />
            </Modal>
          </div>
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
        </div>
        <div className={style.reports}>
          <Link to={"/byProduct"}>
            <button>
              Reporte de Venta
              <br /> por Producto
            </button>
          </Link>
          <Link to={"/byCategory"}>
            <button>
              Reporte de Venta
              <br />
              por Categoría
            </button>
          </Link>
          <Link to={"/byMonth"}>
            <button>
              Reporte de Venta
              <br />
              por Mes
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Sales;
