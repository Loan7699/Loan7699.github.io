import { useRef, useEffect } from 'react'
import Video from './Video.js';

// useImprerativeHandle: tùy chỉnh được ref của 1 func Component
function App() {
  const videoRef = useRef()

  useEffect (() => {
    console.log(videoRef.current);
  })

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className="App">
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
