import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/Navbar';

import GameList from './components/GameList';

import Cart from './components/cart';

import Checkout from './components/Checkout';

 

const App = () => {

  const [cartItems, setCartItems] = useState([]);

 

  const addToCart = (game) => {

    setCartItems(prevItems => [...prevItems, game]);

  };

 

  const removeFromCart = (gameToRemove) => {

    setCartItems(prevItems => prevItems.filter(game => game.id !== gameToRemove._id));

  };

 

  return (

    <div>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path="/" element={<GameList addToCart={addToCart} />} />

          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />

          <Route path="/checkout" element={<Checkout />} />

        </Routes>

      </BrowserRouter>

    </div>

  );

}

 

export default App;

import React, { useState, useEffect } from "react";

import { faker } from "@faker-js/faker";
import "../css/GameList.css";


 

function App() {

  const [gameInfo, setGameInfo] = useState([]);

 

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

        </div>

      ))}

    </div>

  );

}

 

export default App;

import { Link } from 'react-router-dom';

 const Navbar = () => {

    return (

        <div id='navbar'>

            <header>

                <div>

                    <Link to='/'>

                        Home

                    </Link>

                    <Link to='/cart'>

                        Cart

                    </Link>

                </div>

            </header>

        </div>

    )

}
export default Navbar;
 



 




