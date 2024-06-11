import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Functions

// Components
import Header from "./components/Header";

// Pages
import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";

const Cart = () => <h2>Cart Curtain Slide-in</h2>;


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );

}

export default App;
