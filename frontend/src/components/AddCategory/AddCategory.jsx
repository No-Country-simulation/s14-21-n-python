import style from "./AddCategory.module.css";

const AddCategory = () => {
  return (
    <form className={style.container}>
      <h3>Nuevo categoría</h3>
      <div className={style.inputs}>
        <label>Nombre:</label>
        <input type="text" />
      </div>
      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AddCategory;
