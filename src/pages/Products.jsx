import React, { useEffect, useState } from "react";
import fetchData from "../fetch/fetchData";
import ProductList from '../components/ShoppingFlow/ProductList.jsx';
import Pagination from "../components/ShoppingFlow/Pagination.jsx";

const Products = () => {
  const [fishProducts, setFishProducts] = useState([]);
  const [filter, setFilter] = useState('All'); // State for selected filter

  useEffect(() => {
    fetchData()
      .then((combinedProducts) => {
        // Filter products with category "Fish"
        const filteredProducts = combinedProducts.filter(
          (product) => product.category === "Fish"
        );
        // Set fishProducts state
        setFishProducts(filteredProducts);
        // Console log filtered products
        console.log("Fish Products:", filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to filter products based on subcategory
  const filteredProducts = filter === 'All' ? fishProducts : fishProducts.filter((product) => product.subcategory === filter);

  return (
    <div className="bg-sky-100">
      <div className="filter-buttons mx-auto py-16 flex justify-between px-4">
        <div className="Filter-card" onClick={() => setFilter('Ocean')}>
          <div className="card-content bg-gradient-to-t from-teal-600 to-transparent">
            <img
              src={"https://lh3.googleusercontent.com/pw/AP1GczNEjf4Ix4ezZ1TTFzbN8OrtxXBLrEzK8pdS2IeON80uxHgwG6eNG46ffqPeTrukcF5sfco-CXYc2FWazSrXiM2X6osQz2GV64iz2zpcPsfGDE83og=w2400"}
              alt="Ocean fish"
              className="w-44 mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-2xl font-bold">
              Ocean fish
            </h2>
          </div>
        </div>
        <div className="Filter-card" onClick={() => setFilter('River')}>
          <div className="card-content bg-gradient-to-t from-teal-600 to-transparent">
            <img
              src={"https://lh3.googleusercontent.com/pw/AP1GczOjW1Li4BYx6SHKISylC0FKYVl5CHbC0Y6vSZs13A7AVhCvvw1H6kaDXYnb8Lmv6u-_1fzqcTIVPVyXIPKMJRi0CofGL12VrvDTzNeYKhw0YYIlQA=w2400"}
              alt="River fish"
              className="w-44 mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-2xl font-bold">
              River fish
            </h2>
          </div>
        </div>
        <div className="Filter-card" onClick={() => setFilter('Pond')}>
          <div className="card-content bg-gradient-to-t from-teal-600 to-transparent">
            <img
              src={"https://lh3.googleusercontent.com/pw/AP1GczNL0JGQmfXiOYW4QqUSIYAP02BeY6euNbJ---9m7ih5K3MlKpY36hvbNHmV_bIOeZKii9z9SQjL37i3k3wnL_97lfKgNUz7I1wXHm6OqBtOE2N78g=s256-p-k"}
              alt="Pond fish"
              className="w-44 mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-2xl font-bold">
              Pond fish
            </h2>
          </div>
        </div>
      </div>
      {/* Pass filteredProducts as props to ProductList component */}
      <ProductList products={filteredProducts} />
    </div>
  );
  
  
};

export default Products;
