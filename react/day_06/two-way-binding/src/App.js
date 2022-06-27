import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Two-way binding: thay đổi 1 chiều, chiều còn lại cũng thay đổi theo


// 1. one-way-binding: thay đổi 1 chiều, chiều còn lại ko thay đổi theo
// ví dụ: khi nhập vào input 1 value => đưa vào setName => name thay đổi theo value, sau đó có 1 button khi click thay đổi setName thành 1 giá trị khác nhưng giao diện value input vẫn là gtri ban đầu
// function App() {

//   const [name, setName] = useState('');
//   console.log(name);

//   return (
//     <div className="App">
//       <input onChange={(e) => setName(e.target.value)}/> {/* ban đầu nhập 'Phương Loan' vào input => in ra nam = Phương Loan*/}
//       <button onClick={() => setName("Nguyễn Văn B")}>Change</button> {/* thay đổi in ra name = Nguyễn Văn B nhưng giao diện ô input vẫn là Phương Loan */}
//     </div>
//   );
// }

// export default App;


// 2. Two-way binding
// chuyển ví dụ 1 thành ràng buộc 2 chiều: đưa name vào value của input value={name}
/*
function App() {

  const [name, setName] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setName("Nguyễn Văn B")}>Change name</button>
    </div>
  )
}
export default App;
*/

// ví dụ Form gồm name và email => bấm resgister lấy ra thông tin ô input
/*
function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    console.log({
      name,
      email,
    });
  }

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}
export default App;
*/

const courses = [
  {
    id: 1,
    name: "Javascript"
  },

  {
    id: 2,
    name: "ReactJs"
  },

  {
    id: 3,
    name: "HTML, CSS cơ bản"
  },
]


// ví dụ về input radio: cho 1 mảng các khóa học và có id khác nhau => chỉ chọn được 1 khóa học
/*
function App() {

  const [checked, setChecked] = useState(2); // checked mặc định khóa học có id = 2

  const handleSubmit = () => {
    console.log({id: checked}); // mỗi lần bấm gửi => lấy id qua biến checked
  }

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type='radio'
            checked={checked === course.id} 
            //kiểm tra đk để chọn
            onChange={() => setChecked(course.id)}
            //thay đổi ô input => thay đổi biến checked theo id khóa học
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}
export default App;
*/ 

// Ví dụ: input checkbox cho phép chọn nhiều khóa học, khi kích lại vào input thì bỏ chọn

function App() {

  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => { // truyền id vào làm tham số
    setChecked(prev => {
      const isCheck = checked.includes(id); // kiểm tra mảng checked chứa id ko
      if (isCheck) { // nếu chứa id => uncheck
        return checked.filter(item => item !== id); // dùng filter lặp qua mảng checked => trả về mảng mới gồm các phần tử có id khác id đã nhận vào
  
      } else {
        return [...prev, id]; // thêm id vào mảng checked trước đó
      }
    })
  }

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <input          
            checked={checked.includes(course.id)}
            type='checkbox'
            onChange={() => handleCheck(course.id)} // lấy giá trị id khi change input
          />{course.name}
        </div>
      ))}

      <button>Register</button>
    </div>
  )
}

export default App;
