import React from 'react'

import { FiSend } from "react-icons/fi"

function NewMessage() {
    return (
        <div className='h-auto my-auto grow shrink flex-basic fixed top-1/3 left-1/2'>
            <div className='h-full p-6'>
                <div className='w-24 h-24 border-2 border-solid border-[#333333] rounded-full relative mx-auto'>
                    <FiSend className='relative top-6 left-5 w-12 h-12' />
                </div>

                <div className='mt-4'>
                    <h2 className='font-light text-[22px]'>Your Messages</h2>
                </div>
                <div className='mt-4'>
                    <p className='text-sm text-[#8E8E8E]'>Send private photos and messages to a friend or group.</p>
                </div>
                <div className='mt-6'>
                    <div className='p-1 bg-[#0095F6] border border-solid border-transparent rounded w-28 mx-auto'>
                        <button className='text-[#FFFFFF] text-sm font-semibold'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMessage;