// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Phương Loan";
number[2] = true;
console.log(number);

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];

// Thay đổi giá trị của mảng thông qua chỉ số
myArr[4] = 5;

// cho thành mảng rỗng
// C1:myArr = [];
// C2
// myArr.length = 0;
// console.log(myArr);

// Value type: áp dựng với kiểu dữ liệu nguyên thủy (primary type) ko bị thay đổi khi thay đổi giá trị
let text = "hi"
let mess = text

console.log(text, mess);

mess = "hello"

console.log(text, mess);

// Tính chất tham chiếu của array (reference type): cùng link đến địa chỉ ô nhớ
// let arr1 = [1, 2, 3, 4]
// let arr2 = arr1

// console.log(arr1);
// console.log(arr2);

// arr2[0] = 5;

// console.log("sau khi thay đổi giá trị");
// console.log(arr1);
// console.log(arr2);

// So sánh
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]
let arr3 = [4, 3, 2, 1]
let str = "1,2,3,4"

console.log(arr1 == arr2); // false do lưu vào 2 địa chỉ ô nhớ khác nhau
console.log(arr3 == arr3.sort()); // [4, 3, 2, 1] == [1, 2, 3, 4] => true do vẫn cùng 1 địa chỉ ô nhớ
console.log(arr1 == str); // => true (vì khi so sánh sẽ convert arr sang chuỗi(arr.toString) và so sánh 2 chuỗi)
console.log(arr1 === str); // false do so sánh cả kiểu dữ liệu và giá trị

// sử dụng vòng lặp qua array
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Tính tổng các giá trị của mảng
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// Tính tổng các giá trị lẻ của mảng
let sum0dd = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        sum0dd += numbers[i];
    }
}
console.log(sum0dd);

// Câu 1: Kiểm tra mảng có phải là mảng tăng dần hay không
// Ví dụ : Mảng tăng dần [1,2,6,8,9]
// Ví dụ : Mảng không tăng dần [1,4,5,8,9]
function checkArrAsc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    } return true;
}
console.log(checkArrAsc([1, 3, 5, 4]));
console.log(checkArrAsc([1, 2, 3, 4, 5]));

// Bài 2: Kiểm tra mảng có phải là mảng giảm dần hay không
function checkArr_2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    } return true;
}
console.log(checkArr_2(([5, 4, 2, 6])));


// Bài 3: Kiểm tra mảng có phải là mảng số chẵn tăng dần hay không
function checkArr_3(arr) {

    // kiểm tra giá trị chẵn
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return false;
        }
    }

    // kiểm tra giá trị tăng dần
    // for (let i = 0; i < arr.length - 1; i++) {
    //     if (arr[i] > arr[i + 1]) {
    //         return false;
    //     }
    // } return true;

    // truyền hàm bài 1 để kiểm tra tăng dần
    let result = checkArrAsc(arr);
    return result;
}
console.log(checkArr_3([2, 4, 6, 8]));
console.log(checkArr_3([1, 2, 4]));


// Bài 4: Kiểm tra mảng có phải là mảng số lẻ giảm dần hay không
function checkArc_4(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] %2 == 0) {
            return false
        }
    } return checkArrAsc(arr);
}
console.log(checkArc_4([1, 2, 3, 5]));

