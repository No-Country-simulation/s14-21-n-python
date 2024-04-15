import style from "./AddCategory.module.css";

const AddCategory = () => {
  return (
    <form className={style.container}>
      <div className={style.inputs}>
        <label>Nombre</label>
        <input type="text" />
      </div>
      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
};

export default AddCategory;
