// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
const ul = document.querySelector('ul');
const li7 = document.querySelector('li:last-child');

// Thêm 1 nút add
const btnAdd = document.createElement('button');
btnAdd.innerText = 'add';
document.body.appendChild(btnAdd);

// Tạo ô input để nhập text
const input = document.createElement('input');
input.type = 'text';
btnAdd.insertAdjacentElement('afterend', input);

// 1. Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
btnAdd.addEventListener('click', function() {
    if (input.value == '') {
        alert('Bạn chưa nhập thông tin vào ô input');
    } else {
        ul.insertAdjacentHTML('beforeend', `<li>${input.value}</li>`);
        input.value = ''; // clear dữ liệu trong input
    }
})

// 2. Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
const btnRemove = document.createElement('button');
btnRemove.innerText = 'remove';
document.body.appendChild(btnRemove);

btnRemove.addEventListener('click', function() {
    // nếu tồn tại li7 thì xóa, ko thì thôi
    if (li7) {
        ul.removeChild(li7);
    }
})

// 3. Thêm 1 nút Hide trên đầu của danh sách ul
const btnHide = document.createElement('button');
btnHide.innerText = 'Hide';
ul.insertAdjacentElement('beforebegin', btnHide);

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
// C1: hạn chế sử dụng inline style
// const hideShow = () => {
//     if (btnHide.innerText == 'Hide') {
//         btnHide.innerText = 'Show';
//         ul.style.display = 'none';
//     } else {
//         btnHide.innerText = 'Hide';
//         ul.style.display = 'block';
//     }
// }
// btnHide.addEventListener('click', hideShow);

// C2: nên sử dụng class
btnHide.addEventListener('click', function() {
    ul.classList.toggle('hide');

    // Kiểm tra class hide có tồn tại trong phần tử hay không để thay đổi nội dung của btn
    if (ul.classList.contains('hide')) {
        btnHide.innerText = 'Show'
    } else {
        btnHide.innerText = 'Hide'
    }
})
