import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import fetchData from "../../fetch/fetchData"; // Import the function to fetch product data

const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("shopping-cart", {});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData()
      .then((data) => {
        setProducts(data);
        setIsLoading(false); // Mark loading as complete
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Mark loading as complete even if there's an error
      });
  }, [setProducts]);

  // Use cart and products only when loading is complete
  if (isLoading) {
    return <div>Loading...</div>;
  }

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

  const getItemQuantity = (id) => {
    return cart[id] || 0;
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
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(CartContext);
};
