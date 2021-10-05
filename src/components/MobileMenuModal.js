import React from 'react'
import { useStore } from '../Store';

export default function MobileMenuModal() {
    const {resetGame, setMenuModal, newGame} = useStore();
 
    return (
        <div className="mobile-menu-modal">
            <div className="mobile-menu-modal-container container">
                <button className="btn btn-primary" onClick={() => resetGame()}>Restart</button>
                <button className="btn btn-secondary" onClick={() => newGame()}>New Game</button>
                <button className="btn btn-secondary" onClick={() => setMenuModal()}>Resume Game</button>
            </div>
        </div>
    )
}