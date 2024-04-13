import React, { useState } from "react";
import styles from "./Order.module.css";
import jsonData from "./orders.json";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

  const handleDeliveredOrders = () => {
    console.log("Entregados");
  };

  // Función para filtrar los productos basados en el término de búsqueda
  const filteredProducts = jsonData.products.filter((product) =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado del término de búsqueda
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
        {filteredProducts.length === 0 ? ( // Verifica si no se encontraron productos
          <div className={styles.row}>
            <div className={styles.cell} colSpan="5">
              No se encontró el producto.
            </div>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`${styles.row} ${styles.rowWithMargin}`}
            >
              <div className={styles.cell}>{product.date}</div>
              <div className={styles.cell}>{product.product}</div>
              <div className={styles.cell}>{product.amount}</div>
              <div className={styles.cell}>{product.supplier}</div>
              <div className={styles.cell}><span>{product.state[0]}</span></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
