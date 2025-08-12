import NewGame from "./NewGame"

export default function Result({playersName, winner, buttonHandler}) {
    let announcement;
    if(winner === 'x' || winner === 'o') {
        announcement = <p>{playersName[winner]} has won this round.</p>
    }
    else if(winner === 'Draw') {
        announcement = <p>This round is a draw.</p>
    }
    return (
        <div className={`result-screen ${winner ? 'show':''}`}>
            <div className="result-card">
                {announcement}
                <NewGame buttonHandler={() => buttonHandler("Reset Game")} buttonName="New Game" />
            </div>
        </div>
    )
}