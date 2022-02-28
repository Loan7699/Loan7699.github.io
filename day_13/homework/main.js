// Bài 1: Tìm số lớn nhất trong mảng
function arrayMax(number) {
    // gán max = giá trị đầu tiên của mảng
    let max = number[0];
    for (let i = 0; i < number.length - 1; i++) {
        if (max < number[i + 1]) {
            max = number[i + 1];
        }
    }
    return max;
}
console.log(arrayMax([1, 2, 9, 0]));
console.log(arrayMax([11, 12, 15, 0]));

function findMax_02(arr) {
    return Math.max(...arr)
}

// Bài 2: Tìm số nhỏ nhất trong mảng
function arrayMin(number) {
    let min = number[0];
    for (let i = 0; i < number.length - 1; i++) {
        if (min > number[i + 1]) {
            min = number[i + 1];
        }
    }
    return min;
}
console.log(arrayMin([1, 2, 9, 5]));
console.log(arrayMin([11, 12, 15, 0]));

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2. Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function array_3(number) {
    let new_array = [];
    for (let i = 0; i < number.length; i++) {
        new_array[i] = number[i] % 2;
        // result.push(number[i] % 2)
    }
    return new_array;
}
console.log(array_3([4, 2, 5, 6, 2, 7]));
console.log(array_3([3, 5, 7, 9, 10]));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function copyArr(string) {
    let arr = string.split('');
    let result = [];
    for (let i = 0; i < 10; i++) {
        result = result.concat(string);
    }
    return result.join('');
    // return string.repeat(10);
}
console.log(copyArr('a'));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
function repeatString(string) {
    let arr = string.split('');
    let result = ["a"];
    for (let i = 1; i < 10; i++) {
        result = result.concat('-', string);
    }
    return result.join('');
}
console.log(repeatString("a"));

function repeatString_1(string) {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result[i] = string;
    }
    return result.join('-');
}
console.log(repeatString_1('a'));