import React from 'react'
import {useStore} from '../Store';
import {ReactComponent as Logo} from '../images/logo.svg';
import { setMenuButtons } from '../helpers/Helpers';

export default function StartScreen() {
    const {setMode, setGridSize, addPlayers, resetGame} = useStore();

    const handleClick = (event, type, value) => {
        if(type === 'mode') {
            setMode(value);
            setMenuButtons(event, 'mode');
        } else if (type === 'players') {
            addPlayers(value);
            setMenuButtons(event, 'players');
        } else {
            setGridSize(value);
            setMenuButtons(event, 'grid');
        }
    }

    return (
        <div className="start-screen">
            <Logo />
            <div className="start-screen-box">
                <div className="selection-box mode-selection">
                    <h3>Select Theme</h3>
                        <div className="selection-box-buttons">
                            <button className="btn btn-menu btn-mode active" onClick={(e) => handleClick(e, 'mode', 'numbers')}>Numbers</button>
                            <button className="btn btn-menu btn-mode" onClick={(e) => handleClick(e, 'mode', 'icons')}>Icons</button>
                        </div>
                </div>
                <div className="selection-box player-selection">
                    <h3>Number of Players</h3>
                    <div className="selection-box-buttons">
                        <button className="btn btn-menu btn-players active" onClick={(e) => handleClick(e, 'players', 1)}>1</button>
                        <button className="btn btn-menu btn-players" onClick={(e) => handleClick(e, 'players', 2)}>2</button>
                        <button className="btn btn-menu btn-players" onClick={(e) => handleClick(e, 'players', 3)}>3</button>
                        <button className="btn btn-menu btn-players" onClick={(e) => handleClick(e,'players', 4)}>4</button>
                    </div>
                </div>
                <div className="selection-box grid-selection">
                    <h3>Grid Size</h3>
                    <div className="selection-box-buttons">
                        <button className="btn btn-menu btn-grid active" onClick={(e) => handleClick(e, 'grid', 8)}>4 x 4</button>      
                        <button className="btn btn-menu btn-grid" onClick={(e) => handleClick(e, 'grid', 18)}>6 x 6</button>
                    </div>
                </div>
                <button className="btn btn-big" onClick={() => resetGame()}>Start Game</button>
            </div>
        </div>
    )
}
