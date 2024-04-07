import { useState } from "react";
import styles from './Dashboard.module.css';
import Card from "./Card"; // Importa el componente Card



const Dashboard =() =>{
    const [selectedOption, setSelectedOption] = useState("");
    return (
        <div className ={styles.dashboard}>
            
            <div className={styles.mainTitle}>
                <h3>PANEL DE CONTROL</h3>
            </div>
                
           {/* Primer Contenedor */}
            <div className={styles.container}>
                {/* Cada instancia de Card recibe props para título y contenido */}
                <Card title="Productos" content="253" />
                <Card title="Ventas hoy" content="91" />
                <Card title="Proveedores" content="27" />
            </div>

            {/* Segundo Contenedor */}
   
            <div className={styles.additionalContainer}>
                <div className={styles.card2}> 
                                        
                    <h3>Producto Más vendido</h3>
                        {/* Dropdown */}
                        <div className={styles.dropdown}>     
                                    <select
                                        value={selectedOption}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                    >
                                        <option value="">Filtrar por</option>
                                        <option value="option2">Opción 1</option>
                                        <option value="option2">Opción 2</option>
                                        <option value="option3">Opción 3</option>
                                    </select>
                        </div>
                        <div className={styles.productInfo}>
                            <h4>Nombre del producto</h4>
                            <p>Precio $</p>
                            <p>Aquí va la descripcion del producto</p>
                        </div>

                        <div className={styles.titleAndAmount}>
                            <p>Disponibles</p>
                            <p>10</p>
                        </div>
                           
                </div>
            </div>
             {/* Tercer Contenedor */}
             <div className={styles.container}>
                {/* Cada instancia de Card recibe props para título y contenido */}
                <Card title="Nueva Venta" content="" />
                <Card title="Nuevo Producto hoy" content="" />
                <Card title="Nuevo Proveedor" content="" />
                <Card title="Nuevo Pedido" content="" />
            </div>
            
        </div>
  );
};

export default Dashboard
