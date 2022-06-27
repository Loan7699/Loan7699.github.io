import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Content from './Content.js'

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(prev => !prev)}>Toggle</button>
      {/*bấm toggle nếu show=true render ra Content, ngược lại thì ko */}
      {show && <Content />}
    </div>
  );
}

export default App;
