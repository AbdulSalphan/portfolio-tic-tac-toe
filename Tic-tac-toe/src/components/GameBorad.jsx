export default function GameBoard({boardValues, tileClickHandler, winner}) {

    function buttonDisable(symbol) {
        if(winner !== undefined || symbol !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    return (
        <ul className="game-board">
            {boardValues.map((boardRow, rowIndex) => (
                <li key={rowIndex}>
                    <ul className="game-board-row">
                        {boardRow.map((boardColumn, colIndex) => (
                            <li key={colIndex} className={`symbol-${boardColumn}`}>
                                <button onClick={() => tileClickHandler(rowIndex, colIndex)} disabled={buttonDisable(boardColumn)}>{boardColumn}</button>                                
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}