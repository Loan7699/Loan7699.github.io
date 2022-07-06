import logo from './logo.svg';
import './App.css';

import { startTransition, useReducer, useState, useImperativeHandle } from 'react'


// Ví dụ 1: tăng giảm số
// initial state
/*
const initState = { count: 0 }

// action
const INCREASE = 'INCREASE_ACTION'
const DECREASE = 'DECREASE_ACTION'

// reducer
const countReducer = (state, action) => {  // state là 1 obj chứa các state đã khai báo
  // action là 1 obj nhận từ dispatch
  switch (action.type) {
    case INCREASE:
      return {
        ...state, // bảo toàn state ban đầu
        count: state.count + 1
      }

      case DECREASE:
        return {
          ...state, // bảo toàn state ban đầu
          count: state.count - 1
        }

      default:
        break;
  }
}

// 

function App() {
  const [state, dispatch] = useReducer(countReducer, initState)

  const handleClickIncrease = () => {
    dispatch({type: INCREASE}) // dispatch nhận 1 obj
  }

  const handleClickDecrease = () => {
    dispatch({type: DECREASE}) // dispatch nhận 1 obj
  }

  return (
    <div className="App">
      <h1>Hello {state.count}</h1>
      <div>
        <button onClick={handleClickIncrease}>+</button>
        <button onClick={handleClickDecrease}>-</button>
      </div>
    </div>
  );
}
*/

/*
// Ví dụ 2: 1 ô input, 1 btn thêm => thêm tên người dùng vào input cho vào 1 array

// 1. init State
const initState = {
  usename:'', // tên nhập vào ô input
  users: [], // array lưu tên nhập vào
}

// 2. action
const SET_USERNAME = 'SET_USERNAME_ACTION'
const ADD_USERNAME = 'ADD_USERNAME_ACTION'
const REMOVE_USERNAME = 'REMOVE_USERNAME_ACTION'

// function action
const setUser = payload => {
  return {
    type: SET_USERNAME,
    payload, // key trùng value
  }
}

const removeUser = payload => { // nhận vào index của mảng
  return {
    type: REMOVE_USERNAME,
    payload, // key trùng value
  }
}

// 3. reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    
  }
}


function App () {
  const [state, dispatch] = useReducer(userReducer, initState)

  const {users, username} = state;

  const handleSubmit = () => {
    dispatch(addUser(username))
    dispatch(setUser('')) // bấm add => xóa giá trị đã điền ở input
  }

  return (
    <div>
      <h3>List User</h3>
      <input
        value={username}
        placeholder='Enter name'
      />
      <butto onClick={handleSubmit}>Add</butto>
      <button>REMOVE</button>
    </div>
  )
}
*/

// // 1. Initial state (kiểu DL nguyên thủy hoặc obj)
// const initState = { count: 0 }

// // 2. actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// // 3. reducer
// const reducer = (state, action) => {
//   console.log('reducer running ...');
//   switch (action.type) {
//     case UP_ACTION:
//       return {
//         ...state, // bảo toàn obj ban đầu
//         count: state.count + 1 // cập nhật thay đổi
//       }

//     case DOWN_ACTION:
//       return {
//         ...state, // bảo toàn obj ban đầu
//         count: state.count - 1 // cập nhật thay đổi
//       }
    
//     default:
//       break;
//   }
// }

// function App () {
//   const [state, dispatch] = useReducer(reducer, initState)

//   const handleDecrease = () => {
//     dispatch({type: DOWN_ACTION})
//   }

//   const handleIncrease = () => {
//     dispatch({type: UP_ACTION})
//   }

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={handleIncrease}>+</button>
//       <button onClick={handleDecrease}>-</button>
//     </div>
//   )
// }

// useImperativeHandle: giúp tùy chỉnh được ref của 1 Component
// Ví dụ phát video


export default App;
