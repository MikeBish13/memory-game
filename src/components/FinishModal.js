import React from 'react'
import { displayTime } from '../helpers/Helpers';
import {useStore} from '../Store'
import PlayerLeaderboard from './PlayerLeaderboard';


export default function FinishModal() {

    const {moves, time, resetGame, players, newGame} = useStore();

    return (
        <div className="finish-modal">
            {players.length === 1 ?
            <div className="finish-modal-single-player container"> 
                <h1>You did it!</h1>
                <p className="game-over-sentence">Game over! Here's how you got on...</p>
                <div className="time-container">
                    <p>Time Elapsed</p>
                    <p className="container-value">{displayTime(time)}</p>
                </div>
                <div className="move-container">
                    <p>Moves Taken</p>
                    <p className="container-value">{moves}</p>
                </div>
                <div className="button-container">
                    <button className="btn btn-primary" onClick={() => resetGame()}>Restart</button>
                    <button className="btn btn-secondary" onClick={() => newGame()}>Set Up New Game</button>
                </div>
            </div>
            :
            <PlayerLeaderboard />
            }
        </div>
    )
}
