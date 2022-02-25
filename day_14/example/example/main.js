// // Function bình thường
// function sum(a, b) {
//     return a + b;
// }

// // 1. Tính chất 1: Gán function cho 1 biến - function expression
// // Function không có tên = anonymous function
// let sumNumber = function (a, b) {
//     return a + b;
// }
// console.log(sumNumber(1,2));

// 2. Tính chất 2: Truyền function vào làm 1 tham số cho 1 function khác
// Ví dụ: Tính tổng các giá trị lẻ trong mảng

// Cách viết bình thường
let sum0dd = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            total += arr[i];
        }
    }
    return total;
}
console.log(sum0dd([1, 2, 3, 4, 5]));

// Cách viết khác
// TH1: Tìm mảng các giá trị lẻ
let is0dd = function (arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            res.push(arr[i]);
        }
    }
    return res;
}
// TH2: Tính tổng các giá trị trong mảng
let sumArr = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            total += arr[i];
        }
    }
    return total;
}
// Kết hợp 2 hàm để tính tổng các giá trị lẻ trong mảng
console.log(sumArr(is0dd(1, 2, 3, 4, 5)));

// 3. Tính chất 3: Có thể được trả về từ functions khác
const funcA = function (a, b) {
    return function (c) {
        return a + b + c
    }
}

const data = funcA(4, 5); // Trả về function khi gọi funcA
console.log(data);

// thực thi function data, truyền vài đối số
console.log(data(6));

// 3 cách viết function
// 1. Function bình thường
function sum(a, b) {
    return a + b;
}

// 2. Tính chất 1: Gán function cho 1 biến - function expression
// Function không có tên = anonymous function
let sumNumber = function (a, b) {
    return a + b;
}
console.log(sumNumber(1, 2));

//3.  Cách viết function: Arrow function 
let sumArrow = (a, b) => {
    return a + b;
    // function chỉ có 1 câu lệnh return có thể viết như sau
    // let sumArrow = (a, b) => a + b;
}


// Vòng lặp forEach
// Khai báo mảng các số
let numbers = [1, 2, 3, 4, 5, 6]

// In ra các phần tử của mảng ( sử dụng hàm không có tên)
numbers.forEach(function(value, index) {
    console.log(value, index);
})

// Viết kiểu Arrow function
numbers.forEach(value => {
    console.log(value);
})

// Vòng lặp for...of: chỉ lặp qua giá trị
for (const value of numbers) {
    console.log(value);
}
let sum = 0;
for (const value of numbers) {
    sum += value;
}
console.log();