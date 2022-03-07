/*
Khi người dùng nhập password và bấm nút “Show”, lúc này hiển thị password và nội dung button chuyển từ “Show” --> “Hide”
Ngược lại khi người dùng bấm vào nút “Hide”, lúc này ẩn password và nội dung button chuyển từ “Hide” --> “Show”
Gợi ý : Thay đổi thuộc tính type của input để ẩn hiện password
*/
const btn = document.querySelector('button');
const password = document.querySelector('input');

btn.addEventListener('click', function() {
    if (password.type == 'password') {
        password.type = 'text';
        btn.innerText = 'Hide';
    } else {
        password.type = 'password';
        btn.innerText = 'Show';
    }
})
