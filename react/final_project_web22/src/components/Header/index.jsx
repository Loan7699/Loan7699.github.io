import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// s/d Tippy
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PropperWrapper } from './Propper';

// import icon
import { HiHome } from "react-icons/hi";
import { RiMessengerLine, RiSearchLine, RiCloseFill } from "react-icons/ri";
import { FiPlusSquare, FiHeart, FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

import AccountItemResult from './Account_item_result';
import SelectionAccount from './SelectionsAccount';
import Notifications from './Notifications';

function Header() {

    const [searchResult, setSearchResult] = useState([])
    // kết quả tìm kiếm

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])

    return (
        //  fixed top-0 right-0 left-0: chưa cố định đc header
        <div className='bg-white h-16 shadow-[0_0px_1px_1px_rgba(0,0,0,0.12)] fixed top-0 left-0 right-0 z-50'>
            <div className="py-2.5 px-5 flex justify-between mx-auto items-center align-center width">
                <img src='/images/Instagram_logo.svg.png' className='w-28' />

                <Tippy className="hidden"
                    interactive // seclect kết quả
                    // kết quả tìm kiếm > 0
                    // visible={searchResult.length > 0}

                    render={(attrs) => (
                        <div className='w-[350px]' tabIndex="-1" {...attrs}>
                            <PropperWrapper>
                                <div className='flex justify-between mx-4'>
                                    <h4 className='text-[#262626] font-semibold'>Recent</h4>
                                    <button className='text-[#0095F6]'>Clear all</button>
                                </div>

                                <AccountItemResult />
                                <AccountItemResult />
                            </PropperWrapper>
                        </div>
                    )}
                >
                    <div className='lg:flex justify-center items-center bg-[#F2F3F5] rounded-lg px-4 py-1 h-9 hidden'>
                        <RiSearchLine className='text-[#8E8E8E] mr-3' />
                        <div>
                            <input
                                className='bg-[#F2F3F5] outline-none'
                                type='text'
                                placeholder="Search"

                            />
                        </div>

                        <AiOutlineHome className='text-[#8E8E8E]' />

                        
                    </div>
                </Tippy>

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
                        
                        <Tippy
                            interactive // seclect kết quả
                            // kết quả tìm kiếm > 0
                            // visible={searchResult.length > 0}

                            render={(attrs) => (
                                <div className='' tabIndex="-1" {...attrs}>
                                    <PropperWrapper>
                                        <Notifications />
                                    </PropperWrapper>
                                </div>
                            )}
                        >
                            <div><FiHeart className='w-6 h-6 ml-[22px]' /></div>
                        </Tippy>
                    </li>
                    <li>
                        
                            <Tippy
                                interactive // seclect kết quả
                                // kết quả tìm kiếm > 0
                                // visible={searchResult.length > 0}

                                render={(attrs) => (
                                    <div className='' tabIndex="-1" {...attrs}>
                                        <PropperWrapper>
                                            <SelectionAccount />
                                        </PropperWrapper>
                                    </div>
                                )}
                            >
                                <div>
                                    <img src='https://i.pinimg.com/originals/a0/1d/55/a01d5552778440f9333bbffe57475ce5.jpg' alt='Chanyeol' className='w-6 h-6 rounded-full ml-[22px] border border-slate-300 hover:border-slate-900'></img>
                                </div>
                            </Tippy>
                        
                    </li>
                </ul>

            </div>

        </div>
    );
}

export default Header;