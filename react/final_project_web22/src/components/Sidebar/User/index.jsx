import React from 'react';
import PropTypes from 'prop-types';

User.propTypes = {

};

function User(props) {
    return (
        <div className='flex justify-between mb-2.5 mt-12 items-center text-sm'>
            <div className='flex items-center'>
                <div>
                    <img src='https://i.pinimg.com/originals/a0/1d/55/a01d5552778440f9333bbffe57475ce5.jpg' alt='avatar' className='h-[56px] w-[56px] rounded-full mr-4 cursor-pointer' />
                </div>

                <div className=''>
                    <p className='font-semibold cursor-pointer'>phuongloan</p>
                    <p className='text-[#8E8E8E] ml-0.5'>Phương Loan</p>
                </div>
            </div>

            <button className='text-[#0095F6] cursor-pointer font-semibold'>Switch</button>
        </div>
    );
}

export default User;