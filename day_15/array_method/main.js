// map(): duyệt qua các phần tử của mảng, thực hiện các thao tác, trả về mảng mới có độ dài bằng mảng ban đầu
// Viết hàm cho phép truyền vào 1 mảng các số
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Vd : modulo2([4,2,5,6,2,7]) => [0,0,1,0,0,1]

function modulo2(arr) {
    // const result = arr.map(e => e % 2)
    // return result

    return arr.map((e) => e % 2);
}

console.log(modulo2([4, 2, 5, 6, 2, 7]));

// Ví dụ : Tìm các số lẻ trong mảng
// Cách truyền thống
function oddNumbersNotFilter(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(oddNumbersNotFilter([4, 2, 5, 6, 2, 7]));

// Sử dụng filter: lọc ra các phần tử của mảng thỏa mãn điều kiện
// filter = for + if
function oddNumbers(arr) {
    // const result = arr.filter(e => e % 2 == 1)
    // return result

    return arr.filter((e) => e % 2 == 1);
}

console.log(oddNumbers([4, 2, 5, 6, 2, 7]));

// find(): Lặp qua các phần tử của mảng và tìm ra phần tử đầu tiên thỏa mãn điều kiện
// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7])); // => 6 do trả về giá trị


// findIndex(): Giống như find(), nhưng trả về chỉ số của phần tử thỏa mãn điều kiện
// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5

function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7])); // => 5 do trả về chỉ số

// some()
// Lặp qua các phần tử của mảng để kiểm tra điều kiện
// Nếu có 1 phần tử thỏa mãn điều kiện => true
// Nếu không có phần tử nào thỏa mãn điều kiện => false
// Kiểm tra xem có giá trị nào trong mảng có lớn hơn 1 không?

function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}

console.log(getNumberGreater1([1, -2, -3, -4])); // false
console.log(getNumberGreater1([2, -2, -3, -4])); // true


// every()
// Lặp qua các phần tử của mảng để kiểm tra điều kiện
// Nếu có 1 phần tử không thỏa mãn điều kiện => false
// Nếu tất cả phần tử thỏa mãn điều kiện => true
// Kiểm tra xem tất cả giá trị trong mảng có lớn hơn 10 không?

function getNumberGreater10(arr) {
    return arr.every((e) => e > 10);
}
console.log(getNumberGreater10([11, 12, 13, 14])); // true
console.log(getNumberGreater10([11, 12, 13, 5])); // false