import { useState, useRef, useEffect } from 'react'

// let timeId // useRef
// useRef
// - là 1 hàm nhận đối số là initial value, chỉ sử dụng trong lần đầu Com Mounted
// - hàm useRef return ra 1 obj có key = current

/*
function App() {
  const [count, setCount] = useState(60)

  // const ref = useRef(99)
  // console.log(ref.current); // lấy ra giá trị
  // set lại giá trị: ref.current = 100

  const timerId = useRef()

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)

    console.log('start', timerId.current);
  }

  const handleStop = () => {
    clearInterval(timerId.current)

    console.log('stop', timerId.current);
  }

  // bấm start, sau đó stop luôn => dừng (in ra start 1, stop 1) do timeId ghi ngoài phạm vi, Com chạy lần đầu nên chưa re-render => gọi hàm App => tạo phạm vi độc lập của hàm => start sửa timeId = 1, stop do Com chưa re-reder lại nên vẫn là phạm vi ban đầu
  // bấm start => đợi re-render => mỗi hàm 1 gọi tạo ra 1 phạm vi mới ko lquan đến phạm vi trước đó => bấm stop undefined do tạo ra phạm vi hàm mới => timeId khác trước

  // useRef
  // - tạo được các giá trị ra 1 phạm vi bên ngoài
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
*/

// lấy ra giá trị hiện tại và trước đó của state
// useRef dùng để lưu DOM ele
// ví dụ lấy ra h1Ref

function App () {
  const [count, setCount] = useState(60)

  const timeId = useRef()

  const prevCount = useRef()

  const h1Ref = useRef()

  useEffect(() => {
    prevCount.current = count
  }, count)

  useEffect(() => {
    console.log(h1Ref.current);
  })

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timeId.current)
  }

  console.log(count, prevCount.current); // 58, 59; 44, 45
  // ban đầu: prevCount.current = 60 do callback luôn được gọi 1 lần khi Com Mounted
  // setCount => count=59 => Callback useEffect nhận ra trị nhưng chưa chạy, sau khi re-render => prevCount.current = 59; count=58

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
export default App;
