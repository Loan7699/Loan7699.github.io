import { BiDotsHorizontalRounded } from "react-icons/bi"

import PopupHome from "../../../popup/PopupHome";
import PopupUnfollow from "../../../popup/PopupUnfollow";

import { useState } from 'react'

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isUnfollow, setIsUnfollow] = useState(false)

    const unfollow = () => {
        setIsUnfollow(!isUnfollow)
    }

    // open/close Popup tùy chọn bài post
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex items-center justify-between py-3.5 px-4">
            <div className="flex items-center">
                <img src="/status/ava1.jpg" alt="avatar" className="rounded-full h-8 w-8 flex cursor-pointer" />
                <p className="font-semibold text-sm ml-3 cursor-pointer">haesoopark_official</p>
            </div>

            <button onClick={togglePopup}>
                <BiDotsHorizontalRounded className="w-6 h-6 cursor-pointer" />
            </button>

            {isUnfollow && <PopupUnfollow
                handleCancel={unfollow}
            />}

            {isOpen && <PopupHome
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default Header;