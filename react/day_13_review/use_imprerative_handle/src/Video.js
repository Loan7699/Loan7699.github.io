import video1 from './video/download.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'

function Video (props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({ // useImperativeHandle 1 hàm nhận 2 đối số là ref và 1 hàm trả về 1 obj gồm 2 method play và pause
        play() {
            videoRef.current.play() // enhance obj literal => play(): function() { return videoRef.current.play()}
        },
        pause() {
            videoRef.current.pause()
        }
    })
    )

    return (
        <video
            ref={videoRef}
            src={video1}
            width={400}
            height={300}
        />
    )
}

export default forwardRef(Video)