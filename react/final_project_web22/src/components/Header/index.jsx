import { Routes, Route, Link } from 'react-router-dom';

// import icon
import { HiHome } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare, FiHeart, FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";

function Header() {

    return (
        <div className="flex justify-evenly items-center py-2.5 bg-[rgb(250, 250, 250)]">

            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png' className='w-28' />

            <div className='bg-slate-200'>
                <input
                    type='text'
                    placeholder="Search"
                />
                {/* <div className='flex justify-center items-center text-slate-400'>
                    <FiSearch />
                    <span>Search</span>
                </div> */}
            </div>

            <ul className='flex text-[#262626]'>
                <li>
                    <Link to="/">
                        <HiHome className='w-6 h-6 ml-[22px]' />
                    </Link>
                </li>
                <li>
                    <Link to="/chat">
                        <RiMessengerLine className='w-6 h-6 ml-[22px]' />
                    </Link>
                </li>
                <li>
                    <FiPlusSquare className='w-6 h-6 ml-[22px]' />
                </li>
                <li>
                    <Link to="/explore">
                        <MdOutlineExplore className='w-6 h-6 ml-[22px]' />
                    </Link>
                </li>
                <li>
                    <FiHeart className='w-6 h-6 ml-[22px]' />
                </li>
                <li>
                    <Link to="/about">
                        <div>
                            <img src='https://i.pinimg.com/originals/a0/1d/55/a01d5552778440f9333bbffe57475ce5.jpg' alt='Chanyeol' className='w-6 h-6 rounded-full ml-[22px]'></img>
                        </div>
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default Header;