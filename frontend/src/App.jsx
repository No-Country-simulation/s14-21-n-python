import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Sales from "./components/Sales/Sales";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Supplier from "./components/Supplier/Supplier";
import Orders from "./components/Orders/Order";
import { Category } from "./components/Category/Category";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Sidebar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/suppliers" element={<Supplier />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/category" element={<Category />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
