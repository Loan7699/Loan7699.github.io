import { BiUserCircle, BiBookmark } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

import { Link } from 'react-router-dom';

function SelectionAccount() {
    return (
        <div>
            <Link to="/about">
                <div className='flex justify-start py-2 px-4 items-center'>
                    <BiUserCircle className="w-4 h-4 mr-3" />
                    <p>Profile</p>
                </div>
            </Link>

            <div className='flex justify-start py-2 px-4 items-center'>
                <BiBookmark className="w-4 h-4 mr-3" />
                <p>Saved</p>
            </div>

            <div className='flex justify-start py-2 px-4 items-center'>
                <AiOutlineSetting className="w-4 h-4 mr-3" />
                <p>Setting</p>
            </div>

            <div className='flex justify-start py-2 px-4 items-center'>
                <HiOutlineSwitchHorizontal className="w-4 h-4 mr-3" />
                <p>Switch Accounts</p>
            </div>

            <div className='py-2 px-4 text-left'>
                Log out
            </div>
        </div>
    )
}

export default SelectionAccount;