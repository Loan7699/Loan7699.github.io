import { useState, useEffect } from 'react'

// Cleanup function luôn được gọi trước khi callback được gọi (trừ lần Mounted)
/*
function Content () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`re-render ${count}`); // truyền deps= count => mỗi lần bấm click me => count thay đổi => re-render

        return () => {
            console.log(`clean up ${count}`); // lần đầu bấm toggle in ra 're-render' do callback được gọi khi Com Mounted
            // sau đó bấm click me => in ra "clean up" trước 're-render'
            // "clean up 1", "re-render 2" do clean up được gọi trước callback

        }
    }, [count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
            >
                Click me
            </button>
        </div>
    )
}
*/

// ví dụ cleanup fucntion: app chọn ảnh đại diện, khi chọn được ảnh thì hiện thị xem trước được
function Content() {
    const [avatar, setAvatar] = useState()

    // xóa link ảnh đã lưu trong bộ nhớ khi chọn ảnh khác
    useEffect(() => {
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview) // do avatar thay đổi chạy cleanup trước, khi đó avatar đang là undefined nên cần phải kiểm tra điều kiện có avatar mới cleanupz
        }
    }, [avatar])
    
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        
        file.preview = URL.createObjectURL(file)

        console.log(URL.createObjectURL(file));

        setAvatar(file)

        // chọn 2 lần 1 ảnh
        e.target.value = null
    }

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />

            {avatar && 
                <img 
                    src={avatar.preview} 
                    alt="cover photo"
                    width="50%"
                    />
            }
        </div>
    )
}

export default Content;