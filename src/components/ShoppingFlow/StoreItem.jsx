import React from "react";

const StoreItem = ({
  id,
  name,
  price,
  imgUrl,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  quantity,
}) => {
  return (
    <div className="store-item border p-4 rounded-md">
      <img src={imgUrl} alt={name} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <div className="mt-4">
        {quantity > 0 ? (
          <div className="flex items-center space-x-4">
            <button
              onClick={() => decrementQuantity(id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => incrementQuantity(id)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(id)}
            className="bg-blue-500 text-white px-4 py-2 bottom-0 w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
