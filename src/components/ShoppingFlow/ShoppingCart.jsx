// ShoppingCart.jsx
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import { Currency } from "./Currency";
import { CartItem } from "./CartItem";
import MenuCrossIcon from "../MenuCrossIcon";

export function ShoppingCart({ isOpen, closeCart }) {
  const { cartItems } = useShoppingCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <button className="mb-4" onClick={closeCart}>
          <MenuCrossIcon />
        </button>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={products.find((p) => p.id === item.id)}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="text-right mt-4">
          Total:{" "}
          {Currency(
            cartItems.reduce((total, cartItem) => {
              const product = products.find((p) => p.id === cartItem.id);
              return total + (product ? product.price * cartItem.quantity : 0);
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
}
