// 1. To string(), join(), 
// To string(): chuyen tu array sang string, ko chỉ định được dấu phân tách chuỗi
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
]
console.log(languages.toString()); // Javascript,PHP,Ruby

// Join(): chuyển từ array sang string, khác toString(), join() có thể chỉ định dấu phân tách bất kì, mặc định là dấu ","
console.log(languages.join("*")); // Javascript*PHP*Ruby

// 2. pop(), push(): làm thay đổi mảng ban đầu,
// pop(): xóa phần tử cuối cùng ra khỏi mảng, trả về phần tử đã loại bỏ

console.log(languages.pop());
console.log(languages);

// 2. push(): thêm 1 hoặc nhiều phần tử cuối mảng, trả về độ dài mới của mảng
console.log(languages.push("Java", "Dart")); // trả về độ dài mảng: 4
console.log(languages); // trả về mảng mới

3. // Shift, unshift
// shift: xóa đi 1 phần tử ở đầu mảng, trả về phần tử đã xóa
console.log(languages.shift()); // trả về phần tử đầu là "Javascript"
console.log(languages); // trả về mảng mới sau khi xóa

// unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mảng mới
console.log(languages.unshift("Javascript")); // độ dài mới: 4
console.log(languages); // mảng mới

// 4. splicing:
// xóa 1 phần tử bất kì trong mảng
let language = [
    "Java",
    "Dart",
    "JavaScript",
    "PHP",
    "Ruby"
]
language.splice(1, 2); // 1: index(số chỉ) phần tử bắt đầu xóa, 2: số phần tử muốn xóa
console.log(language);
// chèn 1 phần tử bất kì vào mảng
language.splice(1, 0, "Javascript")
console.log(language); // ['Java', 'Javascript', 'PHP', 'Ruby']

// 5. concat: nối 2 mảng với nhau
let language_1 = [
    "Java",
    "Dart"
]
let language_2 = [
    "PHP",
    "Ruby"
]
console.log(language_1.concat(language_2));

// 6. slicing: cắt 1 vài hoặc toàn bộ phần tử của mảng
console.log(language.slice(1,2)); // "Javascript" 1: vị trí bđ cắt; 2: vị trí con trỏ kết thúc cắt
// language.slice(1); // cắt toàn bộ phần còn lại mảng từ vị trí 1
// language.slice(0); // cắt toàn bộ mảng, có thể truyền số âm

// 7. reverse(): đảo ngược thứ tự các phần tử của mảng, ghi đè lên mảng ban đầu
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse()); // ['Mango', 'Apple', 'Orange', 'Banana']

// 8. sort(): sắp xếp các phần tử 1 mảng theo thứ tự bảng chữ cái và tăng dần, ghi đè lên mảng ban đầu
console.log(fruits.sort());

// 9. indexOf(): trả về chỉ mục đầu tiên (vị trí) của 1 giá trị được chỉ định, trả về -1 nếu không tìm được
console.log(index = fruits.indexOf("Apple"));
// bắt đầu ở chỉ mục 3
let fruits_1 = ["Banana", "Apple", "Orange", "Apple", "Mango", "Apple"];
console.log(fruits_1.indexOf("Apple", 3));
// chỉ số âm thì sẽ đếm từ cuối chuỗi
console.log(index = fruits.indexOf("Apple", -1)); // 4 do tính từ cuối

// lastIndexOf(): trả về chỉ mục cuối cùng của 1 giá trị được chỉ định (tìm từ phần tử cuối đến đầu), trả về -1 nếu không tìm được
console.log(fruits_1.lastIndexOf("Apple")); // 5

console.log(fruits_1.lastIndexOf("Apple", 4)); // 3 do đếm từ vị trí 4 lên đầu chuỗi

// 10. includes(): trả về true nếu mảng chứa giá trị chỉ định, ngược lại là true, phân biệt chữ in hoa và thường
console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Banana", 3)); // false vì tìm từ chỉ định 3 đến cuối chuỗi
