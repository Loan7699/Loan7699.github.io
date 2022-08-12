import { SET_USERNAME, ADD_USERNAME, REMOVE_USERNAME } from './type.js'

export const setUser = payload => {
  return {
    type: SET_USERNAME,
    payload,
  }
}
export const addUser = payload => { // payload: đối số hàm addUser nhận vào
  return {
    type: ADD_USERNAME,
    payload, // nhận vào đối số gì thì trả ra đó
  }
}
export const removeUser = payload => {
  return {
    type: REMOVE_USERNAME,
    payload,
  }
}

