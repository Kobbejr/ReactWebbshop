import React, { useState, useEffect } from "react";
import StoreItem from "./StoreItem";
import CartDrawer from "./CartDrawer";
import fetchData from "../../fetch/fetchData";
import { useShoppingCart } from "../context/CartContext";

const ProductList = ({ products }) => {
  const { cart, setProducts, incrementQuantity, decrementQuantity, addToCart } =
    useShoppingCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setProducts(data); // Set products in the context
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setProducts]);

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="mx-auto px-1 md:px-4 sm:px-0 py-6 flex justify-center">
      {" "}
      {/* Modified container div */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-16">
        {products.map((item) => (
          <StoreItem
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            imgUrl={item.image}
            addToCart={addToCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            quantity={cart[item.id] || 0}
          />
        ))}
      </div>
      <CartDrawer
        isOpen={isCartOpen}
        closeDrawer={toggleCartDrawer}
        cart={cart}
        products={products}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        totalItems={getTotalItems()}
      />
    </div>
  );
};

export default ProductList;
