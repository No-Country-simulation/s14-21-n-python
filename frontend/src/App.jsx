import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Sales from "./components/Sales/Sales";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Supplier from "./components/Supplier/Supplier";
import Orders from "./components/Orders/Order";
import { Category } from "./components/Category/Category";
import ByMonth from "./components/Reports/ByMonth";
import ByCategory from "./components/Reports/ByCategory";
import ByProduct from "./components/Reports/ByProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div>
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
