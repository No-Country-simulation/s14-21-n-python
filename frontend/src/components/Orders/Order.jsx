import React from "react";
import styles from "./Order.module.css";
import jsonData from "./orders.json";

const Orders = () => {
  const handleDeliveredOrders = () => {
    console.log("Entragados");
  };

  return (
    <div className={styles.ordersContainer}>
      <h2 className={styles.ordersTitle}>Pedidos</h2>
      <hr className={styles.hr} />
      <div className={styles.filterContainer}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Filtros"
            className={styles.filterInput}
          />
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.searchInput}
          />
        </div>
        <button
          onClick={handleDeliveredOrders}
          className={styles.deliveredButton}
        >
          Pedidos Entregados
        </button>
      </div>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.cell}>Fecha</div>
          <div className={styles.cell}>Productos</div>
          <div className={styles.cell}>Cantidad</div>
          <div className={styles.cell}>Proveedor</div>
          <div className={styles.cell}>Estado</div>
        </div>
        {jsonData.products.map((product, index) => (
          <div key={index} className={`${styles.row} ${styles.rowWithMargin}`}>
            <div className={styles.cell}>{product.date}</div>
            <div className={styles.cell}>{product.product}</div>
            <div className={styles.cell}>{product.amount}</div>
            <div className={styles.cell}>{product.supplier}</div>
            <div className={styles.cell}>{product.state[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
