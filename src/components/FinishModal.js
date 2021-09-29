import React from 'react'

export default function FinishModal({moves, setGameStatus, time}) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60; 

    return (
        <div>
            <h1>Congratulations! You Won!</h1>
            <h3>It took you {moves} moves!</h3>
            <h3>It took you {minutes}:{seconds}!</h3>
            <button onClick={() => setGameStatus('start')}>Set Up New Game</button>
            <button>Restart</button>
        </div>
    )
}
