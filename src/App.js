import './App.css';
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <Game/>
      <div className='instructions'></div>
      <div className='scoreboard'></div>
    </div>
  );
}

export default App;
