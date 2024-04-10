import { useState } from "react";
import styles from './Dashboard.module.css';
import { CardAccesos, Card } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Dashboard =() =>{
    const [selectedOption, setSelectedOption] = useState("");
    return (
        <div className ={styles.dashboard}>
            
            <div className={styles.mainTitle}>
                <h3>PANEL PRINCIPAL</h3>
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
                            <div>
                                <FontAwesomeIcon icon="fa-regular fa-star" />
                            </div>
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
             <div className={styles.containerAdd}>
                <h3>Accesos directos</h3>
                <div className={styles.cardsContainer}>
                    <CardAccesos title="Nueva Venta" content="" />
                    <CardAccesos title="Nuevo Producto hoy" content="" />
                    <CardAccesos title="Nuevo Proveedor" content="" />
                    <CardAccesos title="Nuevo Pedido" content="" />
                </div>               
               
            </div>
            
        </div>
  );
};

export default Dashboard
