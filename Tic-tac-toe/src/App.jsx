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

export default function App() {
  const [playersName, setPlayersName] = useState(PLAYERS_NAME);

  function onNameChange(newName, symbol) {
    setPlayersName(prevState => {      
      return {
        ...prevState,
        [symbol]: newName
      }
    })
  }

  return (
    <div className="app-wrapper">
      <section className="play-area">
        <Players playersName={playersName} onNameChange={onNameChange} />
        <GameBoard boardValues={GAME_BOARD}/>
        <NewGame buttonName="New Game" />
        <Result playersName={playersName} />
        <div className="result-overlay"></div>
      </section>
    </div>
  )
}