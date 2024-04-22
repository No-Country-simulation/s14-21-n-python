import style from "./AddSale.module.css";
import { useState } from "react";

const AddSale = () => {
  const [formData, setFormData] = useState({
    date: "",
    product: "",
    brand: "",
    amount: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <form className={style.container}>
      <div className={style.inputs}>
        <label>Fecha</label>
        <input
          type="date"
          required
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <label>Producto</label>
        <select
          name="product"
          id="prod"
          required
          value={formData.product}
          onChange={handleChange}
        >
          <option value="producto1">Producto1</option>
          <option value="producto2">Producto2</option>
          <option value="producto3">Producto3</option>
          <option value="producto4">Producto4</option>
          <option value="producto5">Producto5</option>
          <option value="producto6">Producto6</option>
          <option value="producto7">Producto7</option>
          <option value="producto8">Producto8</option>
        </select>
      </div>
      <div className={style.inputs}>
        <label>Marca</label>
        <select
          type="text"
          required
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        >
          <option value="">Seleccionar una marca</option>
          <option value="producto2">Producto2</option>
          <option value="producto3">Producto3</option>
          <option value="producto4">Producto4</option>
          <option value="producto5">Producto5</option>
          <option value="producto6">Producto6</option>
          <option value="producto7">Producto7</option>
          <option value="producto8">Producto8</option>
        </select>
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
        <label>Total</label>
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

export default AddSale;
