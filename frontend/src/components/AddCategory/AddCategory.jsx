import { useState } from "react";
import styles from "./AddCategory.module.css";
import api from "../../Api.js"; // Asegúrate de tener una referencia a tu objeto API para hacer solicitudes

const AddCategory = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // Valida si el nombre contiene solo letras y espacios
    if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
      setErrorMessage("¡No se aceptan números ni símbolos!");
    } else {
      setErrorMessage("");
      setName(inputValue);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setErrorMessage("El nombre de la categoría no puede estar vacío.");
      return;
    }

    try {
      // Hacer una solicitud POST para agregar la categoría
      await api.post("/businesses/4/categories/", {
        name,
        description: "Nueva categoría creada por el usuario",
      });
      console.log("Categoría agregada con éxito:", name);
      setName(""); // Restablece el campo de entrada después de enviar
      setErrorMessage(""); // Borra cualquier mensaje de error
    } catch (error) {
      console.error("Error al agregar la categoría:", error);
      setErrorMessage("Error al agregar la categoría. Intenta de nuevo.");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <label>Nombre de la Categoría</label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Ingrese un nombre para la categoría"
        />
        {errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
      </div>
      <input className={styles.submitButton} type="submit" value="Agregar" />
    </form>
  );
};

export default AddCategory;
