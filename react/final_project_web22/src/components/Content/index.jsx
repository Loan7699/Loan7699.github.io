import Reels from './Reels'
import Post from './Post'

function Content() {
    return (
        <div className="w-[614px] min-h-full mr-7">
            <div className='h-[120px] flex mt-[25px] p-4 mb-6 bg-[#ffffff] overflow-x-scroll example' style={{ border: "1px solid #dbdbdb" }}>
                <Reels />
            </div>
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Content