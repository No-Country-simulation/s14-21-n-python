import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import LogoEmpresa from "../../assets/logoEmpresa.jpg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <img className={styles.image} src={LogoEmpresa} alt="" />
        <h3>Tu Empresa </h3>
        <p>example@mail.com</p>
      </div>
      <hr className={styles.separateLine} />
      <ul>
        <li>
          <Link to={"/"}>Panel Principal</Link>
        </li>
        <li>
          <Link to={"/category"}>Categorías </Link>
        </li>

        <li>
          <Link to={"/products"}>Productos </Link>
        </li>
        <li>
          <Link to={"/suppliers"}>Proveedores </Link>
        </li>
        <li>
          <Link to={"/sales"}>Ventas </Link>
        </li>
        <li>
          <Link to={"/orders"}>Pedidos </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
