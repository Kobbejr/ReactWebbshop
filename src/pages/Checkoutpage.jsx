import React from 'react';
import { useShoppingCart } from '../components/context/CartContext';
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import Currency from "../components/ShoppingFlow/Currency";

export default function Checkoutpage() {
  const {
    cart = {},
    products,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useShoppingCart();

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
    <div className="bg-sky-100 py-20 w-full">
      <div className="lg:grid lg:grid-rows-2 lg:grid-cols-5 lg:max-w-screen-lg mx-auto">
        <div className="lg:col-span-3 bg-sky-50 lg:rounded-l-lg p-8">
          <div>
            <h1 className="text-3xl font-bold text-left text-stone-600 mb-8">Fish Bag</h1>
          </div>

          <div className="lg:p-4 divide-y">
            {Object.keys(cart).length > 0 ? (
              Object.keys(cart).map((id) => {
                const product = products.find((item) => item.id === parseInt(id));
                if (!product) {
                  // Product not found
                  return null;
                }
                return (
                  <div key={id} className="flex text-stone-600 items-center justify-between p-2">
                    {/* Link to product page */}
                    <Link to={`/products/${id}`}>
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          className="w-16 h-16 lg:w-32 lg:h-32 object-cover"
                          alt={product.title}
                        />
                        <div className="text-left">
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
        </div>

        <div className='lg:col-span-2 bg-white lg:rounded-r-lg p-8'>
          <div>
            <h2 className="text-xl font-bold text-left text-stone-600 mb-8">Summary</h2>
          </div>

          <div className="flex flex-col">
            <div className='text-base'>
              <div className="border-b pb-4 mb-4">
                <p className="flex justify-between">
                  <span>Subtotal:</span>{" "}
                  <span>{Currency(getTotalPrice())}</span>
                </p>
                <p className="flex justify-between">
                  <span>Shipping:</span> <span>{Currency(8)}</span>
                </p>
              </div>
              <p className="flex justify-between font-bold text-stone-600 text-lg">
                <span>Total:</span>{" "}
                <span>{Currency(parseFloat(getTotalPrice()) + 8)}</span>
              </p>
            </div>

            <div className='pt-10'>
              <a href="/order-confirmation" class="rounded bg-teal-500 px-8 py-3 text-center font-semibold text-white hover:bg-teal-400 shadow-inner-custom">Pay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}