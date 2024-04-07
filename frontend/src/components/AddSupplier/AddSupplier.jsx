import style from "./AddSupplier.module.css";

const AddSupplier = () => {
  return (
    <form className={style.container}>
      <h3>Nuevo Proveedor</h3>
      <div className={style.inputs}>
        <label>Nombre:</label>
        <input type="name" />
      </div>

      <div className={style.inputs}>
        <label>Mail:</label>
        <input type="email" />
      </div>
      <div className={style.inputs}>
        <label>Teléfono:</label>
        <input type="tel" />
      </div>
      <div className={style.inputs}>
        <label>Direccion:</label>
        <input type="adress" />
      </div>

      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AddSupplier;
