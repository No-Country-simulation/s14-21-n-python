import style from "./AddOrder.module.css";

const AddOrder = () => {
  return (
    <form className={style.container}>
      <h3>Nuevo pedido</h3>
      <div className={style.inputs}>
        <label>Fecha</label>
        <input type="date" />
      </div>
      <div className={style.inputs}>
        <label>Producto</label>
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Categoria</label>
        <select name="Categorias" id="cat">
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          <option value="categoria3">Categoría 3</option>
          <option value="categoria4">Categoría 4</option>
          <option value="categoria5">Categoría 5</option>
          <option value="categoria6">Categoría 6</option>
          <option value="categoria7">Categoría 7</option>
          <option value="categoria8">Categoría 8</option>
        </select>
      </div>
      <div className={style.inputs}>
        <label>Marca</label>
        <input type="type" />
      </div>
      <div className={style.inputs}>
        <label>Cantidad</label>
        <input type="number" min={0} />
      </div>
      <div className={style.inputs}>
        <label>Proveedor</label>
        <input type="text" />
      </div>
      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AddOrder;
