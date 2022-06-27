import { useState, useEffect } from "react";

// Ví dụ 1: addEventListener: scroll
const tabs = ['posts', 'albums', 'todos'];

function Content() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('posts');
    const [contents, setContents] = useState([]);
    const [showGoToTop, setShowGoToTop] = useState(false)

    // useEffect cập nhật lại title
    useEffect(() => {
        document.title = title
    })

    // useEffect gọi api mỗi khi thay đổi type
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(content => {
                setContents(content)
            })
    }, [type])

    // useEffect khi cuộn trang
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false)
            }

            // setShowGoToTop((window.scrollY >= 200)) // thay thế if-else do câu lệnh điều kiện trả về boolean
        }

        window.addEventListener('scroll', handleScroll)

        // clean up function luôn được gọi lại trước khi Component unmounted
        // callback của useEffect return ra 1 hàm để xử lý
        return () => {
            window.removeEventListener('scroll', handleScroll)
            // xóa sự kiện vì mỗi khi unmounted sự kiện ko bị unmounted, nhưng khi mounted lại sẽ gọi sự kiện mới chứ ko phải sự kiện trước đó gây ra rò rỉ bộ nhớ
        }
    }, [])

    return (
        <div>
            {tabs.map((tab) =>
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    }
                        : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            )}

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <ul>
                {contents.map((content) =>
                    <li key={content.title}>{content.title}</li>
                )}
            </ul>

            {showGoToTop &&
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >Go To Top
                </button>}
        </div>
    )
}

// Ví dụ 2: resize (hiện kích thước chiều ngang cửa sổ trình duyệt ra ngoài màn hình)

/*
function Content () {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth) // set width khi resize màn hình
    }

    window.addEventListener('resize', handleResize) // thêm DOM event

    return (
        <h1>{width}</h1>
    )
}
*/
export default Content;
