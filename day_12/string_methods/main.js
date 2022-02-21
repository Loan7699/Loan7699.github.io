let myString = "Học JS string methods tại đây";

// 1. Length => độ dài chuỗi
console.log(myString.length);

// 2. Find index => tìm vị trí của 1 kí tự xh đầu tiên nằm trong 1 chuỗi, nếu ko tìm được là -1
console.log(myString.indexOf("JS, 6"));
// tính từ vị trí 0, 6 tính từ JS, có thể truyền 2 tham số, khác với "search" chỉ đc 1 tham số

// 3. Cut String
console.log(myString.slice(4, 6));
// 4 là kí tự bđ, 6 là kết thúc
console.log(myString.slice(4));
console.log(myString.slice(-3, -1));
// cắt từ phải sang

// 4. replace
console.log(myString.replace("JS", "Javascript"));
console.log(myString.replace(/JS/g, "Javascript"));

// 5. convert to upper case
console.log(myString.toUpperCase());

// 6. convert to lower case
console.log(myString.toLowerCase());

// 7. trim => loại bỏ kí tự khoảng trắng thừa 2 đầu
console.log(myString.trim());

// 8. Split => cắt 1 chuỗi thành 1 array, có điểm chung

// 9. get a character by index => lấy 1 kí tự từ 1 index cho trước
let myString1 = "Phuong Loan"
console.log(myString1.charAt(9));
console.log(myString1.charAt(11));
console.log(typeof myString1.charAt(9));

console.log(myString1[1]);


