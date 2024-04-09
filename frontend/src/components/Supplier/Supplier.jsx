import style from "./Supplier.module.css";
import AddSupplier from "../AddSupplier/AddSupplier";

const Supplier = () => {
  const testArray = [
    {
      id: "1",
      name: "Proveedor 1",
      address: "direccion 1",
      tel: "1144343443",
      mail: "proveedor1@gmail.com",
    },
    {
      id: "2",
      name: "Proveedor 2",
      address: "direccion 2",
      tel: "1144343444",
      mail: "proveedor2@gmail.com",
    },
    {
      id: "3",
      name: "Proveedor 3",
      address: "direccion 3",
      tel: "1144343445",
      mail: "proveedor3@gmail.com",
    },
    {
      id: "4",
      name: "Proveedor 4",
      address: "direccion 4",
      tel: "1144343446",
      mail: "proveedor4@gmail.com",
    },
  ];

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
        {testArray.map((prov) => {
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
