import React, {useEffect, useState} from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="p-4 border rounded shadow">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-gray-600">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

