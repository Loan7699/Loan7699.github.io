import React from 'react'
import ProTypes from 'prop-types'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MyProfile from "../../components/MyProfile"

AboutMe.ProTypes = {

};

function AboutMe(props) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <MyProfile />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutMe;