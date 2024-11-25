import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

function handleSelectSquare(rowIndex, colIndex) {
  
  setActivePlayer(currentActivePlayer => {
      const nextPlayer = currentActivePlayer === "X" ? "O" : "X";
      return nextPlayer;
  });
  
  setGameTurns(prevTurns => {
      const currentPlayer = prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";
      const updateTurns = [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
          ...prevTurns
      ];
      return updateTurns;
  });
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol="X" initalName="Player 1" isActive = {activePlayer == "X"}/>
          <Player symbol="O" initalName="Player 2" isActive = {activePlayer == "O"}/>
        </ol>
        <GameBoard onSelectSquare = {handleSelectSquare} symbol = {activePlayer} turns = {gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
    
  );
}

export default App
