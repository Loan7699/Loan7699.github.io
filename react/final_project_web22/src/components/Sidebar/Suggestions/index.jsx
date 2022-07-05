import React from 'react';
import PropTypes from 'prop-types';
import SuggestProfile from '../SuggestProfile';

Suggestions.propTypes = {
    
};

function Suggestions(props) {
    return (
        <div className='text-sm mb-3'>
            <div className='flex justify-between mt-3 py-1'>
                <p className='text-[#8E8E8E] font-semibold'>Suggestion For You</p>
                <p className='font-semibold cursor-pointer'>See All</p>
            </div>

            <div className='py-2'>
                <SuggestProfile />
                <SuggestProfile />
                <SuggestProfile />
                <SuggestProfile />
                <SuggestProfile />
            </div>
        </div>
    );
}

export default Suggestions;