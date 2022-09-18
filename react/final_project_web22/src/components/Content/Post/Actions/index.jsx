import { FiHeart, FiSend } from "react-icons/fi"
import { FaRegComment, FaRegBookmark } from "react-icons/fa"
import { useState } from "react"

function Actions() {

    const [colorHeart, setColorHeart] = useState('black')
    const handLiked = () => {
        setColorHeart(colorHeart === 'black' ? 'red' : 'black')
    }

    return (
        <>
            <div className="flex justify-between mt-1 pt-1.5 pb-2">
                <div className="flex">
                    <div className="pr-2">
                        <FiHeart className="w-6 h-6 cursor-pointer" onClick={handLiked} style={{color: colorHeart}}/>
                    </div>
                    <div className="px-2">
                        <FaRegComment className="w-6 h-6 cursor-pointer" />
                    </div>
                    <div className="px-2">
                        <FiSend className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>

                <FaRegBookmark className="w-6 h-6 cursor-pointer" />
            </div>

            <div className="mb-2 text-left font-semibold text-sm cursor-pointer">
                <span>363,130</span>
                <span> likes</span>
            </div>

        </>
    )
}
export default Actions