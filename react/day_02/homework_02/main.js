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