
function PopupUnfollow(props) {
    console.log(props.id);
    return (
        < div className="bg-[#00000080] w-full h-screen fixed top-0 left-0 z-[100] text-sm">         
                <div className="flex flex-col w-64 md:w-[25rem] text-sm rounded-xl mx-auto mt-[150px] overflow-auto bg-[#FFFFFF]">
                    <div className="mt-8 mb-4 mx-4">
                        <img src={`/homepage/${props.id}.jpg`} className=" w-32 h-32 rounded-full mx-auto" />
                    </div>

                    <div className="my-4 mx-auto">Leave @haesoopark_official?</div>
                    <div className="mt-5">
                        <div className="text-[#ED4956] font-bold px-2 py-3 cursor-pointer border-t border-solid border-[#DBDBDB]" onClick={props.handleConfirm}>Unfollow</div>
                        <div className="px-2 py-3 cursor-pointer border-t border-solid border-[#DBDBDB]" onClick={props.handleCancel}>Cancel</div>
                    </div>
                </div>
            
        </div>
    )
}

export default PopupUnfollow