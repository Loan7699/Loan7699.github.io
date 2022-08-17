import React from 'react'
import ProTypes from 'prop-types'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MyProfile from "../../components/MyProfile"

AboutMe.ProTypes = {

};

function AboutMe(props) {
    return (
        <div className='bg-[#FAFAFA] overflow-hidden'>
            
                <Header />
            
            
                <MyProfile />
            
            
                <Footer />
            
        </div>
    )
}

export default AboutMe;