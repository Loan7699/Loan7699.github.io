import { useCallback, useState, useMemo, useRef } from 'react';

function Content () {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
            setProducts([...products, {
                    name,
                    price: Number(price), // trả về 1 mảng gồm sp ban đầu và 1 obj gồm tên và giá vừa nhập
                }])
            setName('')
            setPrice('') // xóa valude tại input sau khi submit

            nameRef.current.focus() // focus lại input sau khi submit
    }

    // Khi input change => re-render => tính toán lại total => ko cần thiết => dùng useMemo
    // useMemo((callback), [])
    // []: thực hiện tính toán 1 lần và trả về kết quả tính toán lần trc
    // [deps]: ko đổi => trả về kqua trước đó; thay đổi => tính toán lại
    const total = useMemo (() => {
        const result = products.reduce((result, product) => {
            console.log("Tính toán lại...");
                return result + product.price;
            }, 0)

        return result;
    }, [products])

    return (
        <div>
            <input
                ref={nameRef} // input được mounted vào DOM sẽ set lại current của nameRef
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => {
                    <li key={index}>Loan</li>
                })

                }
            </ul>
        </div>
    )
}

export default Content;