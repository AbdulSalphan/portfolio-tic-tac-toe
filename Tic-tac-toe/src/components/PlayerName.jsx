export default function PlayerName({player, classify}) {
    return (
        <div className={`player-box ${classify}`}>
            <p>{player}</p>
            <span>0</span>
        </div>
    )
}