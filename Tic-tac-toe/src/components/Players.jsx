import NewGame from "./NewGame";
import PlayerName from "./PlayerName";

export default function Players({playersName, onNameChange}) {
    return (
        <div className="players-wrapper">
            <ul>
                <li key="name-x">
                    <PlayerName player={playersName.x} classify="x" onNameChange={onNameChange} />
                </li>
                <li key="name-draw">
                    <PlayerName player="Draw" classify="draw" />
                </li>
                <li key="name-o">
                    <PlayerName player={playersName.o} classify="o" onNameChange={onNameChange} />
                </li>
            </ul>
            <NewGame buttonName="Reset Score" />
        </div>
    )
}