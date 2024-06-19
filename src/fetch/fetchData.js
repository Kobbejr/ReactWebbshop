import generateFishEntries from "../fishData/generateFishEntries";

const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const apiProducts = await response.json();
    const newFishEntries = generateFishEntries();
    const combinedProducts = [...apiProducts, ...newFishEntries];
    console.log("Combined Products Array:", combinedProducts);
    return combinedProducts;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
};

export default fetchData;
