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
    <div className="store-item p-4 rounded-md w-80 bg-sky-50">
      {/* Product link */}
      <Link to={`/products/${id}`}>
        {/* Product image */}
        <img
          src={imgUrl}
          alt={name}
          className="w-44 mb-4 mx-auto hover:scale-110 transition-transform"
        />
        {/* Product details */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-poppins text-stone-700 text-base font-bold">
            {name}
          </h2>
          <p className="text-stone-900 text-3xl font-bold">${price}</p>
        </div>
      </Link>
      
      {/* Quantity controls or Add to Cart button */}
      <div className="mt-4">
        {quantity > 0 ? (
          // If item is already in cart, show quantity controls
          <div className="w-full flex justify-center">
            <div
              className="flex w-full items-center justify-between p-5 bg-sky-50 rounded-[30px] border-2 border-teal-600"
              style={{ height: "50px" }}
            >
              <button
                onClick={() => decrementQuantity(id)}
                className="text-teal-600 text-xl font-semibold"
              >
                <FaMinus style={{ width: "16px" }} />
              </button>
              <span className="text-stone-900 text-2xl font-semibold">
                {quantity}
              </span>
              <button
                onClick={() => incrementQuantity(id)}
                className="text-teal-600 text-2xl font-semibold"
              >
                <FaPlus style={{ width: "16px" }} />
              </button>
            </div>
          </div>
        ) : (
          // If item is not in cart, show Add to Cart button
          <button
            onClick={() => addToCart(id)}
            className="w-full bg-teal-600 text-white px-4 py-2 rounded-[5px] shadow-inner flex justify-center items-center font-semibold hover:bg-teal-400 shadow-inner-custom"
            style={{ height: "50px" }}
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
