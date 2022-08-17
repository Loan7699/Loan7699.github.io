import { BiDotsHorizontalRounded } from "react-icons/bi"

import PopupHome from "../../../popup/PopupHome";

import { useState } from 'react'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex items-center justify-between py-3.5 px-4">
            <div className="flex items-center">
                <img src="https://cinematone.info/public/starring_3/220318220339_Park-Hae-soo_YlZtz.jpg" alt="avatar" className="rounded-full h-8 w-8 flex cursor-pointer" />
                <p className="font-semibold text-sm ml-3 cursor-pointer">haesoopark_official</p>
            </div>

            <button onClick={togglePopup}>
                <BiDotsHorizontalRounded className="w-6 h-6 cursor-pointer" />
            </button>

            {isOpen && <PopupHome
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default Header;