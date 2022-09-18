import { GrClose } from 'react-icons/gr'
import { VscFileMedia } from 'react-icons/vsc'
import { MdOutlinePhotoLibrary } from 'react-icons/md'

function CreateNewPost(props) {
    return (
        < div className="bg-[#00000080] w-full h-screen fixed top-0 left-0 z-[100] text-sm">         
                <div className="flex flex-col w-[25rem] text-sm rounded-xl mx-auto mt-[100px] overflow-auto bg-[#FFFFFF]">
                    <div className='font-semibold text-base py-3 border-b border-solod border-[#DBDBDB]'>
                        <p>Create new post</p>
                    </div>
                    <div className='p-8 h-[25rem] flex flex-col justify-center'>
                        <div>
                            <img src='/popup/media.jpg' className='w-21 mx-auto'/>
                        </div>
                        <div className='mt-4 text-[22px] font-light'>Drag photos and videos here</div>
                        <div className='mt-6 py-1 px-2 bg-[#0095F6] w-40 mx-auto rounded'>
                            <button className='text-[#FFFFFF] font-semibold'>Select from computer</button>
                        </div>
                    </div>
                </div>

                <GrClose onClick={props.handeCloseCreate} className="fixed top-10 right-10"/>
                {/* mau icon close */}
            
        </div>
    )
}

export default CreateNewPost