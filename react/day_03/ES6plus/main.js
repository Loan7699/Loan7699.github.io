// //1. Enhance Obj Liter
// // Đ/n key cho obj dưới dạng biến

// // 2. Destructuring rest (phân rã)
// var array = ['Java', 'PHP', 'Ruby'];
// var [a, b, c] = array;
// // lấy phần tử mảng: 
// var obj = {name: "A", price: '100'}
// // lấy ra key obj nhanh
// var {name, price} = obj;

// // lấy 
// var [a, ...rest] = array;
// console.log(a); // 'Java': phần tử đầu tiên
// console.log(rest); // ['PHP', 'Ruby']: phần tử còn lại

// // var course = {
// //     name: 'Java',
// //     price:'1000',
// //     note: 'ABC'
// // }

// // var {name, price, ...rest} = course;
// // console.log(name, price); // Java, ABC
// // console.log(rest); // ra obj {Note: "ABC"}

// var course = {
//     name: 'Java',
//     price:'1000',
//     note: 'ABC',
//     children: {
//         name: 'ReactJS',
//     }
// }

// var {name, children: {name}} = course;
// console.log(name); // ReactJS
// // muốn lấy giá trị 'Java' cần đặt tên cho name
// // var {name: parentName, children: {name}} = course;
// // console.log(parentName)

// // BT: tạo ra một hàm console.log(). Truyền vào bao nhiêu tham số thì in ra bấy nhiêu tham số? Bỏ tham số đầu, in phần còn lại
// const logger = (...params) => {
//     return console.log(params,...rest);
// }
// logger(1,2,3);
// logger(1, [1,2], {name: "Phương Loan", age: '23'})
// logger({name: 'Java',price:'1000',note: 'ABC',children: {name: 'ReactJS',}}, [2,3,5], 'Phương Loan')


// // 3. Spread
// var arr1 = [1,2,3];
// var arr2 = [3,4,5];
// var arr3 = [...arr2, ...arr1];
// console.log(arr3);

// // sử dụng lại configDefault thay đổi api
// const configDefault = {
//     api: 'http://abc',
//     version: 'v1',
//     name: 'JS co ban',
// }

// const configWow = {
//     ...configDefault, // copy configDefault vào configWow
//     api: 'http://xyz', // ghi đè api
// }

// // So sánh Spread và Rest
// var array1 = [1, 4, 5];
// function logger(...rest) { // rest: 

// }
// console.logger(...array1); // copy rồi truyền vào array1

// 1. Arrow function
// Hàm declaration function
function logger1(log) {
    console.log(log);
}

logger1('Message1');

// Hàm expression function (có thể gán cho biến, truyền vào làm tham số cho 1 hàm khác, có thể được trả về từ function khác)
const logger2 = function(log) {
    console.log(log);
}

logger2('Message2');

// Arrow function
const logger3 = (log) => {
    console.log(log);
}

logger3("Message3");

// arrow function khi trả về kqua luôn
const sum1 = (a, b) =>
    a + b; // code sau mũi tên hiểu là return

console.log(sum1(2, 2));

// muốn trả về 1 obj
const sum2 = (a, b) => { // const sum2 = (a, b) => ({a: a, b: b});
    return {
        a: a,
        b: b,
    }
}
console.log(sum2(2, 1));

// Nếu hàm chỉ có một tham số => có thể bỏ ngoặc đơn ở tham số
const logger4 = log => console.log(log);
logger4('Message4');

// Đặc tính của arrow function: ko có context của nó
const course = {
    name: "Javascript basic",
    // Viết ra 1 hàm, 1 phthuc lấy ra name
    getName: function() {
        return this.name; // this đc hiểu là chính là cái gọi đến getName() => this ở đây là course
        // return this => this: có context
    }
}

console.log(course.getName()); // course.name => {name: "Javascript basic"}

// 2. Enhanced object literals: định nghĩa key value cho obj, đ/n method cho obj, đ/n key cho obj dưới dạng biến

var name = "Javascript";
var price = 1000;

// value: tạo ra 1 obj bao gồm thông tin 2 biến trên
// d/n key: value cho obj
var course1 = {
    // name: name,
    // price: price
    name,
    price, // nếu name và key trùng tên có thể viết
}
console.log(course);

// method
var course2 = {
    name,
    price,
    // getName2: function () {
    //     return name;
    // }
    getName2() {
        return name; // sử dụng Enhance Obj Literals
    }
}
console.log(course.getName2()); // lấy ra name của course

// key
var fieldName = 'name';
var fileldPrice = 'price';

const course3 = {
    [fieldName]: 'Javascript', // đưa biến vào ngoặc []
    [fileldPrice]: '1000'
}
console.log(course);

// 3. Rest parameters
// rest: phần còn lại
let array6 = ['Java', 'PHP', 'Ruby'];
let [x, y, ...rest] = array;

console.log(x); // Java
console.log(y); // PHP
console.log(rest); // Ruby

function logger5(...params) {
    console.log(params);
}
logger5(1,2,3,4); // 1,2,3,4

function logger6(a, ...params) {
    console.log(params);
}
logger6(1,2,3,4); // 2,3,4

// truyền 1 obj vào logger
function logger(obj) {
    console.log(obj.name);
    console.log(obj.price);
}
logger ({
    name: 'Javascript',
    price: 1000,
})

// cách khác dùng destructuring
function loggerDes({name, price, ...rest}) { // lấy luôn key muốn lấy ra đặt trong {}
    console.log(name);
    console.log(price);
    console.log(rest); // phần còn lại: description
}

loggerDes({
    name: 'Javascript',
    price: 1000,
    description: "content"
})

function logger7([a, b, ...rest]) {
    console.log(a); // 2
    console.log(b); // 6
    console.log(rest); // [3, 4, 4]
}
logger7([2, 6, 3, 4, 4]);

// 4. Spread (toán tử dải) (...): dải trước arr hay obj sẽ bỏ đi dấu ngoặc trước sau, chỉ còn phần tử
let array1 = ['Java', "Ruby", "PHP"];
let array2 = ['ReactJS', 'Dart'];
// tạo array3 = nối array1 và array2, array2 trước
let array3 = [...array2, ...array1]
console.log(array3); // ['Java', "Ruby", "PHP", "ReactJS", "Dart"]

let obj1 = {
    name: "Java",
}

let obj2 = {
    price: 1000,
}

let obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3); // {name: 'Java', price: 1000}

let defaultConfig = {
    api:'https://abc',
    apiVersion: 'v1',
    other: 'other',
}

let exerciseConfig = { // muốn thừa hưởng tất cả của defaultConfig
    ...defaultConfig,
    api: 'https://abc1', // lấy key api định nghĩa sau => thay đổi link api
}

// truyền tham số cho hàm dùng spread
let array4 = ['Java', "Ruby", 'PHP'];

function logger8(a, b, c) { // hoặc dùng rest logger8(...rest)
    console.log(a, b, c);
}

logger8(1, 2, 3)
logger(...array4) // dùng spread
// Phân biệt rest và spread
// rest: sử dụng khi kết hợp với destructuring, định nghĩa tham số
// Spread: truyền đối số (khi gọi đến hàm cần truyền đối số), dải nó trong 1 array hoặc obj

// 5. Destructuring (phân rã): sử dụng với obj và array
let array5 = ['Java', 'PHP', 'Ruby'];
// tạo 1 3 biến a, b, c lưu lần lượt các phần tử của array
// let a = array[0];
// let b = array[1];
// let c = array[2];
// console.log(a, b, c);

// sử dụng destructuring
let [a, b, c] = array; // đặt tên biến tự do
console.log(a, b, c); // Java PHP Dart

// lấy phần tử đầu và cuối
let [d, , e] = array;
console.log(d, e); // Java Dart

// sử dụng với obj
let course2 = {
    name: 'Javascript',
    price: 2000,
    image: 'img-address'
}
// dùng destructuring lấy ra cả name và price
var {name, price, image} = course2; // gọi đúng key của obj
console.log(name, price);

// không lấy ra name
// var {name, ...rest} = course2;
// console.log(rest);
// console.log(name); // Javascript

// Khi obj trùng key
let course4 = {
    name: 'Javascript',
    price: 2000,
    image: 'img-address',
    children: {
        name: 'ReactJS',
    }
}

let {name, children} = course4;
// lấy name của chidren
// let {name, children: {name}} = course4
// // do children là 1 obj nên dùng {}
// console.log(name) // ReactJS => do children.name ghi đè lên course4.name

// cần đổi tên nếu muốn lấy course4.name
let {name: parentName, children: {name: childrenName}} = course4;
console.log(parentName); // Javascript
console.log(childrenName); // ReactJS