import { useEffect, useState } from "react";

// dùng đếm ngược thời gian với setInterval trong useEffect((callback),[])
/*
function Content() {
    const [countdown, setCountdown] = useState(20)

    // nếu để setInterval ngoài useEffect, mỗi lần render lại Content => gọi setInterval => có nhiều hàm chạy ngược chồng lên nhau

    useEffect(() => { 
        
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => {
                clearInterval(timerId)
        }
    }, [])

    return (
        <h1>{countdown}</h1>
    )
}
*/

// đếm ngược thời gian với setTimeout() dùng trong useEffect((callback),[])
function Content() {
    const [countdown, setCountdown] = useState(20)

    useEffect(() => {

        // chạy đến 0 thì dừng
        if (countdown === 0) {
            return;
        }

        const timerId = setTimeout(() => {
            setCountdown(countdown - 1)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [countdown])

    return (
        <h1>{countdown}</h1>
    )
}

export default Content;