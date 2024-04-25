import React, { useEffect, useState } from "react";
import styles from "./Order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddOrder from "../AddOrder/AddOrder";
import Modal from "../Modal/Modal";
import api from "../../Api.js"; 

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeliveredOrders, setShowDeliveredOrders] = useState(false);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/businesses/4/transactions/");
        const orders = response.data;

        const pending = orders.filter((order) => order.status === "Pending");
        const delivered = orders.filter((order) => order.status === "Completed");

        setPendingOrders(pending);
        setDeliveredOrders(delivered);

        console.log("Pedidos obtenidos:", orders);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchOrders();
  }, []); 
  
  const handleOrdersToggle = () => {
    setShowDeliveredOrders(!showDeliveredOrders);
  };

  const filteredOrders = showDeliveredOrders
    ? deliveredOrders.filter((order) =>
        String(order.product_id).toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pendingOrders.filter((order) =>
        String(order.product_id).toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleStateChange = (index) => {
    const updatedPendingOrders = [...pendingOrders];
    const updatedDeliveredOrders = [...deliveredOrders];

    const order = updatedPendingOrders[index];
    order.status = "Completed";

    updatedDeliveredOrders.push(order);
    updatedPendingOrders.splice(index, 1);

    setDeliveredOrders(updatedDeliveredOrders);
    setPendingOrders(updatedPendingOrders);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pedidos</h1>
      <div className={styles.filterContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={openPopup} className={styles.admBtn}>
            Agregar
          </button>
          <Modal isOpen={isOpen} onClose={closePopup}>
            <AddOrder />
          </Modal>
          <button
            onClick={handleOrdersToggle}
            className={styles.admBtn}
          >
            {showDeliveredOrders ? "Pedidos Pendientes" : "Pedidos Entregados"}
          </button>
        </div>
      </div>

      <div
        className={styles.table}
        style={{ display: showDeliveredOrders ? "none" : "block" }}
      >
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.cell}>Fecha</div>
          <div className={styles.cell}>Producto</div>
          <div className={styles.cell}>Cantidad</div>
          <div className={styles.cell}>Proveedor</div>
          <div className={styles.cell}>Estado</div>
        </div>
        {filteredOrders.length === 0 ? (
          <div className={`${styles.row2} ${styles.rowWithMargin}`}>
          <div className={styles.cell} colSpan="5">
            No se encontró pedidos.
          </div>
          </div>
        ) : (
          filteredOrders.map((order, index) => (
            <div key={index} className={`${styles.row2} ${styles.rowWithMargin}`}>
              <div className={styles.cell}>{order.transaction_date}</div>
              <div className={styles.cell}>{order.product_id}</div>
              <div className={styles.cell}>{order.quantity}</div>
              <div className={styles.cell}>{order.supplier_id}</div>
              <div className={styles.cell}>
                <button
                  onClick={() => handleStateChange(index)}
                  className={styles.statusBtn}
                >
                  Hecho
                </button>
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
          <div className={styles.cell}>Producto</div>
          <div className={styles.cell}>Cantidad</div>
          <div className={styles.cell}>Proveedor</div>
          <div className={styles.cell}>Estado</div>
        </div>
        {filteredOrders.length === 0 ? (
          <div className={`${styles.row2} ${styles.rowWithMargin}`}>
          <div className={styles.cell} colSpan="5">
            No se encontró pedidos.
          </div>
          </div>
        ) : (
          filteredOrders.map((order, index) => (
            <div key={index} className={`${styles.row2} ${styles.rowWithMargin}`}>
              <div className={styles.cell}>{order.transaction_date}</div>
              <div className={styles.cell}>{order.product_id}</div>
              <div className={styles.cell}>{order.quantity}</div>
              <div className={styles.cell}>{order.supplier_id}</div>
              <div className={styles.cell}>
                <button className={styles.stateButton}>Entregado</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
