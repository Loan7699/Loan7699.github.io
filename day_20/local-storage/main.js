if(typeof(Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}

// 1. Lưu dữ liệu: localStorage.setItem
localStorage.setItem('name', 'Nguyễn Văn A');
localStorage.setItem('age', '35');
localStorage.setItem('IsStatus', 'true');

let numbers = [1,2,3,4,5,6];
localStorage.setItem('numbers', JSON.stringify(numbers)); // kiểu DL array, object khi lưu vào bị convert sang chuỗi nên cần sử dụng JSON để convert

let users = [
    {
        name: 'Nguyễn Văn A',
        age: 23
    },

    {
        name: 'Nguyễn Văn B',
        age: 30
    }

]

localStorage.setItem('users', JSON.stringify(users));

// 2. Lấy dữ liệu
let name = localStorage.getItem('name');
console.log(name);

console.log(localStorage.getItem('numbers')); // ra chuỗi JSON dạng chuỗi không phải mảng, cần sử dụng JSON.parse
console.log(JSON.parse(localStorage.getItem('numbers'))); // => lấy được array

console.log(localStorage.getItem('users')); // chỉ ra chuỗi JSON
console.log(JSON.parse(localStorage.getItem('users'))); // lấy ra mảng object

// lấy ra 1 giá trị ko tồn tại
console.log(localStorage.getItem('email')); // null

// 3. lấy ra số lượng key-value trong localStorage
console.log(localStorage.length);

// 4. Xóa 1 biến trong localStorage
localStorage.removeItem('name')

// 5. Xóa toàn bộ localStorage
localStorage.clear();