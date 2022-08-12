import axios from "axios";
import { useState, useEffect } from 'react'
import userApi from "./api/user";

function Content() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        
        userApi.getPosts().then(res => {
            console.log('res', res);
            setPosts(res.data)
        })
    }, [])

    return (
        <div> 
            {
                posts.map(post => 
                    <li key={post.id}>{post.title}</li>
                )
            }
        </div>
    )
}

export default Content;