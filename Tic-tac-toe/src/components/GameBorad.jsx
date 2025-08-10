export default function GameBoard({boardValues}) {
    return (
        <ul className="game-board">
            {boardValues.map((boardRow) => (
                <li>
                    <ul className="game-board-row">
                        {boardRow.map((boardColumn) => (
                            <li>{boardColumn}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}