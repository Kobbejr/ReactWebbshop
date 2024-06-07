import React, { useState, useEffect } from "react";
import StoreItem from "./StoreItem";
import axios from "axios";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Sorted by Popular Choice</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item) => (
          <StoreItem
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            imgUrl={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
