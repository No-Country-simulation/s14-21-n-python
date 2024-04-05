import React, { useState } from 'react';
import "./Pedidos.css"  

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [nuevoPedido, setNuevoPedido] = useState('');

  const handleAgregarPedido = () => {
    if (nuevoPedido.trim() !== '') {
      setPedidos([...pedidos, { id: pedidos.length + 1, nombre: nuevoPedido, entregado: false }]);
      setNuevoPedido('');
    }
  };

  const handleMarcarEntregado = (id) => {
    const updatedPedidos = pedidos.map((pedido) =>
      pedido.id === id ? { ...pedido, entregado: true } : pedido
    );
    setPedidos(updatedPedidos);
  };

  const pedidosPendientes = pedidos.filter((pedido) => !pedido.entregado);
  const pedidosEntregados = pedidos.filter((pedido) => pedido.entregado);

  return (
    <div className="pedidos-container">
      <h2 className="pedidos-title">Pedidos</h2>
      <div className="pedidos-input-container">
        <input
          type="text"
          value={nuevoPedido}
          onChange={(e) => setNuevoPedido(e.target.value)}
          placeholder="Nombre del pedido"
          className="pedidos-input"
        />
        <button onClick={handleAgregarPedido} className="pedidos-button">Agregar Pedido</button>
      </div>
      <div>
        <h3 className="pedidos-subtitle">Hechos</h3>
        <ul className="pedidos-list">
          {pedidosPendientes.map((pedido) => (
            <li key={pedido.id} className="pedidos-item">
              {pedido.nombre} <button onClick={() => handleMarcarEntregado(pedido.id)} className="pedidos-mark-delivered">Marcar entregado</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="pedidos-subtitle">Entregados</h3>
        <ul className="pedidos-list">
          {pedidosEntregados.map((pedido) => (
            <li key={pedido.id} className="pedidos-item">{pedido.nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pedidos;
