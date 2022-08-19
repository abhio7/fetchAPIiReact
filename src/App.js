import './App.css';
import NavBar from './components/NavBar';
import User from "./components/Users"
import Product from "./components/Products";
import Order from "./components/Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/orders" element={<Order />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
