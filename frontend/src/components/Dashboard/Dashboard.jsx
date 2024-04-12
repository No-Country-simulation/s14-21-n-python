import { useState } from "react";
import styles from './Dashboard.module.css';
import { CardAccesos, Card } from './Card';
import { FiPackage } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiSlack } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";

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
                 
                <Card 
                    icon={FiPackage } 
                    title="Productos" 
                    content="253" 
                />
                <Card 
                    icon ={FiShoppingBag }
                    title="Ventas hoy" 
                    content="91"
                />
                <Card 
                    icon = {FiSlack}
                    title="Proveedores"
                     content="27"
                />
            </div>

            {/* Segundo Contenedor */}
   
            <div className={styles.additionalContainer}>
            
                <div className={styles.card2}> 
                                     
                    <h3>Producto Más vendido</h3>
                        
                        <div className={styles.dropdown}>     
                                    <select className={styles.select}
                                        value={selectedOption}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                    >
                                        <option value="">Filtrar por</option>
                                        <option value="option2">Por semana</option>
                                        <option value="option2">Por mes</option>
                                        <option value="option3">Por año</option>
                                    </select>
                        </div>
                        
                        <div className={styles.productInfo}>
                            <div className={styles.cardIcon}>
                            <FaRegStar />
                            </div>  
                            <div className={styles.productDetails}>
                                <h4>Nombre del producto</h4>
                                    <div className={styles.priceAndDescription}>
                                        <p>Precio $</p>
                                        <p>Aquí va la descripción del producto</p>
                                    </div>
                            </div>
                           
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
                    <CardAccesos title="Nuevo Producto" content="" />
                    <CardAccesos title="Nuevo Proveedor" content="" />
                    <CardAccesos title="Nuevo Pedido" content="" />
                </div>               
               
            </div>
            
        </div>
  );
};

export default Dashboard
