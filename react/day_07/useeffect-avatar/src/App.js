import { useState } from 'react'
import Content from './Content.js';

function App() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(prev => !prev)
  }

  return (
    <div className="App" style={{padding: 50}}>
      <button
        onClick={handleClick}
      >
        Toggle
      </button>

      {show && <Content />}
    </div>
  );
}

export default App;
