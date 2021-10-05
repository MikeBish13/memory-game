import './styles/App.css';
import StartScreen from './components/StartScreen';
import Grid from './components/Grid';
import { useStore } from './Store';


function App() {
  const {gameStatus} = useStore();
   
  return (
    <div className="App">
      {gameStatus === 'start' && <StartScreen />}
      {gameStatus === 'game' && <Grid />}
    </div>
  );
}

export default App;
