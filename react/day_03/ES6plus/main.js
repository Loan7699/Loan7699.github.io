//1. Enhance Obj Liter
// Đ/n key cho obj dưới dạng biến

// 2. Destructuring rest (phân rã)
var array = ['Java', 'PHP', 'Ruby'];
var [a, b, c] = array;
// lấy phần tử mảng: 
var obj = {name: "A", price: '100'}
// lấy ra key obj nhanh
var {name, price} = obj;

// lấy 
var [a, ...rest] = array;
console.log(a); // 'Java': phần tử đầu tiên
console.log(rest); // ['PHP', 'Ruby']: phần tử còn lại

// var course = {
//     name: 'Java',
//     price:'1000',
//     note: 'ABC'
// }

// var {name, price, ...rest} = course;
// console.log(name, price); // Java, ABC
// console.log(rest); // ra obj {Note: "ABC"}

var course = {
    name: 'Java',
    price:'1000',
    note: 'ABC',
    children: {
        name: 'ReactJS',
    }
}

var {name, children: {name}} = course;
console.log(name); // ReactJS
// muốn lấy giá trị 'Java' cần đặt tên cho name
// var {name: parentName, children: {name}} = course;
// console.log(parentName)

// BT: tạo ra một hàm console.log(). Truyền vào bao nhiêu tham số thì in ra bấy nhiêu tham số? Bỏ tham số đầu, in phần còn lại
const logger = (...params) => {
    return console.log(params,...rest);
}
logger(1,2,3);
logger(1, [1,2], {name: "Phương Loan", age: '23'})
logger({name: 'Java',price:'1000',note: 'ABC',children: {name: 'ReactJS',}}, [2,3,5], 'Phương Loan')


// 3. Spread
var arr1 = [1,2,3];
var arr2 = [3,4,5];
var arr3 = [...arr2, ...arr1];
console.log(arr3);

// sử dụng lại configDefault thay đổi api
const configDefault = {
    api: 'http://abc',
    version: 'v1',
    name: 'JS co ban',
}

const configWow = {
    ...configDefault, // copy configDefault vào configWow
    api: 'http://xyz', // ghi đè api
}

// So sánh Spread và Rest
var array1 = [1, 4, 5];
function logger(...rest) { // rest: 

}
console.logger(...array1); // copy rồi truyền vào array1