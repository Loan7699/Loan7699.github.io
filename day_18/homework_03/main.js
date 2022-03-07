// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
const para = document.querySelector('p');
let content = para.innerText;
let array = content.split(' ');
for (let i = 0; i < array.length; i++) {
    if ((array[i]).length >= 8) {
        para.innerHTML += `<span style="background-color:yellow">${array[i]}</span>`;
    } 
}

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const link = document.createElement('a');
link.innerText = 'facebook';
link.href = 'https://www.facebook.com/';
link.target = '_blank';
para.insertAdjacentElement('afterend', link);

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const div = document.createElement('div');
div.innerText = array.length;
document.body.appendChild(div);
// Thay thế các ký hiệu ? => 🤔, ! => 😲
content.replaceAll('?', '🤔')


