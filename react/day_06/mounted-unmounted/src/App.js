import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './Content';

// Mounted (gắn vào) && Unmounted (gỡ ra)
// quá trình gắn React element (Virtual DOM) của một component vào Real DOM để thể hiện kết quả lên trình duyệt.

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      { show && <Content /> } {/*bấm toggle nếu show=true render ra Content, ngược lại thì ko */}
      {/*Content được mounted vào App, sau đó mới gọi hàm Content render */}
    </div>
  );
}

export default App;
