import React, { createContext, useState, useContext } from "react";
import { ShoppingCart } from "../ShoppingFlow/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export function useShoppingCart() {
  return useContext(CartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id) => cartItems.find((item) => item.id === id)?.quantity || 0;

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (!currItems.find((item) => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) =>
      currItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => setCartItems((currItems) => currItems.filter((item) => item.id !== id));

  const value = {
    openCart,
    closeCart,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    cartQuantity: cartItems.reduce((quantity, item) => item.quantity + quantity, 0),
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
