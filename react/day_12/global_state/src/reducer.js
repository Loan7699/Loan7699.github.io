import { SET_USERNAME, ADD_USERNAME, REMOVE_USERNAME } from './type.jsx'

export const initState = {
  username: '',
  users: [],
}

const reducerUser = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    case ADD_USERNAME:
      return {
        ...state,
        username: '',
        users: [...state.users, action.payload],
      }
    case REMOVE_USERNAME:
      const newUsers = [...state.users];
      newUsers.splice(action.payload, 1);
      return {
        ...state,
        users: newUsers,
      }
  
    default:
      throw new Error('Action invalid');
  }
}

export default reducerUser;
