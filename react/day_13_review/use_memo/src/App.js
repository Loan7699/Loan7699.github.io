import React, { useState, useMemo} from 'react';

// memo: HOC => dùng để tránh Component bị re-render trong 1 số TH ko cần thiết
// useMemo: HOOK => tránh thực hiện lại 1 logic ko cần thiết

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: Number(price)
    }])
  }

  // mỗi lần change input => re-render => tính toán lại total nhưng chỉ cần tính toán lại khi ấn add
  const totalMemo = useMemo(() => {
    const total = products.reduce((result, item) => {

      console.log('Tính toán lại...')
  
      return result + item.price;
    }, 0)

    return total;

  }, [products]) // khi deps thay đổi => mới tính toán lại logic

  return (
    <div className='App' style={{padding: 50}}>
      <h1>Tính tổng đơn hàng</h1>
      <input
        value={name}
        placeholder='Enter name'
        onChange={(e) => setName(e.target.value)}
        style={{marginRight: 20}}
      />

      <br />

      <input
        value={price}
        placeholder='Enter price'
        onChange={(e) => setPrice(e.target.value)}
        style={{marginRight: 20}}
      />

      <br />
      <button onClick={handleSubmit} style={{marginTop: 20}}>Add</button>
      <br />

      <h2>Total: {totalMemo}</h2>

      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
