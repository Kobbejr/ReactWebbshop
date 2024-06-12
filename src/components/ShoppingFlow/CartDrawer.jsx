import React from "react";
import CrossIcon from "../MenuCrossIcon";

const CartDrawer = ({
  isOpen,
  closeDrawer,
  cart = {},
  products = [],
  incrementQuantity,
  decrementQuantity,
  goToCheckout,
  totalItems,
}) => {
  const getTotalPrice = () => {
    return Object.keys(cart)
      .reduce((total, id) => {
        const product = products.find((item) => item.id === parseInt(id));
        return total + (product ? product.price * cart[id] : 0);
      }, 0)
      .toFixed(2);
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } z-50`}
    >
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart ({totalItems})</h2>
          <button onClick={closeDrawer}>
            <CrossIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {Object.keys(cart).length > 0 ? (
            Object.keys(cart).map((id) => {
              const product = products.find((item) => item.id === parseInt(id));
              if (!product) {
                // console.error(`Product with id ${id} not found`);
                return null;
              }
              return (
                <div key={id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-bold">{product.title}</h3>
                      <p className="text-sm text-gray-600">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decrementQuantity(id)}
                      className="bg-gray-200 rounded-full px-2 py-1 text-gray-600"
                    >
                      -
                    </button>
                    <span>{cart[id]}</span>
                    <button
                      onClick={() => incrementQuantity(id)}
                      className="bg-gray-200 rounded-full px-2 py-1 text-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-600">Your cart is empty</p>
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">Subtotal:</span>
            <span className="text-lg font-bold">${getTotalPrice()}</span>
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
