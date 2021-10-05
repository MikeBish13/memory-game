import React from 'react'
import { useStore } from '../Store'

export default function PlayerList() {
    const {players, currentPlayer} = useStore();
    return (
        <div className="multiplayer-list">
            {players.map((item, index) => (
                <div key={index} className={currentPlayer + 1 === item.id ? 'multiplayer-card player-active' : 'multiplayer-card'}>
                    <p><span></span>{item.id}</p>
                    <h2>{item.score}</h2>
                    <p className="current-player">{currentPlayer + 1 === item.id ? 'Current Turn' : ''}</p>
                </div>
            )
            )}
        </div>
    )
}
