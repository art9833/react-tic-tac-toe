
let intialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = intialGameBoard;
    for (const turn of turns) {
        
        const {square, player} = turn;
        const {row, col} = square;
        console.log(row,col, player);
        gameBoard[row][col] = player;
    }
    // const [gameBoard,setGameBoard] = useState(intialGameBoard);
    // function handleClickBox(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard => {
    //         let updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = symbol;
    //         return updatedGameBoard;
    //     }));
    //     onSelectSquare();
    // }
    console.log(gameBoard);
return (
        
        <ol id="game-board">
            { gameBoard.map((row, rowIndex) => (
                    
                    <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                    </li>
                ))}
        </ol>
    );
}