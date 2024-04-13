import style from "./Supplier.module.css";
import AddSupplier from "../AddSupplier/AddSupplier";
import jsonData from "./suppliers.json";

const Supplier = () => {
  
  return (
    <main className={style.container}>
      <div className={style.title}>
        <h1>Proveedores</h1>
      </div>
      <section>
        <div>
          <button>Administrar</button>
          <button>Agregar</button>
        </div>
      </section>
      <section className={style.layout}>
        <div className={style.header}>
          <div className={style.column}>Nombre</div>
          <div className={style.column}>Mail</div>
          <div className={style.column}>Telefono</div>
          <div className={style.column}>Dirección</div>
        </div>
        {jsonData.map((prov) => {
          return (
            <div className={style.card} key={prov.id}>
              <p className={style.column}>{prov.name}</p>
              <p className={style.column}>{prov.mail}</p>
              <p className={style.column}>{prov.tel} </p>
              <p className={style.column}>{prov.address} </p>
            </div>
          );
        })}
      </section>
      <AddSupplier />
    </main>
  );
}

export default Supplier
