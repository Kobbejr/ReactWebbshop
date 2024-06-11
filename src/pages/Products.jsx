import React, { useEffect, useState } from "react";
import fetchData from "../fetch/fetchData";
import ProductList from '../components/ShoppingFlow/ProductList.jsx';

const Products = () => {
  const [fishProducts, setFishProducts] = useState([]);

  useEffect(() => {
    fetchData()
      .then((combinedProducts) => {
        // Filter products with category "Fish"
        const filteredProducts = combinedProducts.filter(
          (product) => product.category === "Fish"
        );
        // Set fishProducts state
        setFishProducts(filteredProducts);
        // Console log filtered products
        console.log("Fish Products:", filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* Pass fishProducts as props to ProductList component */}
      <ProductList 
      products={fishProducts} />
    </div>
  );
};

export default Products;
