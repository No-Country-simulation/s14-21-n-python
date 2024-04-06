import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Sales from "./components/Sales/Sales";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

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
        </Routes>
        </div>  
       
       <Footer />   
       </div>        
      </BrowserRouter>
    </>
  );
}

export default App;
