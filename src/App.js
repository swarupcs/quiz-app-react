import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';

// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
        <h1>Quiz App</h1>
        {gameState === "menu" && <Menu/> }
        
    </div>
  );
}

export default App;
