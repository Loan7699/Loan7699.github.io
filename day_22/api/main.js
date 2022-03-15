// Khái niệm API: Application Programing Interface được sử dụng để trao đổi DL giữa các server với nhau
/*
 Người khách: client (front end)
Bồi bàn: API
Nhà bếp: server (backend)
*/

// Thành phần API
/*
1. HTTP method (get: lấy tài nguyên trên serve, post: gửi, put: sửa, delete: xóa)
VD: GET: /api/v1/products: lấy tất cả các danh sách products

GET: /api/v1/products: lấy thông tin products có id = 1 (1 tài nguyên products)
Muốn truy cập vào 2 tài nguyên: GET: /products/1/comments : lấy ra tất cả các comments của các sp có id = 1 (2 tài nguyên)
GET: /products/1/comments/2: lồng nhau

DELETE: /api/v1/products: xóa cái products có id = 1
POST: /api/v1/products + data : truyền
PUT: /api/v1/product/1 + data: sửa, cập nhật
2. URL

// Status code
*/

// Gọi API
/*
1. fetch API: có sẵn trong JS
2. axios: thư viện bên ngoài, cần nối link vào để sử dụng (nên dùng)
*/

// Bấm 'random' => call API => hiển thị ảnh

// Truy cập

let btnRandom = document.querySelector('.btn-random');
let imageEl = document.querySelector('.image img');

btnRandom.addEventListener('click', async function() {
    // gọi API
    try {
        let res = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.log(res.data); // trả về 1 object chứa nhiều thông tin, message(url ảnh) nằm trong data

        // Hiển thị ảnh
        imageEl.src = res.data.message;
    } catch(err) {
        console.log(err);
    }
})