import axios from 'axios'
import { useState, useEffect } from 'react'
import userApi from '../api/user'

function Content() {
    const [users, setUsers] = useState([])

    useEffect(() => {
       userApi.getUser().then(res => {
        console.log(res.data);
        setUsers(res.data)
       })
    }, [])

    // const handleAddPost = (item) => {
    //     const payload = {
    //         id: item.id,
    //         name: item.title
    //     }
    //     userApi.addPost(payload).then(res => {
    //         // xử lý logic
    //     })
    // }

    return (
        <div>
            {users.map((user) => 
                <ul  key={user.id}>
                    <li>{user.name}</li>
                </ul>
            )}
        </div>
    )
}

export default Content;