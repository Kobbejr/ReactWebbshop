import React, { useState, useEffect } from "react";
import StoreItem from "./StoreItem";
import CartDrawer from "./CartDrawer";
import fetchData from "../../fetch/fetchData";
import { useShoppingCart } from "../context/CartContext";

const ProductList = ({ products }) => {
  const { cart, setCart, incrementQuantity, decrementQuantity, addToCart } =
    useShoppingCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchData()
      .then((data) => {
        // Fetching data is now handled by the parent component, so no need to fetch it here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default ProductList;
