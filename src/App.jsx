import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";

import fetchData from "./fetch/fetchData";

import ProductPage from "./pages/ProductPage";

const Cart = () => <h2>Cart Curtain Slide-in</h2>;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
