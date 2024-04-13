import style from "./AddSale.module.css";

const AddSale = () => {
  return (
    <form className={style.container}>
      <div className={style.inputs}>
        <label>Fecha</label>
        <input type="date" />
      </div>
      <div className={style.inputs}>
        <label>Producto</label>
        <select name="Productos" id="prod">
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
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Cantidad:</label>
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Precio Total:</label>
        <input type="number" />
      </div>

      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AddSale;
