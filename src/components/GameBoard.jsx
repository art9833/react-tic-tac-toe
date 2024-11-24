import { useState } from "react";

let intialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard() {
    const [gameBoard,setGameBoard] = useState(intialGameBoard);
    function handleClickBox(rowIndex, colIndex) {
        setGameBoard((prevGameBoard => {
            let updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        }))
        
    }

return (
        <ol id="game-board">
            { gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>handleClickBox(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                    </li>
                ))}
        </ol>
    );
}