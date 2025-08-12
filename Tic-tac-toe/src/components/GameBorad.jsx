export default function GameBoard({boardValues, tileClickHandler}) {
    return (
        <ul className="game-board">
            {boardValues.map((boardRow, rowIndex) => (
                <li key={rowIndex}>
                    <ul className="game-board-row">
                        {boardRow.map((boardColumn, colIndex) => (
                            <li key={colIndex} className={`symbol-${boardColumn}`}>
                                <button onClick={() => tileClickHandler(rowIndex, colIndex)} disabled={boardColumn !== null}>{boardColumn}</button>                                
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}