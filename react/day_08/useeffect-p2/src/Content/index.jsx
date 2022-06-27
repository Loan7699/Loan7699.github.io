import { useEffect, useState } from 'react';

// setInterval
function Content() {

    const  [countdown, setCountdown] = useState(60);

    useEffect(() => {
        // const setIntervalTimerId = setInterval(() => {
        //     setCountdown(prev => prev - 1);
        // }, 1000)

        // return () => { // hàm clean up: chạy trước khi callback được gọi
        //     clearInterval(setIntervalTimerId)
        // }

        if (countdown <= 0) {
            return;
        } // dừng chạy

        const TimeOutTimerId = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000)

        return() => {
            clearInterval(TimeOutTimerId)
        }
    }, [countdown])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content;