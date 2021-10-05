import React from 'react'
import { useEffect } from 'react';
import {useStore} from '../Store';
import FinishModal from './FinishModal';
import GridItem from './GridItem';
import { confirmMatch, displayTime, removeActiveButtons } from '../helpers/Helpers';
import Menu from './Menu';
import PlayerList from './PlayerList';


export default function Grid() {
    
    const {gridSize, gameData, increaseMoves, increaseCorrectMatches, correctMatches, increaseTime, time, moves, players, currentPlayer, nextPlayer, setPlayerScore, first, second, setFirst, setSecond} = useStore();

    // Start the timer when the game begins and finish when all of the matches have been made
    useEffect(() => {
        let interval = null;
        if (correctMatches !== gridSize) {
            interval = setInterval(() => {
                increaseTime();
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [correctMatches, gridSize, increaseTime]);


    const setNextPlayer = () => {
        nextPlayer();
    }

    const handleSelection = (e) => {
        if (!first) {
            e.target.classList.add('active');
            setFirst(e.target.dataset.id);
        } else if (!second) {
            e.target.classList.add('active');
            setSecond(e.target.dataset.id);
            increaseMoves();
            setTimeout(removeActiveButtons, 800);
            setTimeout(setNextPlayer, 800);
        } else {
            e.target.classList.add('active');
            setFirst(e.target.dataset.id);
            setSecond(undefined);
        }
    }   
 

    useEffect(() => {
        const checkMatch = () => {
            if((first && second) && (first === second)) {
                confirmMatch(first);
                increaseCorrectMatches();
                if(players.length !== 1) {
                    setPlayerScore(currentPlayer);
                }
            }
        }
        checkMatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [first, second])

    

    return (
        <>
        <Menu />
        <div className="grid-page container">
            <div className={`grid grid-${gridSize}`}>
            {gameData.map((item, index) => 
              <GridItem item={item} key={index} handleSelection={handleSelection}/>
            )}
            </div>  
            <div className="grid-bottom">
                {players.length === 1 ?
                    <div className="single-player-info">
                        <div className="player-card">
                            <p>Time</p>
                            <h2>{displayTime(time)}</h2>
                        </div>
                        <div className="player-card">
                            <p>Moves</p>
                            <h2>{moves}</h2>
                        </div>
                    </div>
                :
                <>
                <PlayerList />
                </>
                }
            </div>
            {correctMatches === gridSize && <FinishModal />}
        </div>
        </>
    )
}
