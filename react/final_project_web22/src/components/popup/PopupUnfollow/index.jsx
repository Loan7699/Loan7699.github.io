
function PopupUnfollow(props) {
    return (
        < div className="bg-[#00000080] w-full h-screen fixed top-0 left-0 z-[100] text-sm">         
                <div className="flex flex-col w-64 md:w-[25rem] text-sm rounded-xl mx-auto mt-[150px] overflow-auto bg-[#FFFFFF]">
                    <div className="mt-8 mb4 mx-4">
                        <img src="/status/ava1.jpg w-6 h-6 rounded-full" />
                    </div>

                    <div className="font-light mt-8 mb4 mx-4">Leave @haesoopark_official?</div>
                    <div className="mt-4">
                        <button className="text-[#ED4956] font-bold px-2 py-1 cursor-pointer border-b border-solid border-[#DBDBDB]">Unfollow</button>
                        <button className="px-2 py-1 cursor-pointer border-b border-solid border-[#DBDBDB]" onClick={props.unfollow}>Cancel</button>
                    </div>
                </div>
            
        </div>
    )
}

export default PopupUnfollow