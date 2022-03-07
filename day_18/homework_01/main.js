// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
const li7 = document.querySelector('li:last-child');

const btnAdd = document.createElement('button');
btnAdd.innerText = 'add';
document.body.appendChild(btnAdd);

const input = document.createElement('input');
input.type = 'text';
btnAdd.insertAdjacentElement('afterend', input);

// 1. Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
btnAdd.addEventListener('click', function() {
    if (input.value == '') {
        alert('Bạn chưa nhập thông tin vào ô input');
    } else {
        const li_input = document.createElement('li');
        li_input.innerText = input.value;
        li7.insertAdjacentElement('afterend', li_input);
    }
})

// 2. Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
const btnRemove = document.createElement('button');
btnRemove.innerText = 'remove';
document.body.appendChild(btnRemove);

btnRemove.addEventListener('click', function() {
    li7.parentNode.removeChild(li7);
})

// 3. Thêm 1 nút Hide trên đầu của danh sách ul
const btnHide = document.createElement('button');
btnHide.innerText = 'Hide';
const ul = document.querySelector('ul');
ul.insertAdjacentElement('beforebegin', btnHide);

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
const hideShow = () => {
    if (btnHide.innerText == 'Hide') {
        btnHide.innerText = 'Show';
        ul.style.display = 'none';
    } else {
        btnHide.innerText = 'Hide';
        ul.style.display = 'block';
    }
}
btnHide.addEventListener('click', hideShow);
