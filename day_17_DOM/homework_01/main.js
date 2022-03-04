/*
Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
Đặt màu văn bản thành #777
Đặt kích thước phông chữ thành 2rem
Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
*/
const text = document.getElementById('text');
text.style.color = '#777';
text.style.fontSize = '2rem';
text.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';

/*
Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
*/
const li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
    li[i].style.color = 'blue';
}

/*
Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
Sử dụng javascript để thực hiện những công việc sau
*/
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const item8910 = document.createElement('li');
item8910.innerHTML = '<li>Item 8</li><li>Item 9</li><li>Item 10</li>';
const ul2 = document.getElementById('list');
ul2.appendChild(item8910);

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const allLi = document.getElementsByTagName('li');
for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.color = 'red';
}

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelectorAll('#list > li');
li3[2].style.backgroundColor = 'green';

// Remove thẻ <li> 4
ul2.removeChild(li3[3]);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLi = document.createElement('li');
newLi.innerText = 'New item';
li3[2].insertAdjacentElement('afterend', newLi);