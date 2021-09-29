import './styles/App.css';
import { useState } from 'react';
import {ReactComponent as Logo} from './images/logo.svg';
import StartScreen from './components/StartScreen';
import Grid from './components/Grid';


function App() {
  const [gameStatus, setGameStatus] = useState('start');
  const [mode, setMode] = useState('numbers');
  const [gameData, setGameData] = useState([]);
  const [gridSize, setGridSize] = useState(8);
  const [moves, setMoves] = useState(0);
  const [correctMatches, setCorrectMatches] = useState(0);
   
  return (
    <div className="App">
      <Logo />
      {gameStatus === 'start' && <StartScreen setGameStatus={setGameStatus} setMode={setMode} setGridSize={setGridSize} gridSize={gridSize} setGameData={setGameData} setMoves={setMoves} setCorrectMatches={setCorrectMatches} />}
      {gameStatus === 'game' && <Grid mode={mode} setMoves={setMoves} gridSize={gridSize} gameData={gameData} setGameData={setGameData} correctMatches={correctMatches} setCorrectMatches={setCorrectMatches} moves={moves} setGameStatus={setGameStatus} gameStatus={gameStatus}/>}
    </div>
  );
}

export default App;
