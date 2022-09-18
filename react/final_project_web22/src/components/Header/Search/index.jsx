import AccountItemResult from '../Account_item_result'

import { useState, useEffect } from 'react'

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '../Propper';

import { RiSearchLine} from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

function Search() {
    const [searchResult, setSearchResult] = useState([])
    // kết quả tìm kiếm

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])

    return(
        <Tippy className="hidden"
                    interactive // seclect kết quả
                    // kết quả tìm kiếm > 0
                    visible={searchResult.length > 0}

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
                    <div className='md:flex justify-center items-center bg-[#F2F3F5] rounded-lg px-4 py-1 h-9 hidden'>
                        <RiSearchLine className='text-[#8E8E8E] mr-3' />
                        <div>
                            <input
                                className='bg-[#F2F3F5] outline-none'
                                type='text'
                                placeholder="Search"

                            />
                        </div>

                        <AiFillCloseCircle className='text-[#8E8E8E]' />

                        
                    </div>
                </Tippy>
    )
}

export default Search