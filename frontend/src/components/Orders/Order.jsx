import React, { useState } from "react";
import styles from "./Order.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState("");

  const handleAddOrder = () => {
    if (newOrder.trim() !== "") {
      setOrders([
        ...orders,
        { id: orders.length + 1, name: newOrder, delivered: false },
      ]);
      setNewOrder("");
    }
  };

  const handleMarkDelivered = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, delivered: true } : order,
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
      <h2 className={styles.ordersTitle}>Orders</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newOrder}
          onChange={(e) => setNewOrder(e.target.value)}
          placeholder="Order name"
          className={styles.input}
        />
        <button onClick={handleAddOrder} className={styles.button}>
          Add Order
        </button>
      </div>
      <div>
        <h3 className={styles.subtitle}>Pending Orders</h3>
        <ul className={styles.list}>
          {pendingOrders.map((order) => (
            <li key={order.id} className={styles.item}>
              {order.name}{" "}
              <button
                onClick={() => handleMarkDelivered(order.id)}
                className={styles.markDelivered}
              >
                Mark Delivered
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={styles.subtitle}>Delivered Orders</h3>
        <ul className={styles.list}>
          {deliveredOrders.map((order) => (
            <li key={order.id} className={styles.item}>
              {order.name}
            </li>
          ))}
        </ul>
        {deliveredOrders.length > 0 && (
          <button
            onClick={handleDeleteDelivered}
            className={styles.deleteButton}
          >
            Delete Delivered Orders
          </button>
        )}
      </div>
    </div>
  );
};

export default Orders;
