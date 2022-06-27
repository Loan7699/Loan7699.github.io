import { useState } from "react";
import './StartGame.scss';

function StartGame(props) {
    return (
        <div className="StartGame">
            <h1>Freaking Math</h1>
            <button onClick={props.handleStart}>START</button>
        </div>
    )
}

export default StartGame;