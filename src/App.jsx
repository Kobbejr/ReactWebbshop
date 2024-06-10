import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Functions

// Components
import Header from "./components/Header";

// Pages
import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";

const Home = () => <h1 className="text-3xl font-bold">Hello world!</h1>;
const Cart = () => <h2>Cart Slide In</h2>;

function App() {
  return (
    <Router>
      <Header />
      <Landingpage />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
