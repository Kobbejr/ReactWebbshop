import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landingpage from "./pages/Landingpage";
import Products from "./pages/Products";
import fetchData from "./fetch/fetchData";
import ProductPage from "./pages/ProductPage";
import OrderConfirmation from "./pages/OrderConfirmation"; // Import OrderConfirmation
import { ShoppingCartProvider } from "./components/context/CartContext";
import Footer from "./components/Footer";
import CartDrawer from "./components/ShoppingFlow/CartDrawer"; // Import the CartDrawer
import Checkoutpage from "./pages/Checkoutpage";

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
          <Route
            path="/order-confirmation"
            element={<OrderConfirmation />}
          />{" "}
          {/* Add Route */}
          <Route path="/cart" element={<CartDrawer />} />
          <Route path="/checkoutPage" element={<Checkoutpage />} />
        </Routes>
        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
