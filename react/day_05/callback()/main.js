/* 1. Callback()
- Là hàm
- Được truyền làm tham số cho 1 hàm khác
- được gọi lại trong hàm nhận đối số
*/
function myCallback(value) {
    console.log("Value:", value);
}

function myFunction(params) {
    if (typeof params === 'function') {
        params("Học lập trình"); // myCallback("Học lập trình")
    }
}

myFunction(myCallback);
// Callback 2
var course = ["Javascript", "PHP", "Ruby"];

var htmls = course.map(function(course) {
    return `<h2>${course}</h2>`;
});
console.log(htmls.join(''));
// map lặp qua array, mỗi lần lặp qua gọi lại function bên trong

/* 2. Các loại funtion
    1. Declaration function
    2. Expression function
    3. Arrow function
*/
showMessage1();

function showMessage1() {
    console.log("Declaration function");
} // đặt tên hàm, có thể thực thi hàm trước khi định nghĩa

var showMessage2 = function() {
    console.log("Expression function");
} // ko cần đặt tên hàm, ko thể thực thi hàm trước khi đ/n
showMessage2();

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
const course1 = {
    name: "Javascript basic",
    // Viết ra 1 hàm, 1 phthuc lấy ra name
    getName: function() {
        return this.name; // this đc hiểu là chính là cái gọi đến getName() => this ở đây là course
        // return this => this: có context
    }
}

console.log(course1.getName()); // course.name => {name: "Javascript basic"}


