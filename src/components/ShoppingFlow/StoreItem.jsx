import React from "react";
import { useShoppingCart } from "../context/CartContext";
import { Currency } from "./Currency";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={imgUrl} alt={name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{Currency(price)}</p>
      <div className="mt-auto">
        {quantity === 0 ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <button
                className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div className="text-xl">{quantity}</div>
              <button
                className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded w-full"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
