import React from 'react';
import PropTypes from 'prop-types';

SuggestProfile.propTypes = {
    
};

function SuggestProfile(props) {
    return (
        <div className='flex justify-between text-sm py-2 items-center'>
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4F1W6p4Y_rZvcKOSdD34lbKl5nTJUZbi1A&usqp=CAU' alt='avatar' className='w-8 h-8 rounded-full text-[#0095F6] cursor-pointer font-semibold mr-3'/>
                    {/* {../../../img/images.jpeg} */}
                </div>

                <div className=''>
                    <p className='font-semibold cursor-pointer'>oanh.ki.75</p>
                    <p className='ml-1.5 text-[#8E8E8E]'>Follows you</p>
                </div>
            </div>

            <div className='text-[#0095F6] cursor-pointer font-semibold'>Follow</div>
        </div>
    );
}

export default SuggestProfile;