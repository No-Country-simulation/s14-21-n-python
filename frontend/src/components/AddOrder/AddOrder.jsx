import React, { useState } from "react";
import style from "./AddOrder.module.css";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    date: "",
    product: "",
    category: "",
    brand: "",
    quantity: "",
    supplier: "",
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("¡Pedido agregado con éxito!");
    setFormData({
      date: "",
      product: "",
      category: "",
      brand: "",
      quantity: "",
      supplier: "",
    });
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.inputs}>
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className={style.inputs}>
        <label>Producto</label>
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className={style.inputs}>
        <label>Categoría</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          <option value="categoria3">Categoría 3</option>
          <option value="categoria4">Categoría 4</option>
          <option value="categoria5">Categoría 5</option>
          <option value="categoria6">Categoría 6</option>
          <option value="categoria7">Categoría 7</option>
          <option value="categoria8">Categoría 8</option>
        </select>
      </div>
      <div className={style.inputs}>
        <label>Marca</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className={style.inputs}>
        <label>Cantidad</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
          min="1"
        />
      </div>
      <div className={style.inputs}>
        <label>Proveedor</label>
        <input
          type="text"
          name="supplier"
          value={formData.supplier}
          onChange={handleInputChange}
          required
        />
      </div>
      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
};

export default AddOrder;
