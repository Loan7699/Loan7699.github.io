import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import RenderGame from './components/StartPage';
import StartGame from './components/StartGame';

function App() {

  const [start, setStart] = useState(false);

  const handleStarted = () => {
    setStart(prev => !prev);
    console.log('Loan');
  }

  return (
    <div className="App">
      <RenderGame />
      {/* {
        start
          ?
          <RenderGame handleStart={handleStarted}/>
          :
          <StartGame  />
      } */}

    </div>
  );
}

export default App;

