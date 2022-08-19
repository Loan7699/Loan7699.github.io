import React from 'react'

import { BsChevronDown, BsPencilSquare } from "react-icons/bs"

function MyMessages() {
    return (
        <div className='w-[19rem] lg:w-[21rem] border-r'>
            <div className='px-5 flex mt-3 items-center justify-between border-b border-r border-solid border-[#DBDBDB] w-[19rem] lg:w-[21rem] h-16 fixed top-16 z-10 bg-[#FFFFFF]'>
                <div className='flex bg-[#FFFFFF]'>
                    <div className='flex w-full'>
                        <div className='font-bold mr-2'>phuongloan99</div>
                        {/* dịch thẻ div ra giữa? */}
                        <div className=''>
                            <BsChevronDown className='w-5 h-5 mt-0.5 cursor-pointer'/>
                        </div>
                    </div>
                    <div>
                        <button>
                            <BsPencilSquare className='w-6 h-6 cursor-pointer ml-24'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[19rem] lg:w-[21rem] mt-16 z-0'>
                <div className='pt-2 flex flex-col relative'>
                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <div>
                                        <img src="/chatPage/mes1.jpg" className='w-14 h-14 rounded-full'/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-sm'>Tien Lam Vu</div>
                                    <div className='mt-2'>
                                        <span className='text-sm text-[#8E8E8E]'>Active now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <span>
                                        <img src="/chatPage/mes3.jpg" className='w-14 h-14 rounded-full'/>
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-sm text-left'>Linh Phuong</div>
                                    <div className='text-sm text-[#8E8E8E] flex'>
                                        <span>Liked a message</span>
                                        <span>.</span>
                                        <span>3w</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <span>
                                        <img src="/chatPage/mes2.jpg" className='w-14 h-14 rounded-full' />
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className="text-sm text-left">Hung Nguyen</div>
                                    <div className='text-sm text-[#8E8E8E] flex'>
                                        <span>Bye bye nha</span>
                                        <span>.</span>
                                        <span>5w</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <span>
                                        <img src="/chatPage/mes4.jpg" className='w-14 h-14 rounded-full' />
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className="text-sm text-left">Mice &#38; Rice</div>
                                    <div className='text-sm text-[#8E8E8E]'>
                                        <span>Active 1 hour ago</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <span>
                                        <img src="/chatPage/mes5.jpg" className='w-14 h-14 rounded-full' />
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className="text-sm text-left">
                                        <span>&#10084;</span>
                                        <span>New arrival</span>
                                        <span>&#10084;</span>
                                    </div>
                                    <div className='text-sm text-[#8E8E8E]'>
                                        <span>Active now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <span>
                                        <img src="/chatPage/mes5.jpg" className='w-14 h-14 rounded-full' />
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className="text-sm text-left">
                                        <span>&#10084;</span>
                                        <span>New arrival</span>
                                        <span>&#10084;</span>
                                    </div>
                                    <div className='text-sm text-[#8E8E8E]'>
                                        <span>Active now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <span>
                                        <img src="/chatPage/mes5.jpg" className='w-14 h-14 rounded-full' />
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className="text-sm text-left">
                                        <span>&#10084;</span>
                                        <span>New arrival</span>
                                        <span>&#10084;</span>
                                    </div>
                                    <div className='text-sm text-[#8E8E8E]'>
                                        <span>Active now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='shrink-0 grow-0 flex-basic h-[4.5rem] px-5 py-2 cursor-pointer hover:bg-[#FAFAFA]'>
                        <a className=''>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <span>
                                        <img src="/chatPage/mes5.jpg" className='w-14 h-14 rounded-full' />
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className="text-sm text-left">
                                        <span>&#10084;</span>
                                        <span>New arrival</span>
                                        <span>&#10084;</span>
                                    </div>
                                    <div className='text-sm text-[#8E8E8E]'>
                                        <span>Active now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MyMessages;