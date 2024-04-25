import style from "./AddSupplier.module.css";
import { useState } from "react";
import api from "../../Api.js";

const AddSupplier = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    cuit: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/businesses/4/suppliers/", formData);
    } catch (error) {
      console.error("Error al agregar el proveedor:", error);
    }
  };

  return (
    <form className={style.container}>
      <div className={style.inputs}>
        <label>Nombre</label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          placeholder="Ingrese un nombre"
        />
      </div>

      <div className={style.inputs}>
        <label>Mail</label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          placeholder="Ingrese un email"
        />
      </div>
      <div className={style.inputs}>
        <label>Teléfono</label>
        <input
          type="text"
          value={formData.phone}
          name="phone"
          onChange={handleInputChange}
          placeholder="Ingrese un teléfono"
        />
      </div>
      <div className={style.inputs}>
        <label>Dirección</label>
        <input
          type="text"
          value={formData.address}
          name="address"
          onChange={handleInputChange}
          placeholder="Ingrese una dirección"
        />
      </div>
      <div className={style.inputs}>
        <label>CUIT</label>
        <input
          type="text"
          value={formData.cuit}
          name="cuit"
          onChange={handleInputChange}
          placeholder="Ingrese el Cuit"
        />
      </div>

      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
};

export default AddSupplier;
