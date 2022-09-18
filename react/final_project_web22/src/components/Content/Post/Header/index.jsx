import { BiDotsHorizontalRounded } from "react-icons/bi"

import { Link } from 'react-router-dom';

import PopupHome from "../../../popup/PopupHome";
import PopupUnfollow from "../../../popup/PopupUnfollow";

import { useState } from 'react'

function Header({ accountName, id }) {

    const [isOpen, setIsOpen] = useState(false);

    // open/close Popup để tùy chọn bài post
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    return (
        
        <div className="flex items-center justify-between py-3.5 px-4">
            <div className="">
                <Link to="/detail" className="flex items-center" onClick={id}>
                    <img src={`homepage/${id}.jpg`} alt="avatar" className="rounded-full h-8 w-8 flex cursor-pointer" />
                    <p className="font-semibold text-sm ml-3 cursor-pointer">{accountName}</p>
                </Link>
            </div>

            <button onClick={togglePopup}>
                <BiDotsHorizontalRounded className="w-6 h-6 cursor-pointer" />
            </button>

            {isOpen && <PopupHome
                handleClose={togglePopup}
                id={id}
            />}
        </div>
    )
}

export default Header;