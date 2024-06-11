import generateFishEntries from "../fishData/fishes";

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
    return combinedProducts;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
};

export default fetchData;
