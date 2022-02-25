// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
// C1; includes
function checkElementExist(arr, a) {
    let check = arr.includes(a);
    return check;
}
console.log(checkElementExist([1,2,3,4,5], 5));
console.log(checkElementExist([1,2,3,4,5], 6));

// C2: indexOf

// C3: for...loop + if

function arr_3(arr, numb) {
    
}

// C4: some
function array_04(arr, numb) {
    return arr.some(function(value) {
        return value == numb;
    })
}
console.log(array_04([1,2,3,4,5]), 5);

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
// C1:
function getElementGreater(arr, a) {
    let new_arr = [];
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] > a) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
console.log(getElementGreater([1,2,3,4,5], 3));
console.log(getElementGreater([1,2,3,4,5], 5));

// C2: fiter
function getElementGreater_02)()
let ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// Bài 5: Viết function random 1 số nguyên trong khoảng min, max bất kì
// randomNumber(3,10) => 4
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
// randomHexCode() => #728a98
// randomHexCode() => #a72938
// mã màu gồm # [0-9, a-f]
// C1:
function randomHexCode() {
    let r = getRndInteger(0,255).toString(16);
    let g = getRndInteger(0,255).toString(16);
    let b = getRndInteger(0,255).toString(16);
    return `#${r}${g}${b}`;
}
console.log(randomHexCode());

// C2: 
// Viết 1 fuunction random 1 giá trị trong mảng
function randomElement(arr) {
    let index = Math.floor(Math.random()*arr.length) // random chỉ số
    return arr[index]; // lấy giá trị dựa trên chỉ số
}

function randomHexCode_1() {
    // Tạo mảng chứa các giá trị của mã màu hex [0-9, a-f]
    let array = ["0", '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f']
    let hex_code = ''

    // Sử dụng vòng lặp 6 lần, mỗi lần random 1 giá trị
    for (i = 0; i < 6; i++) {
        hex_code = hex_code + randomElement(array);
    }
    // Và cộng dồn với chuỗi "#" ban đầu
    return `#${hex_code}`
}
console.log(randomHexCode_1);


// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)

