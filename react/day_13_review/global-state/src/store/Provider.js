import { useReducer } from "react";
import Context from "./Context";
import reducerUser, { initState } from "./reducer";

function Provider({ children }) {

  const [state, dispatch] = useReducer(reducerUser, initState);
  // useReducer nhận vào 2 đối số:
  // - reducerUser là 1 hàm xử lý switch-case
  // - initState khởi tạo file reducer
  // useReducer trả lại
  // - state đã được cập nhật
  // - dispatch: 1 func gọi vào reducerUser => nhận vào action.type
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
