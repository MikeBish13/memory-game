import React from 'react'
import { cleanButtons, doubleAndShuffleArray } from '../helpers/Helpers';
import { Data } from '../Data';

export default function Menu({setMoves, setGameData, setCorrectMatches, setFirst, setSecond, setGameStatus, gridSize}) {

    const restartGame = () => {
        cleanButtons();
        setMoves(0);
        setGameData(doubleAndShuffleArray(Data, gridSize));
        setCorrectMatches(0);
        setFirst(undefined);
        setSecond(undefined);
      }

    return (
        <div>
            <button onClick={() => restartGame()}>Restart</button>
            <button onClick={() => setGameStatus('start')}>New Game</button>
        </div>
    )
}
