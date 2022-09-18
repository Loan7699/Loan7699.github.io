// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
// C1
let sortStudents = function(array) {
    return array.sort().reverse();
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

// C2: localeCompare
let sortStudents_02 = (array) => {
    let sortName = array.sort((a,b) => {
        return b.localeCompare(a)
    })
    return sortName;
}
console.log(sortStudents_02(['Đức', 'Nam', 'Hoa', 'Tuấn']));

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
// C1
let shuffle = function(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let j = Math.floor(Math.random() * i);
        // sử dụng biến tạm để đổi vị trí
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // sử dụng destructuring ES6
        // [arr[i], ar[j]] = [arr[i], ar[j]]
    }
    return array;
}
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));

// C2:
let shuffle_02 = arr => {
    return arr.sort(() => {
        return Math.random() - 0.5
    })
}
console.log(shuffle_02([1,2,3,4,5]));

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
// C1: sai
// let symmetricDifference = function (arr1, arr2) {
//     arr1.sort();
//     arr2.sort();
//     let new_arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] != arr2[i]) {
//             new_arr.push(arr1[i], arr2[i]);
//         }
//     }
//     return new_arr;
// }
// console.log(symmetricDifference([3, 2, 1], [4, 2, 1]));

// C2: 
function array(arr1, arr2) {
    // lọc ra gtri của arr1 ko nằm trong arr2
    let newArr1 = arr1.filter(value => !arr2.includes(value))
    // lọc ra gtri của arr2 ko nằm trong arr1
    let newArr2 = arr2.filter(value => !arr1.includes(value))
    return newArr1.concat(newArr2)
}
console.log(array([1, 2, 3], [1, 2, 4]));

// C3
function symmetricDifference(arr1, arr2) {
    // Nối 2 mảng lại với nhau
    let tmp = arr1.concat(arr2);

    // Sắp xếp tăng dần
    tmp.sort((a, b) => { return a - b; });

    let res = [];
    // [1, 1, 2, 2, 3, 3, 4, 4, 5, 8, 9]
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i - 1] != tmp[i] && tmp[i + 1] != tmp[i]) {
            res.push(tmp[i]);
        }
    }
    return res;
}
console.log(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 1, 2, 8, 9]));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
let union = function(arr1, arr2) {
    // cộng 2 mảng lại
    let arr = arr1.concat(arr2);
    // let arr = [...arr1, ...arr2];
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

// C2:
let union_02 = (arr1, arr2) => {
    // nối 2 mảng lại với nhau
    let arr = [...arr1, ...arr2];
    let result = [];
    for (let i = 0; i< arr.length; i++) {
        // kiểm tra từng phần tử của vòng lặp
        // nếu phần tử đó nằm trong result => bỏ qua
        // ko nằm trong result => push vào
        if (result.includes(arr[i]) == false) [
            result.push(arr[i])
        ]
    }
    return result;
}
console.log(union_02([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));