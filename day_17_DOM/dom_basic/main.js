// Có 3 cách lấy ra nội dung của phần tử
const heading = document.querySelector('#heading');

console.log(heading.innerHTML);
console.log(heading.innerText); 
console.log(heading.textContent); 

// ul nằm trong box
const ul1 = document.querySelector('.box ul');

console.log(ul1.innerHTML); // lấy ra tên thẻ và nội dung của thẻ
console.log(ul1.innerText); // in ra nội dung, ko lấy ra được nội dung thẻ ẩn
console.log(ul1.textContent); // in ra nội dung và giữ nguyên định dạng, lấy ra được nội dung thẻ ẩn

// Thay đổi nội dung của 1 phần tử: 3 cách
heading.innerHTML = "Xin chào" // nếu insert text thông thường có 3 cách nhưng nếu nội dung chứa thẻ html thì chỉ được dùng innerHTML
heading.innerText = "Các bạn"

heading.innerHTML = "<span>Hello</span>";
// heading.innerText = "<span>Hello</span>";

// Thay đổi CSS của 1 phần tử
heading.style.color = 'red'
heading.style.backgroundColor = 'black'
heading.style.fontSize = '50px'
// những thuộc tính thay đổi sẽ thành inline_style

// Tạo, thêm, thay thế, copy, xóa tạo các phần tử
// 1. tạo
// tạo ra thẻ p có nội dung là 'Thẻ para 4'
// b1: tạo thẻ
const para4 = document.createElement('p')
// b2: chèn nội dung cho thẻ
console.log(para4);
para4.innerText = 'Thẻ para 4';

// ví dụ tạo thẻ a, link đến trang google.com, có text là 'google'
// tạo thẻ a
const link = document.createElement('a');
// chèn nội dung
link.innerText = 'google';
// chèn link
link.href = 'https://www.google.com/';
// link sang 1 tab mới
link.target = '_blank';
console.log(link);

// 2. thêm phần tử:
// prepend: thêm vào đầu phần tử cha (cần xác định được phần tử cha)
document.body.prepend(para4) // thêm para4 vào trên phần body
// thêm cuối cùng body sử dụng appendChild()
document.body.appendChild(para4);
// thêm vào một vị trí bất kì dùng insertBefore(): cần biết cha(body) và vị trí đó nằm trước cái nào(box)

// truy cập vào box
const box = document.querySelector('.box');
// chèn link
document.body.insertBefore(link, box);

// chèn thẻ li có nội dung là "Thẻ li new" vào giữa li 33 và 44
// b1: tạo thẻ li có nội dung trên
const liNew = document.createElement('li');
// b2: chèn nội dung cho thẻ
liNew.innerText = 'Thẻ li new';
// b3: insert vào DOM, cần truy cập vào ul là cha và li 44
const ul = document.querySelector('.box ul');
const li44 = document.querySelector('ul li:last-child');
ul.insertBefore(liNew, li44);

// insertAdjacentHTML
// cách 1: chọn afterend của box
// chèn thẻ button có nội dung là 'Đăng nhập' vào đằng sau thẻ box
// box.insertAdjacentHTML('afterend', "<button>Đăng nhập</button>");

 // cách 2: lấy ul làm mốc
 // truy cập ul
 const ul2 = document.querySelector('body > ul');
 ul2.insertAdjacentHTML('beforebegin', "<button>Đăng nhập</button>")

// insertAdjacentElement
const button = document.createElement('button');
button.innerText = 'Đăng ký';
heading.insertAdjacentElement('afterend', button);


// 3. xóa phần tử : cần truy cập vị trí cha và truy cập vào phần tử muốn xóa
// xóa thẻ p1
const para1 = document.querySelector('p');
//document.body.removeChild(para1)
// truy cập trực tiếp vào cha: document.body.removeChild(para1)

// C2: truy cập gián tiếp cha
// document.body <=> para1.parentElement
para1.parentElement.removeChild(para1);


// 4. Thay thế: xác định phần tử thay thế và được thay thế
// thay thế thẻ para2 bằng thẻ a link đến trang facebook.com
// tạo thẻ a
const linkFb = document.createElement('a');
linkFb.innerText = 'facebook';
linkFb.href = 'htttps://facebookcom.com';

// truy cập vào thẻ muốn thay thế và cha của nó
const para2 = document.querySelector('.para');
// document.body.replaceChild(linkFb, para2);
para2.parentElement.replaceChild(linkFb, para2)


// 5. copy (sao chép phần tử): 2 cách
const boxCopy = box.cloneNode(true) // copy thẻ và nội dung bên trong thẻ

// const boxCopy1 = box.cloneNode(false) // chỉ cop tên thẻ

console.log(boxCopy);
// console.log(boxCopy1);

// chèn vị trí cuối cùng body
document.body.appendChild(boxCopy);



