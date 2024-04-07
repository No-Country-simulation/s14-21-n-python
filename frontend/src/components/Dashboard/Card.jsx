import { useState } from "react";
import styles from "./Card.module.css"; 
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CropDinOutlinedIcon from '@mui/icons-material/CropDinOutlined';


const Card = ({ title, content }) => {
  return (
    
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <CropDinOutlinedIcon />
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};




const CardAccesos = ({ title }) => {
  return (
    
    <div className={styles.card}>
      
      <AddCircleOutlineIcon />
      <h3>{title}</h3>

         </div>
  );
};

export { CardAccesos, Card };