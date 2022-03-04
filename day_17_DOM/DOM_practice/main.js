// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.getElementById('heading');
heading.style.color = 'red';
heading.style.textTranform = 'uppercase';

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paragraph = document.getElementsByClassName('para');
console.log(paragraph);
for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = 'blue';
    paragraph[i].style.fontSize = '20px';
}
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const link = document.createElement('a');
link.innerText = ('facebook');
link.href = 'https://www.facebook.com/';
link.target = '_blank';

const para3 = document.querySelector('.para-3');
para3.insertAdjacentElement('afterend', link);


// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const child = document.getElementById('title');
child.innerHTML = "Đây là thẻ tiêu đề";

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ) (có thể làm)
const description = document.querySelector('.description');
description.classList.add('text-bold');

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const button = document.createElement('button');
button.innerText = 'Click me';
document.body.replaceChild(button, para3);

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector('.para-2');
const para2Copy = para2.cloneNode(true)
para2.insertAdjacentElement('afterend', para2Copy);

// Xóa thẻ có class=“para-1”
const para1 = document.querySelector('.para-1');
document.body.removeChild(para1);