import style from "./AddProd.module.css";

const AddProd = () => {
  return (
    <form className={style.container}>
      <h3>Nuevo producto</h3>
      <div className={style.inputs}>
        <label>Nombre:</label>
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Descripcion:</label>
        <input type="text" />
      </div>
      <div className={style.inputs}>
        <label>Categoria</label>
        <select name="Categorias" id="cat">
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
          <option value="java">Java</option>
          <option value="golang">Golang</option>
          <option value="python">Python</option>
          <option value="c#">C#</option>
          <option value="C++">C++</option>
          <option value="erlang">Erlang</option>
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
        <label>Precio compra:</label>
        <input type="number" />
      </div>
      <div className={style.inputs}>
        <label>Precio venta:</label>
        <input type="number" />
      </div>

      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AddProd;
