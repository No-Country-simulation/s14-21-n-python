import React, { useState } from "react";
import styles from "./Order.module.css";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [provider, setProvider] = useState("");
  const [providerList] = useState(["Proveedor 1", "Proveedor 2", "Proveedor 3"]); // Lista de proveedores

  const handleAgregarPedido = (e) => {
    e.preventDefault();
    if (product.trim() !== "" && quantity.trim() !== "" && provider.trim() !== "") {
      setOrders([
        ...orders,
        { id: orders.length + 1, product, quantity, provider, delivered: false },
      ]);
      setProduct("");
      setQuantity("");
      setProvider("");
    }
  };

  const handleMarkDelivered = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, delivered: true } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteDelivered = () => {
    const filteredOrders = orders.filter((order) => !order.delivered);
    setOrders(filteredOrders);
  };

  const pendingOrders = orders.filter((order) => !order.delivered);
  const deliveredOrders = orders.filter((order) => order.delivered);

  return (
    <div className={styles.ordersContainer}>
      <h2 className={styles.ordersTitle}>Pedidos</h2>
      <form onSubmit={handleAgregarPedido} className={styles.inputContainer}>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Producto"
          className={styles.input}
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Cantidad"
          className={styles.input}
        />
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className={styles.select}
        >
          <option value="">Seleccionar Proveedor</option>
          {providerList.map((provider, index) => (
            <option key={index} value={provider}>
              {provider}
            </option>
          ))}
        </select>
        <button type="submit" className={styles.button}>
          Agregar Pedido
        </button>
      </form>
      <div>
        <h3 className={styles.subtitle}>Pedidos Pendientes</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Proveedor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.provider}</td>
                <td>
                  <button
                    onClick={() => handleMarkDelivered(order.id)}
                    className={styles.markDelivered}
                  >
                    Marcar Entregado
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className={styles.subtitle}>Pedidos Entregados</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Proveedor</th>
            </tr>
          </thead>
          <tbody>
            {deliveredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {deliveredOrders.length > 0 && (
          <button onClick={handleDeleteDelivered} className={styles.deleteButton}>
            Eliminar Pedidos Entregados
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;
