import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
/*import Dashboard from "./components/Dashboard/Dashboard";*/
import Products from "./components/Products/Products";
import Sales from "./components/Sales/Sales";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Dashboard />} />*/}
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
