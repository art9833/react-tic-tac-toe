import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player symbol="X" initalName="Player 1"/>
          <Player symbol="O" initalName="Player 2"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App
