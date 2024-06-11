import React, { useState, useEffect } from "react";
import StoreItem from "./StoreItem";
import CartDrawer from "./CartDrawer";
import fetchData from "../../fetch/fetchData";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
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
      {isCartOpen && (
        <CartDrawer
          cart={cart}
          products={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          closeDrawer={toggleCartDrawer}
        />
      )}
    </div>
  );
};

export default ProductList;
