import { useState } from 'react';
import Content from './Content.js'

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div>
      <button
        onClick={() => setShow(prev => !prev)}
      >
        Toggle
      </button>

      {show && <Content />}
    </div>
  )
}

export default App;
