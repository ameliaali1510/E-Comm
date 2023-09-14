import React, { useState, useEffect } from "react";
import "./App.css";
import { faker } from "@faker-js/faker";

function App() {
  const [gameInfo, setGameInfo] = useState({
    title: "",
    thumbnail: "",
    price: "",
  });

  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    try {
      const response = await fetch("https://www.freetogame.com/api/game?id=452");
      if (!response.ok) {
        throw new Error("Game not found");
      }
      const data = await response.json();

      // Use Faker.js to generate a random price
      const randomPrice = formatPrice(faker.datatype.float({ min: 20, max: 40 }));

      setGameInfo({
        title: data.title,
        thumbnail: data.thumbnail,
        price: randomPrice,
      });
    } catch (error) {
      alert(`Error fetching Game data: ${error.message}`);
    }
  };

  // Function to format a number as a price with £ symbol
  const formatPrice = (price) => {
    return `£${price.toFixed(2)}`;
  };

  return (
    <div className="App">
      <h1>Game Information</h1>

      <div>
        <div>
          <h1>Title: {gameInfo.title}</h1>
          <p>Price: {gameInfo.price}</p>
          <img src={gameInfo.thumbnail} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default App;
