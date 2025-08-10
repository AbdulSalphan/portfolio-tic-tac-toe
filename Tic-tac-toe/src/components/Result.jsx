import NewGame from "./NewGame"

export default function Result() {
    return (
        <div className="result-card">
            <p>Player has won this round.</p>
            <NewGame buttonName="New Game" />
        </div>
    )
}