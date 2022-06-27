
import { useState } from "react";
import { useEffect } from "react";

// Event
function Content(props) {

    const [isShowBtnTop, setIsShowBtnTop] = useEffect()

    const [count, setCount] = useState(0)
    useEffect(() => {

        const handleScroll = () => {
            const heightScroll = window.scrollY; // lấy chiều cao cuộn
            console.log("scrolling", heightScroll);

            // if (heightScroll > 400) {
            //     setIsShowBtnTop(true)
            // } else {
            //     setIsShowBtnTop(false)
            // };

            setIsShowBtnTop(heightScroll > 400)
        }
        window.addEventListener('scroll', handleScroll);

        // clean uo
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [count])
    
    const buttons = ['posts', 'comments','todos'];
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={setCount(prev => prev + 1)}></button>
            {}
            <button style={{position: "fixed", bottom: 20, right: 20}}>
                Go to top
            </button>
        </div>
    )
}

export default Content;