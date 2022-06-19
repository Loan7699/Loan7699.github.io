import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import RenderGame from './components/startPage';

function App() {
    return (
      <div className="App">
        <RenderGame/>
      </div>
    );
}

export default App;
