import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id] + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) => {
      if (prevCart[id] === 1) {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [id]: prevCart[id] - 1,
      };
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const { [id]: _, ...rest } = prevCart;
      return rest;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        setProducts,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(CartContext);
};
