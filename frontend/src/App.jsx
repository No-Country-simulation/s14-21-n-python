import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Productos from "./components/Productos/Productos";
import Pedidos from "./components/Pedidos/Pedidos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/pedidos" element={<Pedidos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
