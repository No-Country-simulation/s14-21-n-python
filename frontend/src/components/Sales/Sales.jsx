import style from "./Sales.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AddSale from "../AddSale/AddSale";
import Modal from "../Modal/Modal";
import api from "../../Api.js";

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [productsMap, setProductsMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await api.get("/businesses/4/products/");
        const products = productsResponse.data;
        console.log(productsResponse.data);
        const productsMap = {};
        products.forEach((product) => {
          productsMap[product.id] = product.name;
        });
        setProductsMap(productsMap);

        const transactionsResponse = await api.get(
          "/businesses/4/transactions/",
        );
        const transactions = transactionsResponse.data;

        const sales = transactions.filter(
          (transaction) => transaction.type === "Sale",
        );

        const salesWithProductNames = sales.map((sale) => ({
          ...sale,
          productName: productsMap[sale.product_id],
        }));
        setSales(salesWithProductNames);
      } catch (error) {
        console.error("Error in request:", error);
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
    <main className={style.container}>
      <h1 className={style.title}>Ventas</h1>
      <hr className={style.separateLine} />
      <section className={style.content}>
        <div className={style.reports}>
          <Link to={"/byProduct"}>
            <button className={style.admBtn}>
              Reporte de Venta
              <br /> por Producto
            </button>
          </Link>
          <Link to={"/byCategory"}>
            <button className={style.admBtn}>
              Reporte de Venta
              <br />
              por Categoría
            </button>
          </Link>
          <Link to={"/byMonth"}>
            <button className={style.admBtn}>
              Reporte de Venta
              <br />
              por Mes
            </button>
          </Link>
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
            <div className={style.column1}>Producto</div>
            <div className={style.column}>Cantidad</div>
            <div className={style.column}>Precio</div>
          </div>
          {sales.map((sale) => {
            return (
              <div className={style.row} key={sale.id}>
                <div className={style.column}>{sale.transaction_date}</div>
                <div className={style.column1}>{sale.productName}</div>
                <div className={style.column}>{sale.quantity}</div>
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
