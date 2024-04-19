import style from "./AddSupplier.module.css";

const AddSupplier = () => {
  return (
    <form className={style.container}>
      <div className={style.inputs}>
        <label>Nombre</label>
        <input type="name" />
      </div>

      <div className={style.inputs}>
        <label>Mail</label>
        <input type="email" />
      </div>
      <div className={style.inputs}>
        <label>Teléfono</label>
        <input type="tel" />
      </div>
      <div className={style.inputs}>
        <label>Dirección</label>
        <input type="adress" />
      </div>
      <div className={style.inputs}>
        <label>CUIT</label>
        <input type="text" />
      </div>

      <input className={style.button} type="submit" value="Agregar" />
    </form>
  );
};

export default AddSupplier;
