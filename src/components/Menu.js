import React from 'react'
import { useStore } from '../Store';
import {ReactComponent as Logo} from '../images/logo.svg';
import MobileMenuModal from './MobileMenuModal';

export default function Menu() {
    const {resetGame, setMenuModal, menuModal, newGame} = useStore();

    return (
        <>
            <div className="menu container">
                <Logo />
                <button className="btn btn-primary btn-mobile" onClick={() => setMenuModal()}>Menu</button>
                <div className="menu-buttons">
                    <button className="btn btn-primary btn-desktop" onClick={() => resetGame()}>Restart</button>
                    <button className="btn btn-secondary btn-desktop" onClick={() => newGame()}>New Game</button>
                </div>    
            </div>
            {menuModal && <MobileMenuModal />}
        </>
    )
}
