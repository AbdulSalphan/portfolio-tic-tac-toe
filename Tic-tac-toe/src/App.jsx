import GameBoard from "./components/GameBorad"
import Players from "./components/Players"
import NewGame from "./components/NewGame"
import Result from "./components/Result"

import { useState } from "react"


const GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const PLAYERS_NAME = {
  x: "Player X",
  o: "Player O"
}

function derivedState(refBoard) {
  let currentPlayer = 'x';
  if((refBoard.length > 0) && (refBoard[0].player == 'x')) {
    currentPlayer = 'o';
  }
  return currentPlayer;
}

export default function App() {
  const [playersName, setPlayersName] = useState(PLAYERS_NAME);
  const [gameBoard, setGameBoard] = useState([]);

  function onNameChange(newName, symbol) {
    setPlayersName(prevState => {      
      return {
        ...prevState,
        [symbol]: newName
      }
    })
  }

  let newGameBoard = [...GAME_BOARD.map(array => [...array])]

  gameBoard.forEach(gameInstance => {
    const {square, player} = gameInstance;
    const {row, col} = square;
    newGameBoard[row][col] = player;
  });
  function tileClickHandler(rowIndex, colIndex) {
    setGameBoard(prevBoard => {
      let currentPlayer = derivedState(prevBoard);
      const updatedBoard = [{
        square: {
          row: rowIndex,
          col: colIndex,
        },
        player: currentPlayer,
      },
      ...prevBoard
      ]
      return updatedBoard;
    })
    console.log(gameBoard);
  }

  return (
    <div className="app-wrapper">
      <section className="play-area">
        <Players playersName={playersName} onNameChange={onNameChange} />
        <GameBoard boardValues={newGameBoard} tileClickHandler={tileClickHandler}/>
        <NewGame buttonName="New Game" />
        <Result playersName={playersName} />
        <div className="result-overlay"></div>
      </section>
    </div>
  )
}