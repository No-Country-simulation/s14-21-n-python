import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Productos from "./components/Productos/Productos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/products" element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
