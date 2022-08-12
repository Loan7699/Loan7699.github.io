// folder api: chứa các service phục vụ việc call api
// file: cấu hình, tạo createAxios, thực hiện các cán thiệp (inrtercepter) ...
import axios from 'axios'
import queryString from 'query-string'


const axiosClient = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com",
    baseURL: "https://40d7f4a1-8e6e-4e4a-9711-2d6f92be7e6b.mock.pstmn.io",
    // link server gọi api
    paramsSerializer: (params) => queryString.stringify(params), // params: ví dụ ?page=0, size=1...
    // queryString là 1 thư viện yarn add vào
});

// tạo 1 axiosClient để can thiệp request, ...
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token-id'); // lấy ra token

        // kiểm tra đkien
        if (token) {
            config.headers.common['token-id'] = JSON.parse(token);
        }
        return config; // config được đưa ngược lại vào axios
    },

    (error) => {
        throw error;
    },
);

// can thiệp vào response khi trả về status
axiosClient.interceptors.response.use(
    (response) => {
        if(response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }

        return Promise.reject(new Error('Lỗi khi kết nối tới server'))
    },

    // call có lỗi hoặc server trả về lỗi => handle lỗi
    (error) => {
        const messageError = error.response?.data.description ||  error.response?.data.message; // tạo biến lỗi lấy từ server trả về description hay message

        if (error.response?.status === 401) {
            localStorage.removeItem('token-id');
            // xử lý trong TH 401: về trang login...
        }

        if (messageError) {
            // message.error(messageError);
            // Thông báo message lỗi ra màn hình người dùng
        }
        
        throw error;
    }
);

export default axiosClient

