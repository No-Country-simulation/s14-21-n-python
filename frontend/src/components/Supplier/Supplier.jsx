import React, { useState } from "react";
import style from "./Supplier.module.css";
import jsonData from "./suppliers.json";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashAlt, FaSearch } from "react-icons/fa";
import Modal from "../Modal/Modal";
import AddSupplier from "../AddSupplier/AddSupplier";

const Supplier = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jsonDataState, setJsonData] = useState(jsonData);
  const [editingId, setEditingId] = useState(null);
  const [editedValues, setEditedValues] = useState({});
  const [showAdminColumn, setShowAdminColumn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = jsonDataState.filter((prov) =>
    Object.values(prov).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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
    setJsonData(updatedData);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updatedData = jsonDataState.filter((prov) => prov.id !== id);
    setJsonData(updatedData);
  };

  const toggleAdminColumn = () => {
    setShowAdminColumn(!showAdminColumn);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <main className={style.container}>
      <h1 className={style.title}>Proveedores</h1>
      <hr className={style.separateLine} />
      <section>
        <div className={style.admCont}>
          <div className={style.searchContainer}>
            <input
              type="search"
              placeholder="Buscar..."
              className={style.searchInput}
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <FaSearch className={style.searchIcon} />
          </div>
          <div className={style.buttons}>
            <button className={style.admBtn} onClick={openPopup}>
              Agregar
            </button>
            <Modal isOpen={isOpen} onClose={closePopup}>
              <AddSupplier />
            </Modal>
            <button className={style.admBtn} onClick={toggleAdminColumn}>
              Administrar
            </button>
          </div>
        </div>
      </section>
      <section className={style.layout}>
        <div className={style.header}>
          <div className={style.column}>Nombre</div>
          <div className={style.column}>Mail</div>
          <div className={style.column}>Teléfono</div>
          <div className={style.column}>Dirección</div>
          <div className={style.column}>Cuit</div>
          {showAdminColumn && <div className={style.column}>Administrar</div>}
        </div>
        {filteredData.map((prov) => (
          <div className={style.card} key={prov.id}>
            {editingId === prov.id ? (
              <>
                <input
                  className={style.editInputStyle}
                  type="text"
                  name="name"
                  value={editedValues.name || ""}
                  onChange={handleInputChange}
                />
                <input
                  className={style.editInputStyle}
                  type="text"
                  name="mail"
                  value={editedValues.mail || ""}
                  onChange={handleInputChange}
                />
                <input
                  className={style.editInputStyle}
                  type="text"
                  name="tel"
                  value={editedValues.tel || ""}
                  onChange={handleInputChange}
                />
                <input
                  className={style.editInputStyle}
                  type="text"
                  name="address"
                  value={editedValues.address || ""}
                  onChange={handleInputChange}
                />
                <input
                  className={style.editInputStyle}
                  type="text"
                  name="cuit"
                  value={editedValues.cuit || ""}
                  onChange={handleInputChange}
                />
                <button className={style.saveBtn} onClick={handleSave}>Guardar</button>
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
                      className={style.deleteBtn}
                      onClick={() => handleDelete(prov.id)}
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
