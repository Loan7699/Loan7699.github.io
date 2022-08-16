import React from 'react'
import ProTypes from 'prop-types'

import Header from "../../components/Header"
import MyMessages from '../../components/MyMessages'
import NewMessage from '../../components/NewMessage'

ChatPage.ProTypes = {

};

function ChatPage(props) {
    return (
        <div className='w-full h-full bg-[#FAFAFA]'>
            <Header />
            <div className='pt-16 md:pt-[74px]'>
                <div className='flex bg-[#FFFFFF] mx-auto w-full h-full max-width relative border border-solid border-[#DBDBDB]'>
                    <MyMessages />
                    <NewMessage />
                    {/* chưa cố định được newMess 
                    chưa cố định tên giống IG real
                    border trên bị che*/}
                </div>
            </div>
        </div>
    )
}

export default ChatPage;