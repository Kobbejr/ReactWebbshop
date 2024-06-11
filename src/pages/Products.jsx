import React, { useEffect } from "react";
import fetchData from "../fetch/fetchData";

const Products = () => {
  useEffect(() => {
    fetchData()
      .then((combinedProducts) => {
        // Filter products with category "Fish"
        const fishProducts = combinedProducts.filter(
          (product) => product.category === "Fish"
        );
        // Console log fishProducts
        console.log("Fish Products:", fishProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Products page</h1>
    </div>
  );
};

export default Products;
