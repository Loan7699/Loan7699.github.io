import { useEffect, useState } from 'react';
// dùng khi muốn thực hiện các 'side effect' (nói đến 1 chương trình phần mềm khi có 1 tác động xảy ra dẫn đến dữ liệu ctrinh thay đổi)
// callback luôn luôn được gọi sau khi Component mounted

// Ba TH dùng với useEffect
// 1. useEffect(callback)
// 2. useEffect(callback, [])
// 3. useEffect(callback, [deps])

// Review:
// 1. Events: add / remove event listener
// 2. Observer pattern: Subcribe / unsubcribe
// 3. Closure
// 4. Timers: setInterval, setTimeout, clearInterval, clearTimeout
// 5. useState
// 6. Mounted / unmounted
// 7. ===
// 8. call API

// useEffect
// 1. Update DOM
// 2. Call API
// 3. Listen DOM events: Scroll, Resize
// 4. Cleanup: Remove listener / Unsubcribe; Clear timer

// callback luôn luôn được gọi sau khi Component mounted
// cleanup function luôn được gọi trước khi Component unmounted
// cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
// mỗi lần bấm toggle => Content được mounted vào App => in ra 'Mounted'
/*
function Content() {

    useEffect(() =>
        console.log('Mounted'))
        
    return (
        <div>
            <h1>Phương Loan</h1>
        </div>
    )
}
*/

// 1. useEffect(callback)
// - Callback được gọi lại mỗi khi Component re-render
// - Callback được gọi lại sau khi Component thêm element vào DOM
// mỗi lần change value ô input => state thay đổi => component re-render => in ra 'Mounted' cùng giá trị sau khi thay đổi của title
/*
function Content() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        console.log("Mounted", title);
    })

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}
*/

// Callback được gọi lại sau khi Component thêm element vào DOM => in 'Render' trước 'Mounted'
/*
function Content() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        console.log('Mounted');
    })

    return (
        <div>
            <input
                value={title}
                onChange={(e) => (e.target.value)}
            />
            {console.log("Render")}
        </div>
    )
}
*/

// Ví dụ TH useEffect(callback): update DOM
/*
function Content() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        document.title = title
    })

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}
*/

// 2. useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi Component mounted, ko được gọi mỗi khi Component re-render
/*
function Content() {
    const [posts, setPosts] = useState([]);

    // nếu ko sử dụng deps, mỗi khi setPosts => re-render => gọi api => gửi request nhiều lần. Vì vậy cần sử dụng deps = [] => gọi api 1 lần
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res => res.json())
        .then (posts => {
            setPosts(posts);
        })
    }, [])

    return (
        <div> 
                <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}           
                </ul>
        </div>
    )
}
*/

// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi: so sánh bằng toán tử ===
// gọi call api lấy ra các DL khác nhau

const tabs = ['posts', 'albums', 'todos'];

function Content() {
    const [title, setTitle] = useState('');
    const [infos, setInfos] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(infos => {
                setInfos(infos)
            })
    }, [type])

    return (
        <div>
            {tabs.map(tab =>
                <button
                    style={type === tab ? {
                        color:"#fff", 
                        backgroundColor:"#333"}
                        : {}}
                    key={tab}
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
                {infos.map(info =>
                    <li key={info.id}>{info.title}</li>
                )}
            </ul>
               
        </div>
    )
}

export default Content;