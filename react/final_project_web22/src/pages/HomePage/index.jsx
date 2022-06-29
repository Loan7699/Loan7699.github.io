import React from 'react'
import ProTypes from 'prop-types'

import Header from '../../components/Header';
import NewsFeed from '../../components/NewsFeed';
import Sidebar from '../../components/Sidebar';

HomePage.ProTypes = {

};

function HomePage(props) {
    return (
        <div className=''>
            <Header />

            <div>
                <NewsFeed />
                <Sidebar />
            </div>
        </div>
    )
}

export default HomePage;