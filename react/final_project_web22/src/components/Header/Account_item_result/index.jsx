import { GrClose } from "react-icons/gr";

function AccountItemResult() {
    return (
        <div className='flex px-4 py-2 items-center'>

            <div className='pr-6'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfFqWhWm0uF6_LBcPjQFlovqqeFCuZxHqcA&usqp=CAU' alt='avatar' className='w-11 h-11 rounded-full' />
            </div>
            <div className='text-sm'>
                <p className='font-semibold'>real-pcy</p>

                <p className='text-[#8E8E8E]'>EXO-CY</p>
            </div>
            <GrClose className='ml-auto mr-0 cursor-pointer text-[#262626]' />
        </div>
    )
}

export default AccountItemResult