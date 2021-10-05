import React from 'react'
import { useStore } from '../Store'

export default function PlayerLeaderboard() {
    const {players, resetGame, newGame} = useStore();
    const playerList = [];
    for(let i = 0; i < players.length; i++) {
        playerList.push(players[i]);
    }
    const sortedPlayerList = playerList.sort((a, b) => (a.score < b.score) ? 1 : -1);
    const winners = [];
    const losers = [];
    for(let i = 0; i < sortedPlayerList.length; i++) {
        if(sortedPlayerList[i].score === sortedPlayerList[0].score) {
            winners.push(sortedPlayerList[i]);
        } else {
            losers.push(sortedPlayerList[i]);
        }
    }
    return (
        <div className="player-leaderboard container">
            {winners.length === 1 ? <h1>Player {winners[0].id} wins!</h1> : <h1>It's a tie!</h1>}
            <p className="game-over-sentence">Game over! Here are the results...</p>
            {winners.map((item, index) => (
                <div className="player-leaderboard-card player-leaderboard-card-winner" key={index}>
                    <p>Player {item.id} (Winner!)</p> 
                    <span>{item.score} pairs</span>
                </div>
            ))}
            {losers.map((item, index) => (
                <div className="player-leaderboard-card player-leaderboard-card-loser" key={index}>
                    <p>Player {item.id}</p> 
                    <span>{item.score} pairs</span>
                </div>
            ))}
            <div className="button-container">
                    <button className="btn btn-primary" onClick={() => resetGame()}>Restart</button>
                    <button className="btn btn-secondary" onClick={() => newGame()}>Set Up New Game</button>
            </div>
        </div>
    )
}
