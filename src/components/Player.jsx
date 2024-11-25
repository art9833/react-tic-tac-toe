import { useState } from "react";

export default function Player({initalName, symbol, isActive}) {
    let [isEditing, setisEditing] = useState(false);
    let [inputName, setInputName] = useState(initalName);
    function handleEdit() {
        setisEditing(isEditing => !isEditing);
    }
    function handleInput(event) {
        setInputName(event.target.value)
    }
    let playerName = <span className="player-name">{inputName}</span>;
    if(isEditing) {
        playerName = <input type="text" onChange={handleInput} required value={inputName} />;
    }
    return (
            <li className={isActive ? "active": ""}>
                <span className="player">
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEdit}> {isEditing ? 'Save': 'Edit'}</button>
            </li>
    );
}