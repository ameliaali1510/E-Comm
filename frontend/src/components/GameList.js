import React, { useState, useEffect } from "react";

import { faker } from "@faker-js/faker";
import "../css/GameList.css";


 

function App() {

  const [gameInfo, setGameInfo] = useState([]);
  const [cart, setCart] = useState([]); // To store items in the cart
 

  useEffect(() => {

    fetchGameData();

  }, []);

 

  const fetchGameData = async () => {

    try {

      const gameIds = [452, 453, 454, 455, 456, 457, 458, 459, 460, 461]; // Add more game IDs if needed

      const gameData = [];

 

      for (const gameId of gameIds) {

        const response = await fetch(`https://www.freetogame.com/api/game?id=${gameId}`);

        if (!response.ok) {

          throw new Error(`Game ${gameId} not found`);

        }

        const data = await response.json();

 

        // Use Faker.js to generate a random price

        const randomPrice = formatPrice(faker.datatype.float({ min: 20, max: 40 }));

 

        gameData.push({

          title: data.title,

          thumbnail: data.thumbnail,

          price: randomPrice,

        });

      }

 

      setGameInfo(gameData);

    } catch (error) {

      alert(`Error fetching Game data: ${error.message}`);

    }

  };

  const addToCart = (game) => {
    console.log("Adding to cart:", game); // Debugging statement
   setCart([...cart, game]);
 };

  // Function to format a number as a price with £ symbol

  const formatPrice = (price) => {

    return `£${price.toFixed(2)}`;

  };

 

  return (

    <div className="App">
    
    <h1>GameGrid- find games you <span className="highlight">Love</span></h1>


      {gameInfo.map((game, index) => (

        <div key={index}>

          <h1>Title: {game.title}</h1>

          <p>Price: {game.price}</p>

          <img src={game.thumbnail} alt={`Game ${index + 1}`} />

          <button onClick={() => addToCart(game)}>Add To Cart</button>

        </div>

      ))}

    </div>

    

  );

}

 

export default App;


 



 




