import { useCallback, useState } from 'react'
import Content from './Content.js'

// useCallback: tránh tạo ra function mới không cần thiết
// Reference types: mỗi khi tạo ra 1 hàm mới sẽ lưu hàm vào bộ nhớ tạo ra 1 tham chiếu mới

function App() {
  const [count, setCount] = useState(0)

  // mỗi lần re-render gọi lại hàm app => tạo ra 1 arrow func mới với 1 tham chiếu mới => so sánh === trả về false nên vẫn bị re-render lại Content mặc dù có dùng memo
  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  // useCallback((), [deps])
  // Cách hoạt động: lần đầu App được mounted => useCallback nhận được callback tạo ra hàm, nhận tham chiếu và lưu ra ngoài phạm vi hàm app => return lại tham chiếu đó cho biến handleIncrease. Khi render nếu [deps]=[] thì nó sẽ trả lại tham chiếu trước đó chứ ko tạo ra hàm mới => tham chiếu ko đổi => ko re-render
  // nếu có deps thay đổi sau mỗi lần re-render => tạo tham chiếu mới => re-render

  // muốn sử dụng usecallback phải sử dụng memo cho Component con
  return (
    <div className="App">
      <Content
        onIncrease={handleIncrease}
      />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
