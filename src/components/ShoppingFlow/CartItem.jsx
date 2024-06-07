import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import axios from "axios";
import { formatCurrency } from "./Currency";

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);

  if (!product) return null;

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
          <div className="text-gray-600">{formatCurrency(product.price)}</div>
        </div>
        <div className="text-gray-600 text-sm">
          Total: {formatCurrency(product.price * quantity)}
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
