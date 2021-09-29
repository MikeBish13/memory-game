import React from 'react'
import { useState, useEffect } from 'react';
import FinishModal from './FinishModal';
import GridItem from './GridItem';
import { confirmMatch } from '../helpers/Helpers';
import Menu from './Menu';

export default function Grid({mode, setMoves, restartGame, gridSize, gameData, setGameData, correctMatches, setCorrectMatches, moves, setGameStatus}) {
    const [time, setTime] = useState(0);
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();

    // Start the timer when the game begins and finish when all of the matches have been made
    useEffect(() => {
        let interval = null;
        if (correctMatches !== gridSize) {
            interval = setInterval(() => {
                setTime(time => time + 1 )
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [correctMatches, gridSize]);


    const handleSelection = (e) => {
        // Add clicks to variables
        if (!first) {
            e.target.classList.add('active');
            setFirst(e.target.dataset.id);
        } else if (!second) {
            e.target.classList.add('active');
            setSecond(e.target.dataset.id);
            setMoves(prevVal => prevVal + 1);
        } else {
            document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
            setFirst(e.target.dataset.id);
            setSecond(undefined);
        }
    }   

    useEffect(() => {
        if((first && second) && (first === second)) {
            confirmMatch(first);
            setCorrectMatches(prevVal => prevVal + 1);
        } else {
            
        }
    }, [first, second, setCorrectMatches])

    

    return (
        <div>
            <Menu setMoves={setMoves} setGameData={setGameData} setCorrectMatches={setCorrectMatches} setFirst={setFirst} setSecond={setSecond} setGameStatus={setGameStatus} gridSize={gridSize}/>
            <div className={`grid grid-${gridSize}`}>
            {gameData.map((item, index) => 
              <GridItem item={item} mode={mode} key={index} handleSelection={handleSelection}/>
            )}
            </div>
            {correctMatches === gridSize && <FinishModal moves={moves} setGameStatus={setGameStatus} restartGame={restartGame} time={time} setCorrectMatches={setCorrectMatches} setMoves={setMoves}/>}
        </div>
    )
}
