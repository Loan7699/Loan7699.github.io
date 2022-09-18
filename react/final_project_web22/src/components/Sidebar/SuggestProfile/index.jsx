import React, { useState } from 'react';
import PropTypes from 'prop-types';

SuggestProfile.propTypes = {
    
};

function SuggestProfile(props) {

    const [statusFollow, setStatusFollow] = useState('Follow')
    const [colorText, setColorText] = useState('#0095F6')
    const handleFl = () => {
        setStatusFollow('Following')
        setColorText('#333333')
    }

    return (
        <div className='flex justify-between text-sm py-2 items-center'>
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <img src='suggestProfile/images.jpg' alt='avatar' className='w-8 h-8 rounded-full text-[#0095F6] cursor-pointer font-semibold mr-3'/>
                    {/* {../../../img/images.jpeg} */}
                </div>

                <div className=''>
                    <p className='font-semibold cursor-pointer'>oanh.ki.75</p>
                    <p className='ml-1.5 text-[#8E8E8E]'>Follows you</p>
                </div>
            </div>

            <div className='cursor-pointer font-semibold' style={{color:colorText}} onClick={handleFl}>{statusFollow}</div>
        </div>
    );
}

export default SuggestProfile;