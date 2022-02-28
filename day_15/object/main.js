// object gồm
// property - thuộc tính; mô tả đặc điểm, tính chất của 1 đtg
// method - phương thức: mô tả về hành động

// so sánh method - function: fuction có thể gọi độc lập được còn method gắn liền với đối tượng

// 1. khởi tạo 1 object ntn

let emptyObj = {} // object dạng mảng rỗng
// Có 2 cách khởi tạo 1 object
// C1: khởi tạo object rỗng, sau đó điền giá trị cho nó
let person = {}
person.id = 1
person.name = "Nguyễn Văn A"
person.address = "Hà Nội"
person.sayHello = function() {
    console.log('Xin chào các bạn');
}
person.eat = function(name) {
    console.log(`Đang ăn ${name}...`);
}

console.log(person);

// lấy giá trị của object
console.log(person.name);
console.log(person.address);
person.sayHello();
person.eat("cơm")
person.eat('pizza')

// Set lại giá trị
person.id = 10;
person.address = "Hà Nam"

console.log(person);

// Xóa thuộc tính
delete person.id
console.log(person);


// C2: Vừa khai báo, vừa khởi tạo giá trị cho object (khuyên dùng)
let user = {
    id : 1,
    name : "Phương Loan",
    age : 25,
    // showInfo1() {
    //     console.log(`Minh tên là ${naem}. Năm nay mình ${age} tuổi`);
    // }
    showInfo1 : function () {
        console.log(`Minh tên là ${user.name}. Năm nay mình ${user.age} tuổi`);
    },
    showInfo2 : function () {
        console.log(`Minh tên là ${user.name}. Năm nay mình ${user.age} tuổi`);
    },
    "first name" : "Phương"

}
console.log(user);
user.showInfo1()
user.showInfo2()

// c1 : lấy ra 1 key, dùng dấu chấm (nên dùng)
console.log(user.name);
// C2: sử dụng dấu ngoặc vuông
console.log(user["name"]);
console.log(user["first name"]);


// một số phương thức thao tác trên object
let student = {
    name: "Nguyễn Văn A",
    age: 19,
    email: "nguyenvana@gmail.com"
}
// 1. Lấy danh sách key của object => trả về mảng các key
console.log(Object.keys(student));

// 2. Lấy danh sách value của object
console.log(Object.values(student));

// 3. Kiểm tra 1 key có nằm trong object hay không
console.log(student.hasOwnProperty("email")); // true
console.log(student.hasOwnProperty("name")); // true
console.log(student.hasOwnProperty("address")); // false


// Các cách duyệt mảng: for, while, do-while, forEach, for...of
// Duyệt object: for, for...in
// C1: for...in
for (const key in student) { // duyệt qua các key của đối tượng student
    console.log(`key: ${key} - value : ${student[key]}`);
}

// C2: sử dụng vòng lặp for
// Lấy ra mảng các key của object student
let keys = Object.keys(student);

// sử dụng vòng for qua các mảng keys
for (let i = 0; i < keys.length; i++) {
    // key = keys[i]
    // ví dụ: name = key[0]
    console.log(student[keys[i]]);
}