import { useState } from 'react'
import PopupUnfollow from '../PopupUnfollow'

function PopupHome(props) {
    const [isUnfollow, setIsUnfollow] = useState(false)

    const handleUnfollow = () => {
        setIsUnfollow(!isUnfollow)
    }


    return (
        <div className="bg-[#00000080] w-full h-screen fixed top-0 left-0 z-[100]">
            <div>
                <div className="flex flex-col w-[19rem] md:w-[25rem] text-sm rounded-xl mx-auto mt-[150px] overflow-auto bg-[#FFFFFF]">
                    <button className="py-1 px-2 min-height border-b border-solid border-[#DBDBDB] text-center cursor-pointer text-[#ED4956] font-bold">Report</button>
                    <button className="py-1 px-2 min-height border-b border-solid border-[#DBDBDB] text-center cursor-pointer text-[#ED4956] font-bold" onClick={handleUnfollow}>Unfollow</button>
                    <button className="py-1 px-2 min-height border-b border-solid border-[#DBDBDB] text-center cursor-pointer">Go to post</button>
                    <button className="py-1 px-2 min-height border-b border-solid border-[#DBDBDB] text-center cursor-pointer">Share to...</button>
                    <button className="py-1 px-2 min-height border-b border-solid border-[#DBDBDB] text-center cursor-pointer">Copy link</button>
                    <button className="py-1 px-2 min-height border-b border-solid border-[#DBDBDB] text-center cursor-pointer">Embed</button>
                    <button className="py-1 px-2 min-height border-b border-solid border-[#DBDBDB] text-center cursor-pointer" onClick={props.handleClose}>Cancel</button>
                </div>
            </div>

            {isUnfollow && <PopupUnfollow
                id={props.id}
                handleCancel={handleUnfollow}
                handleConfirm={handleUnfollow}
            />}llx
            
        </div>
    )
}

export default PopupHome;