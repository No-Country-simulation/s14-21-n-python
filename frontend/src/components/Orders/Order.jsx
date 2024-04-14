import React, { useState } from "react";
import styles from "./Order.module.css";
import jsonData from "./orders.json";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeliveredOrders, setShowDeliveredOrders] = useState(false);
  const [deliveredProducts, setDeliveredProducts] = useState([]);

  const handleOrdersToggle = () => {
    setShowDeliveredOrders(!showDeliveredOrders);
    console.log("Pedidos", showDeliveredOrders ? "Hechos" : "Entregados");
  };

  // Función para filtrar los productos basados en el término de búsqueda
  const filteredProducts = showDeliveredOrders
    ? deliveredProducts.filter((product) =>
        product.product.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : jsonData.products.filter((product) =>
        product.product.toLowerCase().includes(searchTerm.toLowerCase()),
      );

  // Función para obtener el estado de un producto dado su índice
  const getProductState = (index) => {
    const currentState = showDeliveredOrders
      ? "Entregado"
      : jsonData.products[index].state[0];
    return (
      <button
        onClick={() => handleStateChange(index)}
        className={styles.stateButton}
      >
        {currentState}
      </button>
    );
  };

  const handleStateChange = (index) => {
    // Copiar el estado actual de los productos entregados y pendientes
    const updatedDeliveredProducts = [...deliveredProducts];
    const updatedProducts = [...jsonData.products];

    // Actualizar el estado del producto en la lista de productos pendientes
    updatedProducts[index].state[0] = "Entregado";

    // Agregar el producto a la lista de entregados
    updatedDeliveredProducts.push(updatedProducts[index]);

    // Eliminar el producto de la lista de productos pendientes
    updatedProducts.splice(index, 1);

    // Actualizar los estados
    setDeliveredProducts(updatedDeliveredProducts);
    jsonData.products = updatedProducts; // Actualizar la lista de productos en el archivo JSON

    console.log("Estado actualizado:", updatedProducts[index].state[0]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pedidos</h1>
      <hr className={styles.separateLine} />
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button onClick={handleOrdersToggle} className={styles.deliveredButton}>
          {showDeliveredOrders ? "Pedidos Hechos" : "Pedidos Entregados"}
        </button>
      </div>
      <div
        className={styles.table}
        style={{ display: showDeliveredOrders ? "none" : "block" }}
      >
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.cell}>Fecha</div>
          <div className={styles.cell}>Productos</div>
          <div className={styles.cell}>Cantidad</div>
          <div className={styles.cell}>Proveedor</div>
          <div className={styles.cell}>Estado</div>
        </div>
        {filteredProducts.length === 0 ? (
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
              <div className={styles.cell}>
                <span>{getProductState(index)}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <div
        className={styles.table}
        style={{ display: showDeliveredOrders ? "block" : "none" }}
      >
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.cell}>Fecha</div>
          <div className={styles.cell}>Productos</div>
          <div className={styles.cell}>Cantidad</div>
          <div className={styles.cell}>Proveedor</div>
          <div className={styles.cell}>Estado</div>
        </div>
        {filteredProducts.map((product, index) => (
          <div key={index} className={`${styles.row} ${styles.rowWithMargin}`}>
            <div className={styles.cell}>{product.date}</div>
            <div className={styles.cell}>{product.product}</div>
            <div className={styles.cell}>{product.amount}</div>
            <div className={styles.cell}>{product.supplier}</div>
            <div className={styles.cell}>Entregado</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
