const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    },
]


// Khi người dùng bấm vào nút “Login” thì thực hiện các chức năng sau:
const btn = document.getElementById('btn-login');
btn.addEventListener('click', function() {
    // Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((username == '') || (password == '')) {
        alert('Vui lòng nhập đầy đủ thông tin');
    }
    // Nếu người dùng đã điền đầy đủ thông tin thì kiểm tra với thông tin đó, có trùng với user nào không
    // Nếu có thông báo “Đăng nhập thành công”. Nếu không thông báo “Tài khoản hoặc mật khẩu không chính xác”
    else if (((username == 'bob') && (password == '123')) || ((username == 'alice') && (password == '456'))) {
        alert('Đăng nhập thành công');
    } else {
        alert('Tài khoản hoặc mật khẩu không chính xác');
    }

})
