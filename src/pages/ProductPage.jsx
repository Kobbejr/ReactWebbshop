import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../components/context/CartContext";
import Currency from "../components/ShoppingFlow/Currency";
import Header from "../components/Header";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, incrementQuantity, decrementQuantity, getItemQuantity } =
    useShoppingCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const quantity = getItemQuantity(product.id);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 object-cover mb-4 md:mb-0"
          />
          <div className="md:ml-4">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-700 mb-4">{Currency(product.price)}</p>
            <div className="mt-4">
              {quantity > 0 ? (
                <div className="w-[150px] h-[50px] p-2.5 bg-sky-50 rounded-[30px] border-2 border-teal-600 justify-center items-center gap-6 inline-flex">
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="text-stone-900 text-2xl font-semibold"
                  >
                    -
                  </button>
                  <span className="text-stone-900 text-2xl font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="text-stone-900 text-2xl font-semibold"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-teal-600 text-white px-4 py-2 bottom-0 w-full rounded-[5px] shadow-inner justify-center items-center gap-3 inline-flex"
                >
                  Add to Cart
                </button>
              )}
            </div>
            <button className="mt-4 bg-teal-600 text-white px-9 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
