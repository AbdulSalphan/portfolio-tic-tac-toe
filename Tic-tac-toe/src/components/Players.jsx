import NewGame from "./NewGame";
import PlayerName from "./PlayerName";

export default function Players() {
    return (
        <div className="players-wrapper">
            <ul>
                <li>
                    <PlayerName player="Player X" classify="player-x" />
                </li>
                <li>
                    <PlayerName player="Draw" classify="player-draw" />
                </li>
                <li>
                    <PlayerName player="Player O" classify="player-o" />
                </li>
            </ul>
            <NewGame buttonName="Reset Score" />
        </div>
    )
}