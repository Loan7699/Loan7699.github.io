import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className='text-[#C7C7C7] text-sm'>
            <div className='mb-4 text-xs text-left'>
                <p>About . Help . Press . API . Jobs . Privacy . Terms . Locations . Language . English</p>
            </div>

            <div className='text-left'>© 2022 INSTAGRAM FROM META</div>
        </div>
    );
}

export default Footer;