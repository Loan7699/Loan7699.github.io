import { useState } from 'react'
import Content from './Content.js'

function App() {
  const [count, setCount] = useState(0)
  
  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Content />
      <h1>{count}</h1>
      <button
        onClick={handleIncrease}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
