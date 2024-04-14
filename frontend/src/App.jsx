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
import ByMonth from "./components/Reports/ByMonth";
import ByCategory from "./components/Reports/ByCategory";
import ByProduct from "./components/Reports/ByProduct";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="dashboard-container">
            <div className="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/suppliers" element={<Supplier />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/category" element={<Category />} />
                <Route path="/byMonth" element={<ByMonth />} />
                <Route path="/byCategory" element={<ByCategory />} />
                <Route path="/byProduct" element={<ByProduct />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
