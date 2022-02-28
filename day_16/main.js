/*
Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

Ví dụ:
max2Numbers([2, 1, 3, 4]) => 3
max2Numbers([2, 1, 4, 3, 4]) => 3
*/

const max2Numbers = arr => {
    
    // sắp xếp phần tử mảng theo thứ tự giảm dần
    arr.sort((a, b) => b - a);
    // gán giá trị lớn nhất max = phần tử đầu tiên của mảng
    let max = arr[0];
    // vòng lặp for kiểm tra phần tử đầu tiên khác max thì trả về giá trị lớn thứ nhì của mảng
    for (let i = 1; i < arr.length; i++) {
        if (max != arr[i]) {
            return arr[i];
        }
    }
    return arr[1];
}
console.log(max2Numbers([2, 1, 3, 4]));
console.log(max2Numbers([2, 1, 4, 3, 4]));


/*
Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
Ví dụ:
getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].
*/

const getStringHasMaxLength = arr => {
    // khởi tạo mảng chứa độ dài từng chuỗi trong mảng
    let array_length = []
    // khởi tạo vòng lặp for duyệt các phần tử của mảng
    for (let i = 0; i < arr.length; i++) { 
        // lần lượt push các giá trị độ dài các phần tử vào mảng array_length
        array_length.push(arr[i].length);
        // tìm độ dài phần tử lớn nhất
        str_max = Math.max(...array_length);
    }
    // duyệt mảng bằng filter trả về mảng gồm các phần tử có độ dài bằng độ dài lớn nhất
    return arr.filter((arr) => arr.length == str_max); 
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));


/*
Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
Ví dụ:
getRandomElement([3, 7, 9, 11]) => 3
getRandomElement([3, 7, 9, 11]) => 9
*/
const getRandomElement = arr => {
    // random chỉ số mảng
    let index = Math.floor(Math.random() * arr.length);
    // trả về giá trị phần tử của mảng dựa trên chỉ số random
    return arr[index];
}
console.log(getRandomElement([3, 7, 9, 11]));


/*
Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
Ví dụ:
similarity([1, 2, 3], [1, 2, 4]) => [1,2]
similarity([1, 2, 3], [3, 4, 5]) => [3]
*/
const similarity = (arr1, arr2) => {
    return arr1.filter(value => arr2.includes(value));
}
console.log(similarity([1, 2, 3], [1, 2, 4]));
console.log(similarity([1, 2, 3], [3, 4, 5]));


/*
Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
Tham số 2: Là 1 số x <= 1000
Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
Ví dụ:
getTime("9:20:56", 7) => "9:21:3"
Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss
*/
let getTime = (string, t) => {
    // convert string sang mảng
    let arr = string.split(':');
    // đổi thời gian sang giây
    let time = Number(arr[0]) * 3600 +  Number(arr[1])* 60 + Number(arr[2]);
    // thêm thời gian t
    let new_time = time + t;
    // đổi định dạng giây về định dạng cũ
    let hh = Math.floor(new_time / 3600);
    let mm = Math.floor((new_time - hh*3600) / 60);
    let ss = new_time - hh*3600 - mm*60;
    return `${hh}:${mm}:${ss}`;
}
console.log(getTime("9:20:56", 7));


/*
Bài 6 (2 điểm). Cho mảng users như sau:
*/

let users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
let findUser = param => {
    return users.filter(user => (user.age > 25) && (user.isStatus == true) )
}
console.log(findUser(users));

// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần
let arrangeUser = param => {
    let arr_age = users.map(user => user.age).sort((a, b) => a - b);
    let new_user = [];
    for (let i = 0; i < users.length; i++) {
        new_user = new_user.concat(users.filter(user => user.age == arr_age[i]));
    }
    return new_user;
}
console.log(arrangeUser(users));


/*
Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
getCountElement(["one", "two", "three", "one", "one", "three"])
// Kết quả
{
    one: 3,
    two : 1,
    three : 2
}
*/

let getCountElement = arr => {
    arr.sort();
    let result = {};
    let count = 1;
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] == arr[i-1]) {
            count++;
            result.arr[i] = `${count}`;
        } else {
            count = 1;
            result.arr[i-1] = `${count}`;
        }
    }
   return result;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
