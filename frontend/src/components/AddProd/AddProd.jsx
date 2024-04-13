import style from "./AddProd.module.css";

const AddProd = () => {
  return (
    <form className={style.container}>
      <h3>Nuevo producto</h3>
      <div className={style.inputs}>
        <label>Nombre</label>
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Descripcion</label>
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
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Proveedor</label>
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Cantidad</label>
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Precio compra</label>
        <input type="number" min={0} />
      </div>
      <div className={style.inputs}>
        <label>Precio venta</label>
        <input type="number" min={0} />
      </div>

      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AddProd;
