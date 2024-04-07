import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Avatar from '@mui/material/Avatar';


const Sidebar = () => {
    return(
        <div className ={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <Avatar>H</Avatar>
                <h3>Tu Empresa </h3>
                <p>example@mail.com</p>
            </div>
            
            <ul>
            
                <li>
                    <Link to={'/'}>Panel de Control </ Link>
                </li>
                <li>
                    <Link to={'/'}>Categorias </ Link>
                </li>
             
                <li>
                    <Link to={'/products'}>Productos </ Link>
                </li>
                <li>
                    <Link to={'/'}>Proveedores </ Link>
                </li>
                <li>
                    <Link to={'/Sales'}>Ventas </ Link>
                </li>
                <li>
                    <Link to={'/Order'}>Pedidos </ Link>
                </li>
                
            </ul>

        </div>
    )
}

export default Sidebar