import React from "react";
import { useShoppingCart } from "../context/CartContext";
import { Currency } from "./Currency";

export function CartItem({ product, quantity }) {
  // Receive product object directly
  const { removeFromCart } = useShoppingCart();

  return (
    <div className="flex items-center gap-2">
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-cover"
      />
      <div className="flex-grow">
        <div className="flex justify-between">
          <div>
            {product.title}{" "}
            {quantity > 1 && (
              <span className="text-sm text-gray-500">x{quantity}</span>
            )}
          </div>
          <div className="text-gray-600">{Currency(product.price)}</div>
        </div>
        <div className="text-gray-600 text-sm">
          Total: {Currency(product.price * quantity)}
        </div>
      </div>
      <button
        className="border border-transparent text-red-500 rounded-sm px-2 py-1"
        onClick={() => removeFromCart(product.id)}
      >
        &times;
      </button>
    </div>
  );
}
