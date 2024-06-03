import React, { useEffect, useState } from "react";
import "./App.css";
import generateFishEntries from "./fishData/fishes";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetchar API
        const response = await fetch("https://fakestoreapi.com/products");
        const apiProducts = await response.json();

        // Skapar nya fake-produkter (fiskar) från funktionen i fishes.js
        const newFishEntries = generateFishEntries();

        // Skapar en ny array som innehåller produkter från API + våra nya egna fiskar
        const combinedProducts = [...apiProducts, ...newFishEntries];

        // Visar vår nya array med ALLA produkter i consolen
        console.log("Combined Products:", combinedProducts);

        // Sätter state
        setAllProducts(combinedProducts);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <h2>WAZZZAPPP!</h2>
    </div>
  );
}

export default App;
