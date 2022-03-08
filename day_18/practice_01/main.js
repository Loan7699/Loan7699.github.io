/*
Khi người dùng nhập password và bấm nút “Show”, lúc này hiển thị password và nội dung button chuyển từ “Show” --> “Hide”
Ngược lại khi người dùng bấm vào nút “Hide”, lúc này ẩn password và nội dung button chuyển từ “Hide” --> “Show”
Gợi ý : Thay đổi thuộc tính type của input để ẩn hiện password
*/

// truy cập vào các thành phần
const btn = document.querySelector('button');
const password = document.querySelector('input');

// Lắng nghe sự kiện
btn.addEventListener('click', function() {
    // Nếu type 'password' => text, đổi tiêu đề button show => hide
    if (password.type == 'password') {
        password.type = 'text';
        btn.innerText = 'Hide';
    } else {
        password.type = 'password';
        btn.innerText = 'Show';
    }
})
