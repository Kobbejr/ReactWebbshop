import React, { useEffect, useState } from "react";
import axios from "axios";
import { useShoppingCart } from "../context/CartContext";
import { formatCurrency } from "./Currency";
import { CartItem } from "./CartItem";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${isOpen ? "block" : "hidden"}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        ></div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <div className="w-screen max-w-lg h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
            <div className="px-4 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Cart</h2>
              <div className="mt-6 space-y-6">
                {cartItems.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <CartItem
                      key={item.id}
                      id={product.id}
                      name={product.title}
                      price={product.price}
                      quantity={item.quantity}
                    />
                  );
                })}
                <div className="flex justify-end font-bold text-xl">
                  Total{" "}
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const product = products.find(
                        (product) => product.id === cartItem.id
                      );
                      return (
                        total + (product?.price || 0) * cartItem.quantity
                      );
                    }, 0)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
