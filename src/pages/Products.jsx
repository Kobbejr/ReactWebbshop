import React, { useEffect, useState } from "react";
import fetchData from "../fetch/fetchData";
import ProductList from "../components/ShoppingFlow/ProductList.jsx";

const Products = () => {
  const [fishProducts, setFishProducts] = useState([]);
  const [filter, setFilter] = useState("All"); // State for selected filter

  useEffect(() => {
    fetchData()
      .then((combinedProducts) => {
        // Filter products with category "Fish"
        const filteredProducts = combinedProducts.filter(
          (product) => product.category === "Fish"
        );
        // Set fishProducts state
        setFishProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to filter products based on subcategory
  const filteredProducts =
    filter === "All"
      ? fishProducts
      : fishProducts.filter((product) => product.subcategory === filter);

  return (
    <div className="bg-sky-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-stone-600 mb-8">
          Filter by category
        </h1>
        <div className="filter-buttons flex justify-center gap-3 sm:gap-8">
          {/* All fish card */}
          <div
            className={`filter-card relative bg-gradient-to-t p-2 sm:p-4 rounded-md w-24 h-12 sm:w-36 sm:h-36 md:w-56
              md:h-auto from-teal-600 to-transparent cursor-pointer flex flex-col items-center justify-center ${
              filter === "All"
                ? "border-2 border-teal-700 opacity-100 transition-opacity duration-300"
                : "opacity-50 hover:opacity-100 transition-opacity duration-300"
            }`}
            onClick={() => setFilter("All")}
          >
            <img
              src={"/all-fish.svg"}
              alt="All fish"
              className="hidden md:flex w-24 sm:w-32 h-24 sm:h-32 mb-2 sm:mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-base sm:text-xl font-semibold sm:font-bold">
              All fish
            </h2>
          </div>

          {/* Ocean fish card */}
          <div
            className={`filter-card relative bg-gradient-to-t p-2 sm:p-4 rounded-md w-24 h-12 sm:w-36 sm:h-36 md:w-56
              md:h-auto from-teal-600 to-transparent cursor-pointer flex flex-col items-center justify-center ${
              filter === "Ocean"
                ? "border-2 border-teal-700 opacity-100 transition-opacity duration-300"
                : "opacity-50 hover:opacity-100 transition-opacity duration-300"
            }`}
            onClick={() => setFilter("Ocean")}
          >
            <img
              src={
                "https://lh3.googleusercontent.com/pw/AP1GczNEjf4Ix4ezZ1TTFzbN8OrtxXBLrEzK8pdS2IeON80uxHgwG6eNG46ffqPeTrukcF5sfco-CXYc2FWazSrXiM2X6osQz2GV64iz2zpcPsfGDE83og=w2400"
              }
              alt="Ocean fish"
              className="hidden md:flex w-24 sm:w-32 h-24 sm:h-32 mb-2 sm:mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-base sm:text-xl font-semibold sm:font-bold">
              Ocean fish
            </h2>
          </div>

          {/* River fish card */}
          <div
            className={`filter-card relative bg-gradient-to-t p-2 sm:p-4 rounded-md w-24 h-12 sm:w-36 sm:h-36 md:w-56
              md:h-auto from-teal-600 to-transparent cursor-pointer flex flex-col items-center justify-center ${
              filter === "River"
                ? "border-2 border-teal-700 opacity-100 transition-opacity duration-300"
                : "opacity-50 hover:opacity-100 transition-opacity duration-300"
            }`}
            onClick={() => setFilter("River")}
          >
            <img
              src={
                "https://lh3.googleusercontent.com/pw/AP1GczOjW1Li4BYx6SHKISylC0FKYVl5CHbC0Y6vSZs13A7AVhCvvw1H6kaDXYnb8Lmv6u-_1fzqcTIVPVyXIPKMJRi0CofGL12VrvDTzNeYKhw0YYIlQA=w2400"
              }
              alt="River fish"
              className="hidden md:flex w-24 sm:w-32 h-24 sm:h-32 mb-2 sm:mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-base sm:text-xl font-semibold sm:font-bold">
              River fish
            </h2>
          </div>

          {/* Pond fish card */}
          <div
            className={`filter-card relative bg-gradient-to-t p-2 sm:p-4 rounded-md w-24 h-12 sm:w-36 sm:h-36 md:w-56
              md:h-auto from-teal-600 to-transparent cursor-pointer flex flex-col items-center justify-center ${
              filter === "Pond"
                ? "border-2 border-teal-700 opacity-100 transition-opacity duration-300"
                : "opacity-50 hover:opacity-100 transition-opacity duration-300"
            }`}
            onClick={() => setFilter("Pond")}
          >
            <img
              src={
                "https://lh3.googleusercontent.com/pw/AP1GczNL0JGQmfXiOYW4QqUSIYAP02BeY6euNbJ---9m7ih5K3MlKpY36hvbNHmV_bIOeZKii9z9SQjL37i3k3wnL_97lfKgNUz7I1wXHm6OqBtOE2N78g=s256-p-k"
              }
              alt="Pond fish"
              className="hidden md:flex w-24 sm:w-32 h-24 sm:h-32 mb-2 sm:mb-4 mx-auto hover:scale-110 transition-transform"
            />
            <h2 className="font-poppins text-white text-center text-base sm:text-xl font-semibold sm:font-bold">
              Pond fish
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center pt-6">
  <div className="flex flex-col md:flex-row items-center justify-between w-full mb-2">
    <h2 className="text-3xl font-bold text-center text-stone-600 mb-2 md:mb-0 md:text-left">
      Showing: {filter} fish
    </h2>
    <h3 className="text-center md:text-right text-lg font-bold text-stone-600">
      sorted by popularity
    </h3>
  </div>
</div>




        {/* Pass filteredProducts as props to ProductList component */}
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;
