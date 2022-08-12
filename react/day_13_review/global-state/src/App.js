import { useStore, actions } from './store';


function App() {

  const [state, dispatch] = useStore();
  const { username, users } = state;
  console.log('state', state);

  const handleSubmit = () => {
    dispatch(actions.addUser(username));
    // dispatch(setUser(''));
  }
  return (
    <div className="App" style={{padding: 20}}>
      <h3>Techmaster xin chao.</h3>
      <input
        value={username}
        placeholder="Enter username..."
        onChange={e => {
          dispatch(actions.setUser(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <span onClick={() => dispatch(actions.removeUser(index))}>×</span>  
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;

