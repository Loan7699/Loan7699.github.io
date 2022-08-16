import React from "react";
// import ProTypes from 'prop-types'

import Header from "../../components/Header";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer"

HomePage.ProTypes = {};

function HomePage(props) {
    return (
        <div className="flex flex-col bg-[#FAFAFA]">
            <div className="relative">
                <Header />
            </div>

            <div className="flex justify-between mx-auto mt-[64px] w-[935px]">
                    <Content />
                <div className="relative">
                    <Sidebar className=""/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;
