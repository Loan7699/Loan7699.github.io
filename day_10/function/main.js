// function

// Định nghĩa function
function sayHello() {
    console.log("Xin chao");
}

// Thực thi function
sayHello()

// Function có 1 tham số
function sayHelloWithName(name) {
    console.log(`Xin chao ${name}`);
}

sayHelloWithName("Nguyễn Văn A")
sayHelloWithName("Trần Thị C")

// Định nghĩa Funtion có 2 tham số
function sayHelloWithNameAndYear(name,year){
    console.log(`Xin chào ${name}. Năm nay ${2022-year} tuổi`);
}

sayHelloWithNameAndYear("Phuong Loan", 1999)

// Function có trả về kết quả
// Tính tổng hai số bất kì
function sum (num1 = 10, num2 = 20)
// giá trị mặc định nếu ko truyền giá trị
{
    let result = num1 + num2;
    return result

    // console.log(num1)=> kết quả ko in ra do các câu lệnh đằng sau từ khóa return sẽ không được thực thi
}

// Thực thi, lưu lại data dùng sau
let data = sum(3,4)
console.log(data);

// chỉ kiểm tra giá trị của function
// ko truyền giá trị
console.log(sum()) 
//=> num1=10, num2=20 lấy giá trị mặc định => 30
{}
// truyền 1 gtri
console.log(sum(3))
// => num1=3, num2=20; 3+20=23

//truyền 2 gtri
console.log(sum(2,3));
// => num1=2, num2=3 => 5
console.log(sum(data, 5))

// In ra dòng chữ: Xin chào các bạn.
function hello1(){
    console.log("Xin chào các bạn")
}
hello1()

// In ra dòng chữ : Xin chào X (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm).
function hello2(name){
    console.log(`Xin chao ${name}`)
}
hello2("Loan")
hello2("Phuong")

// In ra dòng chữ : Xin chào “X” (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm).
function hello3(name){
    console.log(`Xin chào "${name}"`);
}
hello3("Loan")

// Tính tổng 2 số a, b bất kỳ.
function sum1(a, b) {
    let tong = a+b;
    return tong
}
console.log(sum1(3,4));

// Tính bình phương 1 số bất kỳ.
function binhPhuong(a) {
    let result = Math.pow(a,2);
    return result
}
console.log(binhPhuong(3));

// Tính thế kỷ của 1 năm bất kỳ (năm là 1 số nguyên dương).
function theKy(year) {
    let result = Math.ceil(year/100)
    return result
}
console.log(theKy(1999))
console.log(theKy(2022))
console.log(theKy(2099))
console.log(theKy(1))

// Thực hiện các công việc buổi sáng
function lamCacCongViecBuoiSang() {
    // Thức dậy (10 dòng)
    thucDay()
    // Đánh răng (10 dòng)
    danhRang()
    // Ăn sáng (10 dòng)

    // Đi làm (10 dòng)

    // Nấu bữa trưa (10 dòng)
}

// để function nhỏ ở ngoài và gọi vào trong function lớn để thực thi
function thucDay() {}
function danhRang() {}

//Phạm vi sử dụng của biến

// Biến globe (toàn cục), được định nghĩa bên ngoài funtion, sử dụng được sau khi khởi tạo
let number = 10;
let email = "loan.ttp174887@sis.hust.edu.vn"

// function scope, chỉ sử dụng trong cặp {} của function
function anSang() {
    let monAn = "Phở"
    // monAn = "Phở"
    // nếu quên từ khóa khai báo biến let thì mặc định trở thành biến globe
    console.log(monAn);
    // vẫn in ra "Phở"
}

anSang()
// console.log(monAn)
// ko in ra do ở bên ngoài function

// block scope
{
    let message = "Hôm nay trời đẹp quá";
    console.log(message);
}
// console.log(message);
// ko truy cập được do ở bên ngoài phần khai báo và khởi tạo biến