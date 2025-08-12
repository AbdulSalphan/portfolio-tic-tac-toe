import { useState } from "react";

export default function PlayerName({scores, player, classify, onNameChange}) {
    const [editField, setEditField] = useState(false);
    const [newName, setNewName] = useState(player);

    function focusHandler(symbol) {
        setEditField(isInput => !isInput);

        if(editField) {
            onNameChange(newName, symbol);
        }
    }

    function renameHandler(event) {
        setNewName(event.target.value)
    }

    let nameField;

    if((newName === 'Draw')) {
        nameField = <p>{newName}</p>;
    }
    else if((newName !== 'Draw') && editField) {
        nameField = <input type="text" value={newName} onChange={renameHandler} onBlur={() => focusHandler(classify)} autoFocus />;
    }
    else if((newName !== 'Draw') && !editField) {
        nameField = <p onClick={focusHandler}>{newName}</p>;
    }

    return (
        <div className={`player-box player-${classify}`}>
            {nameField}
            <span>{scores}</span>
        </div>
    )
}