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
            {testArray.map((prov) => {
              return (
                <div className={style.card} key={prov.id}>
                  <div className={style.data}>
                    <h3>{prov.name}</h3>
                    <p>{prov.mail}</p>
                    <p>+54 {prov.tel} </p>
                    <p>{prov.address} </p>
                    
                  </div>
                </div>
              );
            })}
          </section>
          <AddSupplier />
        </main>
      );
}

export default Supplier
