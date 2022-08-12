// chứa các endpoint cần thực hiện call api

import axiosClient from "./axiosClient";

// tạo userApi viết theo kiểu Enhance Obj Literal
const userApi = {
    getUser: () => axiosClient.get('/users/10'),
    // addPost: (body) => axiosClient.post('/posts/add', body)
}

export default userApi;