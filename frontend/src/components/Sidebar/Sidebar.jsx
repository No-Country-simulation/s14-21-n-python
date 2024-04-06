import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return(
        <div className ={styles.sidebar}>
            <div>
                <p>Aca va in icono</p>
                <h1>Tu Empresa </h1>
                <p>example@mail.com</p>
            </div>
            <ul>
            <li>
                <li>
                    <Link to={'/'}>Dashboard </ Link>
                </li>

                    <a href="/">Catedorias</a> 
                </li>
             
                <li>
                <Link to={'/products'}>Productos </ Link>

                </li>
                <li>
                    <a href="/">Proveedores</a>
                </li>
                <li>
                    <a href="/">Ventas</a> 
                </li>
                <li>
                    <a href="/">Pedidos</a> 
                </li>
                
            </ul>

        </div>
    )
}

export default Sidebar