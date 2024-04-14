import React, { useState } from "react";
import style from "./Supplier.module.css";
import jsonData from "./suppliers.json";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";

const Supplier = () => {
  const [editingId, setEditingId] = useState(null);
  const [jsonDataState, setJsonData] = useState(jsonData); // State to manage supplier data
  const [editedValues, setEditedValues] = useState({});
  const [showAdminColumn, setShowAdminColumn] = useState(false); // State to manage column visibility

  const handleEdit = (id) => {
    setEditingId(id);
    const supplierToEdit = jsonDataState.find((prov) => prov.id === id);
    setEditedValues(supplierToEdit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedData = jsonDataState.map((prov) =>
      prov.id === editingId ? { ...prov, ...editedValues } : prov
    );

    setJsonData(updatedData); // Update jsonDataState with the new edited values
    setEditingId(null); // Exit editing mode
  };

  const toggleAdminColumn = () => {
    setShowAdminColumn(!showAdminColumn);
  };

  return (
    <main className={style.container}>
      <h1 className={style.title}>Proveedores</h1>
      <hr className={style.separateLine} />
      <button className={style.admBtn} onClick={toggleAdminColumn}>
        Administrar
      </button>
      <section className={style.layout}>
        <div className={style.header}>
          <div className={style.column}>Nombre</div>
          <div className={style.column}>Mail</div>
          <div className={style.column}>Telefono</div>
          <div className={style.column}>Dirección</div>
          <div className={style.column}>Cuit</div>
          {showAdminColumn && <div className={style.column}>Administrar</div>}
        </div>
        {jsonDataState.map((prov) => (
          <div className={style.card} key={prov.id}>
            {editingId === prov.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editedValues.name || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="mail"
                  value={editedValues.mail || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="tel"
                  value={editedValues.tel || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  value={editedValues.address || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="cuit"
                  value={editedValues.cuit || ""}
                  onChange={handleInputChange}
                />
                <button onClick={handleSave}>Guardar</button>
              </>
            ) : (
              <>
                <p className={style.column}>{prov.name}</p>
                <p className={style.column}>{prov.mail}</p>
                <p className={style.column}>{prov.tel}</p>
                <p className={style.column}>{prov.address}</p>
                <p className={style.column}>{prov.cuit}</p>
                {showAdminColumn && (
                  <div className={style.column}>
                    <button
                      className={style.editBtn}
                      onClick={() => handleEdit(prov.id)}
                    >
                      <SlPencil />
                    </button>
                    <button
                      className={style.editBtn}
                      onClick={() => handleEdit(prov.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Supplier;
