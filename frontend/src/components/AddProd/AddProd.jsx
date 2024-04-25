import style from "./AddProd.module.css";
import { useEffect, useState } from "react";
import api from "../../Api.js";

const AddProd = () => {
  const [formData, setFormData] = useState({
    business_id: "4",
    name: "",
    description: "",
    category_id: "",
    brand: "",
    stock: "",
    original_price: "",
  });

  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/businesses/4/categories/");
        setCategories(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de categorias:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/businesses/4/products/", formData);
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
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
          value={formData.category_id}
          onChange={handleChange}
        >
          <option value="">Selecciona una categoria...</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
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
          value={formData.stock}
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
          value={formData.original_price}
          onChange={handleChange}
        />
      </div>

      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
};

export default AddProd;
