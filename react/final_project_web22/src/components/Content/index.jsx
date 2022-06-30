import Reels from './Reels'

function Content () {
    return (
        <div className="bg-slate-300 w-[614px] min-h-full mr-7">
            <Reels />
            <Content />
        </div>
    )
}

export default Content