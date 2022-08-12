import { useState, useEffect, useRef } from 'react'

/*
// ví dụ chưa dùng useRef => nhấn Stop ko dừng => giải pháp: đưa let timerId ra ngoài func App
function App() {
  const [count, setCount] = useState(60)

  let timerId

  // khi count chưa giảm xuống 59, nhấn start => start 1, nhấn stop => stop 1 vì khi count chưa thay đổi giá trị => hàm chưa re-render nên cùng là timerId ban đầu
  // khi count bđ thay đổi giá trị => mỗi lần re-render tạo ra 1 hàm có phạm vi khác nên sau khi bấm stop => tạo ra timerId khác không phải timerId cũ nên ko dừng được và timerId là undefined
  const handleStart = () => {
    timerId = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
    console.log('start', timerId);
  }

  const handleStop = () => {
    clearInterval(timerId)
    console.log('stop', timerId);
  }

  return (
    <div className="App" style={{padding: 50}}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
*/

// useRef:
// - là 1 hàm nhận đối số là initial value, chỉ sử dụng khi Component Mounted
// - return ra 1 obj có key là 'current'

// lưu các giá trị ra 1 tham chiếu bên ngoài
/*
function App() {
  const [count, setCount] = useState(60)

  const timerId = useRef()
  
  const handleStart = () => {
   timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  return (
    <div style={{padding: 50}}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )

}
*/


// lưu lại giá trị trước đó của 1 state
/*
function App () {
  const [count, setCount] = useState(60)

  const timerId = useRef()
  const prevCount = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  console.log(prevCount.current, count);
  // lần đầu: (60, 60) => khi App bđ chạy, Component Mounted => callback được gọi => prevCount.current=60
  // sau khi bấm start => count thay đổi gtri => callback chạy sau khi re-render nhưng đã lưu gtri trước đó => in ra (60,59)
  return (
    <div style={{padding: 50}}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
*/


// Lưu 1 DOM element
function App () {
  const [count, setCount] = useState(60)

  const timerId = useRef()
  const h1Ref = useRef()

  useEffect(() => {
    // lấy ra tọa độ của DOM element
    const rect = h1Ref.current.getBoundingClientRect()
    console.log(rect);
  })

  const handleStart = () => {
    setInterval(() => {
      timerId.current = setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  return (
    <div style={{padding: 50}}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default App;
