import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'https://40d7f4a1-8e6e-4e4a-9711-2d6f92be7e6b.mock.pstmn.io',
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token-id');

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.common['token-id'] = JSON.parse(token);
    }
    return config;
  },
  (error) => {
    throw error;
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }

    return Promise.reject(new Error('Lỗi khi kết nối tới server! '));
  },
  (error) => {
    const messageError = error.response?.data.description || error.response?.data.message;
    if (error.response?.status === 401) {
      localStorage.removeItem('token-id');
      // Xử lý logic trường hợp 401: về trang login....
    }

    if (messageError) {
      // message.error(messageError);
      // Thông báo message lỗi ra màn hình người dùng
    }
    throw error;
  },
);

export default axiosClient;
