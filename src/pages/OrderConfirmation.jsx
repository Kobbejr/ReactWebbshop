import React from "react";
import { useShoppingCart } from "../components/context/CartContext";
import Currency from "../components/ShoppingFlow/Currency";

const OrderConfirmation = () => {
  const { cart, products } = useShoppingCart();

  const getTotalPrice = () => {
    return Object.keys(cart)
      .reduce((total, id) => {
        const product = products.find((item) => item.id === parseInt(id));
        return total + (product ? product.price * cart[id] : 0);
      }, 0)
      .toFixed(2);
  };

  const generateOrderNumber = () => {
    const chars = "0123456789";
    let orderNumber = "";
    for (let i = 0; i < 16; i++) {
      orderNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return orderNumber;
  };

  const orderNumber = generateOrderNumber();

  return (
    <div className="max-w-full bg-blue-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center py-4">
          <h1 className="text-3xl font-bold text-stone-700 mb-2">
            Your order confirmation!
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
          <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-stone-600 mb-2">
              Your Cart
            </h2>
            <p className="text-gray-500 mb-4">Order number: {orderNumber}</p>
            {Object.keys(cart).map((id) => {
              const product = products.find((item) => item.id === parseInt(id));
              if (!product) return null;
              return (
                <div
                  key={id}
                  className="flex items-center justify-between mb-4 border-b pb-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <p className="text-gray-500">{Currency(product.price)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">Qty: {cart[id]}</p>
                    <p className="font-bold">
                      {Currency(product.price * cart[id])}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/3 space-y-6 mt-6 md:mt-0">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-stone-600">
                Customer
              </h2>
              <div className="text-center">
                <img
                  src="./profile-picture.png"
                  alt="Customer"
                  className="w-20 h-20 border-2 rounded-full mx-auto mb-4"
                />
                <p className="font-bold text-stone-700">Rasmus Mattsson</p>
                <p className="text-gray-500">10 Previous Orders</p>
                <p className="mt-2 text-gray-500">
                  📧 rasmusmattsson@gmail.com
                </p>
                <div className="mt-4">
                  <p className="font-semibold">Shipping Address</p>
                  <p>Päronvägen 3, Stockholm, Sweden</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Billing Address</p>
                  <p>Päronvägen 3, Stockholm, Sweden</p>
                </div>
                <button className="mt-4 bg-teal-800 text-white py-2 px-4 rounded-lg w-full">
                  Edit Details
                </button>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="border-b pb-4 mb-4">
                <p className="flex justify-between">
                  <span>Subtotal:</span>{" "}
                  <span>{Currency(getTotalPrice())}</span>
                </p>
                <p className="flex justify-between">
                  <span>Shipping:</span> <span>{Currency(8)}</span>
                </p>
              </div>
              <p className="flex justify-between font-bold text-lg">
                <span>Total:</span>{" "}
                <span>{Currency(parseFloat(getTotalPrice()) + 8)}</span>
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping</h2>
              <p>DPD Delivery</p>
              <p>Delivery with 24 Hours</p>
              <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg w-full">
                View Tracking Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
