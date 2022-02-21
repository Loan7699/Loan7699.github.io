// Bài 1: Viết function truyền vào 1 số nguyên dương. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function calculateFactorial(a) {
    let result_01 = 1;
    for (i = 1; i <= a; i++) {
        result_01 = result_01*i;
    }
    return result_01;
}
console.log(calculateFactorial(5));

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString(‘hello’) => olleh
function reverseString(str) {
    let reverse = "";

    for (i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    return reverse;
}
console.log(reverseString("hello"));


// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”

function translate(code) {
    switch(code) {
        case ("VN"): {
            return "Xin chào";
        }
        case ("EN"): {
            return "Hello";
        }
        default: {
            return "Dont know";
        }
    }
}
console.log(translate('VN'));
console.log(translate("EN"));

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”
function subString (string) {
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += string[i];
    }
    result += "...";
    return result;
}
console.log(subString('xinchaocacbandenvoiTechmaster'));

// Bài 5: Viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.
// Gợi ý : sử dụng document.write()
function chuoiSo() {
    let string = "";
    for (let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            string += `<span style="color:red">${i}</span>`;
        } else {
            string += `<span style="color:green">${i}</span>`;
        }
    }
    document.write(string)
}
chuoiSo()