import GameBoard from "./components/GameBorad"
import Players from "./components/Players"
import NewGame from "./components/NewGame"
import Result from "./components/Result"

import {WINNING_COMBINATIONS} from "./winning-combinations.js"

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

  function buttonHandler(buttonUtility) {
    if(buttonUtility === "Reset Game") {
      setGameBoard([]);
    }
  }
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
  }

  let winner;

  WINNING_COMBINATIONS.forEach(combination => {
    let firstValue = newGameBoard[combination[0].row][combination[0].column];
    let secondValue = newGameBoard[combination[1].row][combination[1].column];
    let thirdValue = newGameBoard[combination[2].row][combination[2].column];
    if(firstValue && firstValue === secondValue && firstValue === thirdValue) {
      winner = firstValue;
    }
  });

  if(gameBoard.length === 9 && winner === undefined) {
    winner = "Draw";
  }

  return (
    <div className="app-wrapper">
      <section className="play-area">
        <Players playersName={playersName} onNameChange={onNameChange} />
        <GameBoard boardValues={newGameBoard} winner={winner} tileClickHandler={tileClickHandler}/>
        <NewGame buttonHandler={() => buttonHandler("Reset Game")} buttonName="New Game" />
        <Result buttonHandler={buttonHandler} playersName={playersName} winner={winner} />
      </section>
    </div>
  )
}