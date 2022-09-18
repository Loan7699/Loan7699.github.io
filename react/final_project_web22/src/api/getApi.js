import axiosClient from "./axiosClient";

const getApi = {
    getUserLogin: () => axiosClient.get('/userslogin/list'),
    // addPosts: () => axiosClient.post('posts/add')
    getDetailProfile: () => axiosClient.get("/UserProfile/list"),
}

export default getApi;