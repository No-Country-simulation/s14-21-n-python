import { useState } from "react";
import style from "./Dashboard.module.css";
import { CardAccesos, Card } from "./Card";
import { FiPackage } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiSlack } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import AddSale from "../AddSale/AddSale";
import AddProd from "../AddProd/AddProd";
import AddSupplier from "../AddSupplier/AddSupplier";
import AddOrder from "../AddOrder/AddOrder";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={style.dashboard}>
      <div>
        <h1 className={style.title}>Panel Principal</h1>
      </div>
      <hr className={style.separateLine} />

      {/* Primer Contenedor */}
      <div className={style.container}>
        {/* Cada instancia de Card recibe props para título y contenido */}

        <Card icon={FiPackage} title="Productos" content="253" />
        <Card icon={FiShoppingBag} title="Ventas hoy" content="91" />
        <Card icon={FiSlack} title="Proveedores" content="27" />
      </div>

      {/* Segundo Contenedor */}

      <div className={style.additionalContainer}>
        <div className={style.card2}>
          <h3>Producto Más vendido</h3>

          <div className={style.dropdown}>
            <select
              className={style.select}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Filtrar por</option>
              <option value="option2">Por semana</option>
              <option value="option2">Por mes</option>
              <option value="option3">Por año</option>
            </select>
          </div>

          <div className={style.productInfo}>
            <div className={style.cardIcon}>
              <FaRegStar />
            </div>
            <div className={style.productDetails}>
              <h3>Leche La Serenisima</h3>
              <div className={style.priceAndDescription}>
                <p>Precio $ 1.400</p>
                <p>Leche entera de 1 Lto La Serenísima</p>
              </div>
            </div>
          </div>

          <div className={style.titleAndAmount}>
            <p>Disponibles</p>
            <div className={style.cantidad}>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tercer Contenedor */}
      <div className={style.containerAdd}>
        <h3>Accesos directos</h3>
        <div className={style.cardsContainer}>
          <CardAccesos title="Nueva Venta" content="">
            <AddSale />
          </CardAccesos>
          <CardAccesos title="Nuevo Producto" content="">
            <AddProd />
          </CardAccesos>
          <CardAccesos title="Nuevo Proveedor" content="">
            <AddSupplier />
          </CardAccesos>
          <CardAccesos title="Nuevo Pedido" content="">
            <AddOrder />
          </CardAccesos>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
