import { useReducer } from 'react'

// 1. initial state: 
// 2. actions
// 3. reducer: 1 hàm nhận state hiện tại và 1 action => quyết định trả ra state
// 4. dispatch: kích hoạt action

/*
const initState = {count: 0}

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  console.log('reducer running...');

  switch (action) {
    case UP_ACTION:
      return {
        ...state,
        count: state.count + 1
      }
    case DOWN_ACTION:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  // nhận reducer và initState
  // useReducer: lần đầu Component chạy => chạy reducer chưa được gọi, nhận ra trị khởi tạo và return 1 array gồm state, dispatch 

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>UP</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
    </div>
  );
}
*/


// init State
const initState = {
  username: '',
  users: []
}

// action
const SET_USERNAME = 'SET_USERNAME'
const ADD_USERNAME = 'ADD_USERNAME'
const REMOVE_USERNAME = 'REMOVE_USERNAME'

const setUser = payload => {
  return {
    type: REMOVE_USERNAME,
    payload // nhận đối số là gì => return value đó
  }
}

const addUser = payload => {
  return {
    type: ADD_USERNAME,
    payload,
  }
}

const removeUser = payload => {
  return {
    type: REMOVE_USERNAME, // type: 'REMOVE_USERNAME'
    payload, // payload: 2,
  }
}

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload
      }

    case ADD_USERNAME:
      return {
        ...state,
        // username: '',
        users: [...state.users, action.payload]
      }
    case REMOVE_USERNAME:
      const newUsers = [...state.users]
      newUsers.splice(action.payload, 1)
      return {
        ...state,
        users: newUsers,
      }
  
    default:
      break;
  }
}

// dispatch
function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  const { username, users } = state
  console.log('state', state);

  const handleSubmit = () => {
    dispatch(addUser(username))
  }
  
  return (
    <div style={{padding: 20}}>
      <h3 style={{ height: "50px" }}>List User</h3>
      <input
        value={username}
        placeholder='Enter todo...'
        onChange={e => { dispatch(setUser(e.target.value)) }}
      />
      <button onClick={handleSubmit}>AddUser</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <span onClick={() => dispatch(removeUser(index))}>&times;</span> {/*dispatch(type: 'REMOVE_USERNAME', payload: 2) => obj truyền cho reducer => nhận đối số là state và obj trên*/}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
