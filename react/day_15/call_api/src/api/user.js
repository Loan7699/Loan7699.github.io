import axiosClient from "./axiosClient";

const userApi = {
    getPosts: () => axiosClient.get('/users/12'),
    addPosts: () => axiosClient.post('posts/add')
}

export default userApi