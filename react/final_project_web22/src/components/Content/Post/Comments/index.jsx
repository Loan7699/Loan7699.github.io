import { BsEmojiSmile } from "react-icons/bs"

function Comments() {
    return (
        <div className="flex items-center justify-between py-4" style={{borderTop: "1px solid #EFEFEF"}}>
            <div className="flex items-center">
                <div className="px-2 pr-4">
                    < BsEmojiSmile className="w-6 h-6" />
                </div>
                <input type='text' placeholder="Add a comment" className="outline-none text-sm" />
            </div>
            <button className="text-sm text-[#0095F6] font-semibold">Post</button>
        </div >
    )
}

export default Comments;