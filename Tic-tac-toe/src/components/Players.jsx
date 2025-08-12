import NewGame from "./NewGame";
import PlayerName from "./PlayerName";
import { useState, useEffect } from "react";

const SCORES_DATA = {
  x: 0,
  o: 0,
  'Draw': 0
}

export default function Players({winner, playersName, onNameChange}) {
    const [scoreBoard, setScoreBoard] = useState(SCORES_DATA);
    useEffect(() => {
        setScoreBoard(prevScoreBoard => {
            let scoreIncrement = prevScoreBoard[winner] + 1;
            return {
                ...prevScoreBoard,
                [winner]: scoreIncrement
            }
        })
    }, [winner]);

    function buttonHandler() {
        setScoreBoard(SCORES_DATA);
    }

    return (
        <div className="players-wrapper">
            <ul>
                <li key="name-x">
                    <PlayerName scores={scoreBoard.x} player={playersName.x} classify="x" onNameChange={onNameChange} />
                </li>
                <li key="name-draw">
                    <PlayerName scores={scoreBoard.Draw} player="Draw" classify="draw" />
                </li>
                <li key="name-o">
                    <PlayerName scores={scoreBoard.o} player={playersName.o} classify="o" onNameChange={onNameChange} />
                </li>
            </ul>
            <NewGame buttonHandler={buttonHandler} buttonName="Reset Score" />
        </div>
    )
}