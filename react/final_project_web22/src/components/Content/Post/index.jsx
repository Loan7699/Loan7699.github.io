import Header from './Header'
import Image from './Image'
import Actions from './Actions'
import Status from './Status'
import Comments from './Comments'

function Post() {
    return (
        <div className='mb-6 bg-white rounded-[3px]' style={{border: "1px solid #dbdbdb"}}>
            <Header />
            <Image />
            <div className='px-4'>
                <Actions />
                <Status />
                <Comments />
            </div>
        </div>
    )
}

export default Post