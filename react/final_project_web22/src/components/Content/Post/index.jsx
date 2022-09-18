import Header from './Header'
import Image from './Image'
import Actions from './Actions'
import Status from './Status'
import Comments from './Comments'

function Post({ account, id, name }) {

    return (
        <div className='mb-6 bg-white rounded-[3px]' style={{border: "1px solid #dbdbdb"}}>
            <Header accountName={account} id={id}/>
            <Image id={id}/>
            <div className='px-4'>
                <Actions />
                <Status name={name}/>
                <Comments />
            </div>
        </div>
    )
}

export default Post