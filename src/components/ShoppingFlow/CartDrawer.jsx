import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CrossIcon from "../MenuCrossIcon";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

const CartDrawer = ({
  isOpen,
  closeDrawer,
  cart = {},
  products = [],
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setCart,
  goToCheckout,
  totalItems,
}) => {
  const drawerRef = useRef(null);

  // Function to handle clicks outside the drawer to close it
  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      closeDrawer();
    }
  };

  // Effect to add or remove click event listener based on drawer state
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or when drawer closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Dependency on isOpen ensures effect runs when drawer state changes

  // If drawer is not open, return null (component doesn't render anything)
  if (!isOpen) {
    return null;
  }

  // Function to calculate the total price of items in the cart
  const getTotalPrice = () => {
    return Object.keys(cart)
      .reduce((total, id) => {
        const product = products.find((item) => item.id === parseInt(id));
        return total + (product ? product.price * cart[id] : 0);
      }, 0)
      .toFixed(2);
  };

  return (
    // Overlay background
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } z-50`}
    >
      {/* Drawer container */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-sky-50 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg text-stone-600 font-bold">Fish bag ({totalItems})</h2>
          <button onClick={closeDrawer}>
            <CrossIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        {/* Drawer content */}
        <div className="p-4 space-y-4">
          {Object.keys(cart).length > 0 ? (
            Object.keys(cart).map((id) => {
              const product = products.find((item) => item.id === parseInt(id));
              if (!product) {
                // Product not found
                return null;
              }
              return (
                <div key={id} className="flex text-stone-600 items-center justify-between shadow-md p-2">
                  {/* Link to product page */}
                  <Link to={`/products/${id}`}>
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        className="w-16 h-16 object-cover"
                        alt={product.title}
                      />
                      <div>
                        <h3 className="text-sm font-bold">{product.title}</h3>
                        <p className="text-sm text-gray-600">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* Quantity controls and delete button */}
                  <div className="flex items-center space-x-2">
                    <div className="CartButton w-[88px] h-[31px] p-2.5 bg-sky-50 rounded-[30px] border-2 border-teal-600 justify-center items-center gap-2.5 flex">
                      <button
                        onClick={() => decrementQuantity(id)}
                        className="text-teal-600 text-xl font-semibold"
                      >
                        <FaMinus style={{ width: "12px" }} />
                      </button>
                      <span className="text-stone-900 text-base font-medium leading-normal p-1">
                        {cart[id]}
                      </span>
                      <button
                        onClick={() => incrementQuantity(id)}
                        className="text-teal-600 text-2xl font-semibold"
                      >
                        <FaPlus style={{ width: "12px" }} />
                      </button>
                    </div>
                    {/* Delete button */}
                    <button
                      onClick={() => removeFromCart(id)}
                      className="text-stone-700 text-xl"
                    >
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            // Empty cart message
            <p className="text-center text-stone-600">Your Fish bag is empty</p>
          )}
        </div>
        {/* Drawer footer */}
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-stone-600 font-bold">Subtotal:</span>
            <span className="text-lg text-stone-800 font-bold">${getTotalPrice()}</span>
          </div>
          <button
            onClick={goToCheckout}
            className="w-full bg-teal-600 text-white py-2 rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
