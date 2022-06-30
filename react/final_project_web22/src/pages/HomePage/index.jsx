import React from 'react'
import ProTypes from 'prop-types'

import Header from '../../components/Header';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';

HomePage.ProTypes = {

};

function HomePage(props) {
    return (
        <div className='flex flex-col'>
            <Header />

            <div className='flex justify-center'>
                <Content />
                <Sidebar />
            </div>
        </div>
    )
}

export default HomePage;