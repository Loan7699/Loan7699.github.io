import { useState } from 'react'
/* useState hook
- Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)- Cách dùng:
import {useState} from "react"

function Component() {
  const [state, setState] = useState(initState)
  ...
}

trong đó initState: giá trị khởi tạo, chỉ dùng 1 lần trong lần đầu
return ra 1 mảng gồm 2 phần tử
- state: giá trị biến cập nhật. lần đầu state = initState
- setState: hàm cập nhật lại giá trị state
*/

/* Lưu ý
- Component được re-render sau khi setState()
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới
*/

/*
// Ví dụ 1: ứng dụng đếm số, bấm nút số tăng
import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(1);

  // Component được re-render sau khi setState()
  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
*/

/*
// ví dụ 2: Set state với callback?
import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); => nhấn increase mỗi lần cũng chỉ tăng lên 1 do counter = 1
    
    // truyền callback vào setState() lưu giá trị hiện tại prevState

    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    // mỗi lần bấm increase tăng lên 3 do mỗi lần gọi hàm setCounter trả về giá trị hiện tại mới sau khi tăng
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
*/

/*
// ví dụ 3: Initial state với callback?

const orders = [100, 200, 300];

function App() {

  // tính tổng total và truyền biến total vào giá trị khởi tạo, khi đó mỗi lần gọi hàm App đều tính lại total
  // const total = orders.reduce((total, cur) => total + cur)

  // const [counter, setCounter] = useState(total);

  // vì vậy truyền callback vào trong initState
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);

    console.log(total);
    return total; // initState không lấy function làm giá trị mà lấy giá trị được return làm initState => chỉ cần tính toán total 1 lần
  })

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
*/


// Ví dụ 4: Set state là thay thế state bằng giá trị mới ko phải là thêm giá trị. Ví dụ khi thêm key và value cho 1 obj

function App() {

  const [info, setCounter] = useState({
    name: " Phuong Loan",
    age: 23,
    address: "Ha Nam"
  });

  const handleUpdateInfo = () => {
    setCounter({
      ...info,
      hobby:"Listen to music", // nếu chỉ có code này sẽ đưa ra 1 obj chỉ gồm {hobby: "Listen to music"}, các key trước đó không còn , vì vậy cần dùng spread dải info ban đầu

      // hoặc viết dưới dạng callback như sau
      //  setCounter(prev => (
      //   {
      //     ...prev,
      //    hobby:"Listen to music",
      //  }
      // ))
      
    });
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdateInfo}>Increase</button>
    </div>
  );
}
export default App;

// ví dụ đổi màu box khi nhấn
