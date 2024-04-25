import style from "./AddSale.module.css";
import { useState, useEffect } from "react";
import api from "../../Api.js";

const AddSale = () => {
  const [formData, setFormData] = useState({
    business_id: "4",
    product_id: "",
    quantity: "",
    price: "",
    transaction_date: "",
    type: "Sale",
    payment_method: "cash",
    status: "Completed",
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/businesses/4/products/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error al obtener la lista de productos:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/businesses/4/transactions/", formData);
      setFormData({
        product_id: "",
        quantity: "",
        price: "",
        transaction_date: "",
        type: "Sale",
        payment_method: "cash",
        status: "Completed",
      });
    } catch (error) {
      console.error("Error al agregar la venta:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.inputs}>
        <label>Fecha</label>
        <input
          type="text"
          required
          name="transaction_date"
          value={formData.transaction_date}
          onChange={handleChange}
          pattern="\d{4}-\d{2}-\d{2}"
          placeholder="yyyy-mm-dd"
        />
      </div>
      <div className={style.inputs}>
        <label>Producto</label>
        <select
          name="product_id"
          required
          value={formData.product_id}
          onChange={handleChange}
        >
          <option value="">Seleccionar producto...</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
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
          name="quantity"
          value={formData.quantity}
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
