import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/products/${id}`}>  {/* Ensure this path is correct */}
        <img src={imgUrl} alt={name} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-700">${price.toFixed(2)}</p>
      </Link>
      <div className="mt-4">
        {quantity > 0 ? (
          <div className="w-[150px] h-[50px] p-2.5 bg-sky-50 rounded-[30px] border-2 border-teal-600 justify-center items-center gap-6 inline-flex">
            <button
              onClick={() => decrementQuantity(id)}
              className="text-stone-900 text-2xl font-semibold"
            >
              -
            </button>
            <span className="text-stone-900 text-2xl font-semibold">{quantity}</span>
            <button
              onClick={() => incrementQuantity(id)}
              className="text-stone-900 text-2xl font-semibold"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(id)}
            className="bg-teal-600 text-white px-4 py-2 bottom-0 w-full rounded-[5px] shadow-inner justify-center items-center gap-3 inline-flex"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
