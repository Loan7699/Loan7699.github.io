// 1. Truy cập phần tử qua id, trả về 1 phần tử duy nhất
const heading = document.getElementById('heading');
console.log(heading);

// 2. Truy cập thông qua TagName, trả về tập hợp các phần tử
const paraTagNames = document.getElementsByTagName('p');
console.log(paraTagNames);
// lấy qua chỉ số, ko áp dụng được các array methods như map,reduce...
console.log(paraTagNames[0]);
// lấy ra độ dài
console.log(paraTagNames.length);
// sử dụng for
for (let i = 0; i < paraTagNames.length; i++) {
    console.log(paraTagNames[i]);
}

// sử dụng map, ko áp dụng được trực tiếp
// paraTagNames.map(p => console.log(p));
// Muốn áp dụng cần convert paraTagNames => array
Array.from(paraTagNames).map(p => console.log(p));


// 3. Truy cập thông qua className -tính chất tương tự TagName
const paraClassName = document.getElementsByClassName('para')
console.log(paraClassName);

// 4. Truy cập thông qua CSS Selector (querySelector) => trả về phần tử đầu tiên mà nó tìm thấy, không tìm thấy trả về Null
// Các cách chọn h1 CSS Selector:
// h1 
// #heading 
// h1#heading
const headingSelector = document.querySelector('#heading');
console.log(headingSelector);
// chọn Thẻ para 2

const para2 = document.querySelector('.para')
console.log(para2);

const para3 = document.querySelector("p:nth-child(4)")
console.log(para3);

const ul1 = document.querySelector('.box ul');// quan hệ cha con hoặc .box ul:first-child
console.log(ul1);

// ul:nth_child(6)
// .box + ul: quan hệ anh em
// body > ul: con trực tiếp
const ul2 = document.querySelector('body > ul');
console.log(ul2);

const li33 = document.querySelector('.li + li'); // quan hệ anh em với li22
console.log(li33);

// ul > li: last child
// ul1 > li: nth-child(4)
const li44 = document.querySelector('ul:last-child');
console.log(li44);

// 5. querySelectorAll : trả về nhiều phần tử
const paraSelectorAll = document.querySelectorAll('p');
console.log(paraSelectorAll);

// Truy cập toàn cục là toàn bộ 'document'
// Truy cập cục bộ
// Muốn truy cập vào thẻ ul nằm trong class"box"
const box = document.querySelector('.box');
const ulInsideBox = box.querySelector('ul');
console.log(ulInsideBox);

// Truy cập gián tiếp
console.log(ulInsideBox.parentElement); // truy cập vào cha
console.log(ulInsideBox.firstElementChild); // quan hệ con: lấy ra con đầu tiên của ul
console.log(ulInsideBox.lastElementChild); // lấy ra con cuối cùng của ul
console.log(box.previousElementSibling); // anh em liền trước phần tử
console.log(box.nextElementSibling); // anh em liền sau phần tử
