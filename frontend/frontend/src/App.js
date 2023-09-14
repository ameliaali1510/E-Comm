import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [gameInfo, setGameInfo] = useState({
    title: "",
    thumbnail: "",
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


      
      setGameInfo({
        title: data.title,
        thumbnail: data.thumbnail,
      });
    } catch (error) {
      alert(`Error fetching Game data: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <h1>Game Information</h1>

      <div>
        <div>
          <h1>Title: {gameInfo.title}</h1>
          <img src={gameInfo.thumbnail} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default App;
