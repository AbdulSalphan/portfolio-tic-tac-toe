import NewGame from "./NewGame";
import PlayerName from "./PlayerName";

export default function Players({playersName, onNameChange}) {
    return (
        <div className="players-wrapper">
            <ul>
                <li>
                    <PlayerName player={playersName.x} classify="x" onNameChange={onNameChange} />
                </li>
                <li>
                    <PlayerName player="Draw" classify="draw" />
                </li>
                <li>
                    <PlayerName player={playersName.o} classify="o" onNameChange={onNameChange} />
                </li>
            </ul>
            <NewGame buttonName="Reset Score" />
        </div>
    )
}