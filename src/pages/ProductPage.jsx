import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../fetch/fetchData";
import { useShoppingCart } from "../components/context/CartContext";
import Currency from "../components/ShoppingFlow/Currency";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null); // State to store the product
  const { addToCart, incrementQuantity, decrementQuantity, getItemQuantity } = useShoppingCart();

  useEffect(() => {
    // Fetch the product details based on the ID
    fetchData()
      .then((products) => {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct); // Set the product state
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]); // Fetch data whenever the ID changes

  // If product is not found, display a loading message or handle the case
  if (!product) {
    return <div>Loading...</div>;
  }

  const quantity = getItemQuantity(product.id);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="filter-card bg-gradient-to-t p-4 rounded-md sm:col-span-1 w-50 from-teal-600 to-transparent">
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div className="sm:col-span-1">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{Currency(product.price)}</p>
          <p className="mt-4">{product.description}</p>
          {/* Add the increment, decrement, and add to cart buttons */}
          <div className="mt-4">
            {quantity > 0 ? (
              <div className="w-full">
                <div className="flex items-center justify-between p-5 bg-sky-50 rounded-[30px] border-2 border-teal-600">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="text-stone-900 text-2xl font-semibold"
                  >
                    -
                  </button>
                  <span className="text-stone-900 text-2xl md:px-4 sm:px-3 font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="text-stone-900 text-2xl font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product.id)}
                className="w-full bg-teal-600 text-white lg:px-4 md:px-2 sm:px-2 py-2 rounded-[5px] shadow-inner flex justify-center items-center font-semibold hover:bg-teal-400 shadow-inner-custom"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
