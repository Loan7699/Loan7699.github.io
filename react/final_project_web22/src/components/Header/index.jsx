import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// s/d Tippy
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PropperWrapper } from './Propper';

// import icon
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare, FiHeart } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

import SelectionAccount from './SelectionsAccount';
import Notifications from './Notifications';
import Search from './Search';
import CreateNewPost from '../popup/CreateNewPost';

function Header() {
    const [isCreate, setIsCreate] = useState(false)
    const handleCreatePost = () => {
        setIsCreate(!isCreate)
    }

    return (
        //  fixed top-0 right-0 left-0: chưa cố định đc header
        <div className='bg-white h-16 shadow-[0_0px_1px_1px_rgba(0,0,0,0.12)] fixed top-0 left-0 right-0 z-50 overflow-hidden'>
            <div className="py-2.5 px-5 flex justify-between mx-auto items-center align-center width">
                <img src='/images/Instagram_logo.svg.png' className='w-28' />

                <Search />

                <ul className='flex text-[#262626]'>
                    <li>
                        <Link to="/">
                            <AiOutlineHome className='w-6 h-6 ml-[22px]' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat">
                            <RiMessengerLine className='w-6 h-6 ml-[22px]' />
                        </Link>
                    </li>
                    <li>
                        <FiPlusSquare className='w-6 h-6 ml-[22px]' onClick={handleCreatePost}/>
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
                                    <img src='homepage/avatar.jpg' alt='Chanyeol' className='w-6 h-6 rounded-full ml-[22px] border border-slate-300 hover:border-slate-900'></img>
                                </div>
                            </Tippy>
                        
                    </li>
                </ul>

            </div>

{console.log(isCreate)}
            {isCreate && <CreateNewPost
                handeCloseCreate={handleCreatePost}
            />}

        </div>
    );
}

export default Header;