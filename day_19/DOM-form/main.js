// 1. Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)
const formInput1 = document.querySelector('.form-input');
const formInput2 = document.querySelector('div:nth-child(2)');
const formInput3 = document.querySelector('div:nth-child(3)');

const labelUser = document.createElement('label');
const labelPass = document.createElement('label');
const labelConfirm = document.createElement('label');

labelUser.innerText = 'Username';
formInput1.insertAdjacentElement('afterbegin', labelUser);

labelPass.innerText = 'Password';
formInput2.insertAdjacentElement('afterbegin', labelPass);

labelPass.innerText = 'Password';
formInput2.insertAdjacentElement('afterbegin', labelPass);

labelConfirm.innerText = 'Confirm Password';
formInput3.insertAdjacentElement('afterbegin', labelConfirm);

// 2. Kiểm tra xem password và confirm pass có trùng nhau hay không
const btnRegister = document.getElementById('btn');
const inputUser = document.getElementById('username');
const inputPass = document.getElementById('password');
const inputConfirm = document.getElementById('confirmPassword')


// btnRegister.addEventListener('click', function () {
// if ( pass == confirm &&  pass != '' && confirm != '') {
//     alert("Password trùng nhau");
// }
inputUser.addEventListener('change', function () {
    let user = inputUser.value;
    console.log(user);
    if (!user) {
        btnRegister.setAttribute(disabled)
    }
})

let pass = inputPass.value
console.log(pass);
let confirm = inputConfirm.value;

// if (user == '' || pass == '' || confirm == '') {
//     btnRegister.removeAttribute('disabled')
// } else {
//     btnRegister.setAttribute(disabled)
// }


// // 3. Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.


// 4. Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.
// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công