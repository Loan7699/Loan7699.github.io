import Reels from './Reels'
import Post from './Post'

import { useState, useEffect } from "react";

import getApi from '../../api/getApi';

function Content() {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        getApi.getDetailProfile().then(res => {
            console.log("res", res.data);
            setProfiles(res.data)
        })
    }, [])


    return (
        
        <div className="w-[614px] min-h-full lg:mr-7">
            <div className='h-[120px] flex mt-[25px] p-4 mb-6 bg-[#ffffff] overflow-x-scroll example rounded' style={{ border: "1px solid #dbdbdb" }}>
                <Reels />
            </div>
            <div>
                {profiles.map(profile =>
                    <Post
                        key={profile.id}
                        account={profile.accountName}
                        id={profile.id}
                        name={profile.name}
                    /> 
                )}
            </div>
        </div>
    )
}

export default Content