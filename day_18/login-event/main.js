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

// Truy cập các thành phần
const btn = document.getElementById('btn-login');

// lấy ra giá trị nhập vào của ô input
const user = document.getElementById('username').value;
const pass = document.getElementById('password').value;

btn.addEventListener('click', function () {
    // Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
     if (!user || !pass) { // if ((user == '') || (pass == ''))
        alert('Vui lòng nhập đầy đủ thông tin');
        return
    }
    // Kiểm tra đăng nhập
    // C1
    // let isLogin = false;
    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].username == user && users[i].password == pass) {
    //         isLogin = true;
    //         break;
    //     }
    // }

    // C2: Sử dụng some
    let isLogin = users.some(u => u.username == user && u.password == pass)
    // viết gộp: users.some(u => u.username == user && u.password == pass)
    // Kiểm tra isLogin
    isLogin
        ? alert('Đăng nhập thành công')
        : alert('Đăng nhập không chính xác')

    // C3: Ngoài ra có thể sử dụng find, findIndex, filter để kiểm tra (trả về 1 mảng khác rỗng nếu đúng)

    // for (let i = 0; i < users.length; i++) {
    //     if ((users[i].username == user) && (users[i].password == pass)) {
    //         alert('Đăng nhập thành công');
    //     } else if ((users[i].username != user) && (users[i].password != pass)) {
    //         alert('Tài khoản hoặc mật khẩu không chính xác');
    //     }
    // }

})
