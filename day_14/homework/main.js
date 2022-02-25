// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
let sortStudents = function(array) {
    return array.sort().reverse();
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
let shuffle = function(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
let symmetricDifference = function (arr1, arr2) {
    arr1.sort();
    arr2.sort();
    let new_arr = []
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
        if (arr1[i] != arr2[i]) {
            new_arr.push(arr1[i], arr2[i]);
        }
    }
    return new_arr;
}
console.log(symmetricDifference([3, 2, 1], [4, 2, 1]));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
let union = function(arr1, arr2) {
    // cộng 2 mảng lại
    let arr = arr1.concat(arr2);
    // tạo 1 mảng rỗng mới
    let new_arr = [];
    // push từng phần tử của mảng chung ra
    // nếu phần tử ấy vẫn có trong mảng chung thì bỏ, ko thì cho vào mảng rỗng
    for (let i = 0; i < arr.length; i++) {
        if (new_arr.includes(arr[i])) {
            continue;
        }
        new_arr.push(arr[i]);
    }
    return new_arr;
}
console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));