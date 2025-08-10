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
  X: "Player X",
  O: "Player O",
}

export default function App() {
  return (
    <div className="app-wrapper">
      <section className="play-area">
        <Players />
        <GameBoard boardValues={GAME_BOARD}/>
        <NewGame buttonName="New Game" />
        <Result />
        <div className="result-overlay"></div>
      </section>
    </div>
  )
}