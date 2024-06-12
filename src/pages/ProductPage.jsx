import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../fetch/fetchData";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null); // State to store the product

  useEffect(() => {
    // Fetch the product details based on the ID
    fetchData()
      .then((products) => {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        setProduct(foundProduct); // Set the product state
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]); // Fetch data whenever the ID changes

  // If product is not found, display a loading message or handle the case
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
          {/* Add more details about the product as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
