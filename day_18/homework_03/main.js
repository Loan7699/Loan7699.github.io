const para = document.querySelector('p');
let content = para.innerText;

// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)

let array = content.split(' ');

// C1: không nên thay đổi trực tiếp giá trị array, nên tạo 1 array rỗng và push giá trị vào
for (let i = 0; i < array.length; i++) {
    if ((array[i]).length >= 8) {
        array[i] = `<span style="background-color:yellow">${array[i]}</span>`;
    } 
}

para.innerHTML = array.join(' ');

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
para.innerHTML = para.innerHTML.replaceAll('?', '🤔')
para.innerHTML = para.innerHTML.replaceAll('!', '😲')

