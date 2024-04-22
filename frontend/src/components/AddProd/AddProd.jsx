import style from "./AddProd.module.css";
import { useState } from "react";

const AddProd = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    provider: "",
    amount: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form className={style.container}>
      <div className={style.inputs}>
        <label>Nombre</label>
        <input
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <label>Descripción</label>
        <input
          type="text"
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <label>Categoría</label>
        <select
          name="Categoria"
          id="categoria"
          required
          value={formData.category}
          onChange={handleChange}
        >
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
          required
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <label>Cantidad</label>
        <input
          type="number"
          inputMode="numeric"
          min="0"
          pattern="[0-9]*"
          required
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <label>Precio</label>
        <input
          type="number"
          inputMode="numeric"
          min="0"
          pattern="[0-9]+(\.[0-9]{1,2})?"
          step="0.01"
          required
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
};

export default AddProd;
