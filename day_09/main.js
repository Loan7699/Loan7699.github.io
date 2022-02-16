
// // khai báo biến
// let name;
// console.log(name);
// // khi một biến được khai báo không được gán giá trị sẽ nhận kiểu DL là undefined

// //gán giá trị cho biến
// name = "Phuong Loan"
// //in giá trị biến
// console.log(name)

// //C1: Vừa khai báo biến, vừa gán giá trị cho biến
// let email = "loan.ttp"
// // let => có thể thay đổi được giá trị của biến, const => GT là bất biến
// console.log(email)

// //khai báo biến sử dụng const, cần khởi tạo giá trị biến cùng khai báo biến luôn
// const pi = 3.14;
// console.log(pi);

// // pi = 4; => báo lỗi

// //kiểm tra kiểu DL của biến
// console.log(typeof name)
// console.log(typeof email)
// console.log(typeof pi)

// //khai báo chuỗi rỗng
// let emptyString = "";


// //cộng chuỗi
// let firstName = "Phuong";
// let lastName = "Loan";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(fullName + 10 + 20); // bản chất Js coi là chuỗi "10" // => Phuong Loan1020
// // toán tử +, number => string
// console.log(10 + 20 + fullName); //=> 30Phuong Loan

// console.log(10 + 20 - fullName); // => string ko chuyển về number đc => ko thể tính toán => NaN (not a number)
// //toán tử -,*,/ string => number
// console.log("20" - "10"); //bản chất là 20-10=10
// console.log ('20'*'10');
// // ** => lũy thừa

// // let message = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997"; // sử dụng / trước "" để đánh dấu đây là thành phần bên trong chuỗi
// // console.log(message)

// let message = "Xin chào các bạn, " +
// "mình tên là \"Bùi Hiên\". " +
// "Mình sinh năm 1997";
// console.log(message)

// 1. console.log(""+1+0) "10"
// 2. console.log(""-1+0) -1
// 3. console.log(true + false) 1
// 4. console.log(6/"3") 2
// 5. console.log("2" * "3") 6
// 6. console.log(4+5+"px") '9px'
// 7. console.log("$"+4+5) $45
// 8. console.log("4"-2) 2
// 9. console.log("4px" - 2) NaN
// 10. console.log(7/0) infinity
// 11. console.log("-9"+5) '-95'
// 12. console.log("-9"-5) -14
// 13. console.log(null+1) null=> số 0 => kết quả 1
// 14. console.log(undefined + 1 ) NaN do undefined ko => number
// 15. console.log(typeof(7) + 1 ) number1
// 16. console.log(typeof "9" + 5) string5

// console.log(b + a); 23
// 2. console.log(c); lỗi
// 3. console.log(a + name); 1John
// 4. console.log(a + name + b); 1John22
// 5. console.log(a + b + name); 23John
// 6. console.log(name + a); John1
// 7. console.log(name + a + b); John122
// 8. console.log(name + (a + b)); John23
// 9. console.log(`Hello ${name}`); Hello John => $ cho phép truyền giá trị của biến, bên ngoài dấu $ giữ nguyên
// 10. console.log(`${name} + 1`); John+1
// 11. console.log(`${name + 1}`); 'John1'
// 12. console.log(`${name + a}`); John1
// 13. console.log(`a + b = ${a + b}`); a+b=23
// 14. console.log(`a + b = ${1 + 2}`); a+b=3
// 15. console.log(`1 + 2 = ${1 + 2}`); 1+2 = 3
// 16. console.log(`1 + 2 = ${a + b}`); 1+2 = 23

// let name = "Bui Hien"
// let year = 1997

// //sử dụng Template string
// let message = `Xin chào các bạn,
// mình tên là "${name}". 
// Mình sinh năm ${year}. 
// Năm nay mình ${2022-year} tuổi`;
// console.log(message);

// //ko sử dụng Template string
// let message1 = "Xin chào các bạn, mình tên là \"" + name + "\". Mình sinh năm " + year + ". Năm nay mình " + (2022 - year) + " tuổi"
// console.log(message1);

let num1 = 10;
let num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);

//giá trị của PI
console.log(Math.PI);

//làm tròn
//Math.round() : làm tròn bthg
//Math.floor() : làm tròn xuống đến số nguyên gần nhất
//Math.ceil() : làm tròn lên đến số nguyên gần nhất

// Random số: Random 1 số trong khoảng 0->1
// Math.random()

// một số hàm khác
console.log(Math.pow(2,4)); // cơ số 2, số mũ 4
console.log(Math.sqrt(16))
console.log(Math.abs(-4))

// Math.max: trả về số lớn nhất trong 1 dsach số
console.log(Math.max(1,2,4,5,6,7));
// Math.min: trả về số nhỏ nhất trong 1 dsach số
console.log(Math.min(1,2,4,5,6,7));
