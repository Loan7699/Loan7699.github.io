import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ExplorePage from '../../components/ExplorePage'

import ProTypes from 'prop-types'
Explore.ProTypes = {

};

function Explore(props) {
    return (
        <div>
            <Header />
            <ExplorePage />
            <Footer />
        </div>
    )
}

export default Explore;