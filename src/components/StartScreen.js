import React from 'react'
import {Data} from '../Data'
import { doubleAndShuffleArray } from '../helpers/Helpers';

export default function StartScreen({setGameStatus, setMode, setGridSize, gridSize, setGameData, setMoves, setCorrectMatches}) {

    const startNewGame = () => {
        setMoves(0);
        setCorrectMatches(0);
        setGameData(doubleAndShuffleArray(Data, gridSize));
        setGameStatus('game');
    }

    return (
        <div>
            <h1>Start Screen</h1>
                <button onClick={() => startNewGame()}>Start Game</button>
            <div className="mode-selection">
                <h2>Select Mode</h2>
                <button onClick={() => setMode('numbers')}>Numbers</button>
                <button onClick={() => setMode('icons')}>Icons</button>
            </div>
            <div className="grid-selection">
                <h2>Select Grid Size</h2>
                <button onClick={() => setGridSize(8)}>4 x 4</button>      
                <button onClick={() => setGridSize(18)}>6 x 6</button>
            </div>
        </div>
    )
}
