// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";
import fetchData from "./fetch/fetchData";
import ProductPage from "./pages/ProductPage";
import { ShoppingCartProvider } from "./components/context/CartContext"; // Import the provider
import CartDrawer from "./components/ShoppingFlow/CartDrawer"; // Import the CartDrawer

const App = () => {
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
    <ShoppingCartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartDrawer />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
