// Bài 1 (Đảo ngược số nguyên)Cho số nguyên x được biểu diễn dưới dạng 32bit, trả về x với giá trị đảo ngược. Nếu đảo ngược x nằm ngoài [-2^31; 2^31-1] thì trả về 0

function reverseInteger(x) {

    // khai báo biến x đảo ngược, dấu của x, GTTĐ của x
    let reverse = 0;
    let a = 1;
    digitX = Math.abs(x);

    // vòng lặp: khi GTTĐ của x > 0
    while ( digitX > 0) {
        // phần dư = GTTDdx % 10
        let mod = digitX % 10;
        // đảo ngược x = reverse  + phần dư
        reverse = reverse * 10 + mod;
        // cập nhật lại GTTĐ x mới
        digitX = (digitX - mod) / 10;
    }

    if (x < 0) {
        // nếu x âm
        a = -1;
    }

    if ( reverse > Math.pow(2,31) ) {
        // kiểm tra điều kiện khoảng giá trị
        return 0;
    }

    // trả về đảo ngược của GTTĐ x * dấu của x
    return reverse*a;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));


// Bài 2: (Số la mã sang số nguyên)
function romanToInteger(string) {

    // khai báo object gồm giá trị các kí hiệu
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    // lấy độ dài chuỗi ban đầu
    let t = string.length;

    // chuỗi rỗng => số nguyên 0
    if (t == 0) {
        return 0;
    }

    // độ dài chuỗi = 1
    if (t == 1) {
        // trả về giá trị tương ứng key của obj = phần tử chuỗi
        return symbol[string[0]];
    }
    
    // số nguyên bđ = giá trị key của obj tương ứng phần tử cuối của chuỗi
    let number = symbol[string[t-1]]; 
    for (let i = t-2; i >= 0; i--) { // lặp từ ptu 2 từ cuối lên của chuỗi
        // so sánh giá trị trước, sau
        if (symbol[string[i]] < symbol[string[i+1]]) {
            number -= symbol[string[i]];
        } else {
            number += symbol[string[i]];
        }
    }

    return number;
}

console.log(romanToInteger("D"));
console.log(romanToInteger("MCMXCIV"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("IV"));
console.log(romanToInteger(""));
console.log(romanToInteger("XXVII"));

// lấy key của obj
// let a = { b: 1}
// const x = 'b';
// console.log(a[x]);