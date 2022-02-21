// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ:
// checkStringExist(“i love you”, “you”) => true
// checkStringExist(“i love you”, “hate”) => false

function checkStringExist(first_string, second_string) {
    if (first_string.indexOf(second_string) == -1) {
        return false
    } else {
        return true
    }
}
console.log(checkStringExist("i love you", "you"));
console.log(checkStringExist('i love you', 'hate'));

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên
// Ví dụ:
// shortenString(“Xin chào các bạn”) => “Xin chào…”
// shortenString("hello’) => “hello”

function shortenString(string_2) {
    let new_string_2 = string_2;
    if (new_string_2.length <=8 ) {
        return new_string_2;
    } else {
        new_string_2 = new_string_2.substr(0, 7);
        new_string_2 += "..."
        return new_string_2;
    }
}
console.log(shortenString('Xin chào các bạn'));
console.log(shortenString("hello"));


// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
// Ví dụ
// “Race car” => true,
// “hello world” => false.

function symetryString(string_3) {
    let new_string_3 = string_3;
    new_string_3 = new_string_3.replace(/ /g, "");
    new_string_3 = new_string_3.toLowerCase();
    reveser_string = "";
    for (i = new_string_3.length - 1; i >= 0; i--) {
        reveser_string += new_string_3[i];
    }
    if (new_string_3 == reveser_string) {
        return true;
    } else {
        return false;
    }
}
console.log(symetryString('Race car'));
console.log(symetryString('Hello word'));


// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
// Ví du
// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359
function arrangeNumber(string_4) {
    let new_string_4 = string_4.split('');
    new_string_4.sort();
    if (new_string_4[0] == 0) {
        new_string_4[0] = new_string_4[1];
        new_string_4[1] = new_string_4 [0]; 
    }
    let str = new_string_4.join('');
    return str;
}
console.log(arrangeNumber("53751"));

// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường
// Ví dụ:
// “HELLO world” => “hello_world”
// “Xin Chào Các BẠN” => “xin_chào_các_bạn”
function snakeCaseString(string_5) {
    let new_string_5 = string_5;
    new_string_5 = new_string_5.replace(/ /g, "_");
    new_string_5 = new_string_5.toLowerCase();
    return new_string_5;
}
console.log(snakeCaseString('HELLO world'));
console.log(snakeCaseString('Xin Chào Các BẠN'));