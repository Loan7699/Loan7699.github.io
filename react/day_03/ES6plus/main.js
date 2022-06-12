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

// Hàm expression function
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
var course1 = {
    // name: name,
    // price: price
    name,
    price, // nếu name và key trùng tên có thể viết
}

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


// 4. Spread




