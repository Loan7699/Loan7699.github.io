// 1. Viết function cho phép nhập vào key và value tương ứng, gán key và value vào 1 object. Cho phép nhập số lượng key và value tùy ý, chỉ dừng khi nào người dùng bấm cancel hoặc nhập giá trị rỗng

// Reverse chuỗi
function reverseString(string) {
    let newString = '';
    for (let i = string.length -1; i >= 0; i--) {
        if (string[i] == ' ') {
            continue;
        }
        newString += string[i];
    }
    return newString;
}
console.log(reverseString('math1 2hhkkkk      '));
console.log(reverseString('baby'));
console.log(reverseString('12234 string'));
