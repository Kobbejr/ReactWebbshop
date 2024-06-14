import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

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
    <div className="store-item p-4 rounded-md bg-sky-50">
      {/* Product link */}
      <Link to={`/products/${id}`} className="block">
        {/* Product image */}
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-auto mb-4 mx-auto hover:scale-110 transition-transform"
        />
        {/* Product details */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h2 className="font-poppins text-stone-700 text-base font-bold mb-2 sm:mb-0">
            {name}
          </h2>
          <p className="text-stone-900 text-xl md:text-3xl font-bold sm:pl-3">
            ${price}
          </p>
        </div>
      </Link>
      
      {/* Quantity controls or Add to Cart button */}
      <div className="mt-4">
        {quantity > 0 ? (
          // If item is already in cart, show quantity controls
          <div className="flex justify-center">
            <div
              className="flex w-full max-w-xs md:max-w-full h-10 items-center justify-between p-2 bg-sky-50 rounded-[30px] border-2 border-teal-600"
            >
              <button
                onClick={() => decrementQuantity(id)}
                className="text-teal-600 text-lg md:text-xl font-semibold"
              >
                <FaMinus style={{ width: "16px" }} />
              </button>
              <span className="text-stone-900 text-xl md:text-2xl font-semibold">
                {quantity}
              </span>
              <button
                onClick={() => incrementQuantity(id)}
                className="text-teal-600 text-lg md:text-xl font-semibold"
              >
                <FaPlus style={{ width: "16px" }} />
              </button>
            </div>
          </div>
        ) : (
          // If item is not in cart, show Add to Cart button
          <button
            onClick={() => addToCart(id)}
            className="w-full bg-teal-600 text-white px-4 py-2 rounded-md shadow-inner flex justify-center items-center font-semibold hover:bg-teal-400"
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
