import { useState } from "react";
import style from "./AddCategory.module.css";
import api from "../../Api.js";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    if (!/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setErrorMessage("¡No se aceptan números ni símbolos!");
    } else {
      setErrorMessage("");
      setName(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/businesses/4/categories/", {
        name,
        description: "string",
      });
      console.log("Categoría agregada con éxito:", name);
      setName("");
    } catch (error) {
      console.error("Error al agregar la categoría:", error);
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.inputs}>
        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Ingrese un nombre"
        />
        {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
      </div>
      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
};

export default AddCategory;
