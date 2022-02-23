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

function checkStringExist_1(begin, check) {
    return begin.includes(check);
}

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên
// Ví dụ:
// shortenString(“Xin chào các bạn”) => “Xin chào…”
// shortenString("hello’) => “hello”

function shortenString(string_2) {
    let new_string_2 = string_2;
    if (new_string_2.length <=8 ) {
        return new_string_2;
    } else {
        new_string_2 = new_string_2.substr(0, 8);
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
    // Remove khoảng trắng
    // C1:new_string_3 = new_string_3.replace(/ /g, "");
    // thay thế khoảng trắng
    // c2: sử dụng replaceAll 
    // C3: string = string.split(" ").join("")

    new_string_3 = new_string_3.replaceAll(" ", "")
    new_string_3 = new_string_3.toLowerCase();
    let reveser_string = "";
    // in thường chữ
    // 
    
    // C2: tách thành mảng sau đó đảo ngược và join thành chuỗi
    new_string_3 = new_string_3.split(" ").reverse().join("");
    // so sánh chuỗi ban đầu và chuỗi đảo ngược
    // if (new_string_3 == reveser_string) {
    //     return true;
    // } else {
    //     return false;
    // }
    return new_string_3 == reveser_string;
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
        for (i = 1; new_string_4[i] == 0; i++){
            new_string_4[0] = new_string_4[i]; 
            console.log(new_string_4);
        } 
    }
    let str = new_string_4.join('');
    return str;
}
console.log(arrangeNumber("50982"));
console.log(arrangeNumber("203950"));

function sortNumber(number) {
    // b1: chuyển từ number=> mảng
    let string_04 = number.toString()

    // b2: chuyển từ chuỗi sang mảng
    let arr = string_04.split("");

    // b3: sắp xếp mảng
    let arrSort = arr.sort();
    
    // b4: từ mảng về chuỗi
    let stringConvert = arrSort.join("");

    // b5: trường hợp 0
    let res = ""
    for ( let i = 0; i < stringConvert.length; i++) {
        if (stringConvert[i] != 0) {
            res = stringConvert[i] + stringConvert.slice(0,i) + stringConvert.slice(i+1)
            break;
        }
    }
    return Number(res); // convert chuỗi thành số
}
console.log(sortNumber(203950));

function sortNumber_1(number_1) {
    // b1: chuyển từ number=> mảng
    let string_04 = number_1.toString()

    // b2: chuyển từ chuỗi sang mảng
    let arr = string_04.split("");

    // b3: sắp xếp mảng
    let arrSort = arr.sort();

    for (let i = 0; i < arrSort.length; i++) {

        if (arrSort[i] != 0) {
            // sử dụng giá trị trung gian temp để đổi vị trí
            let temp = arrSort[i];
            arrSort[i] = arrSort [0];
            arrSort[0] = temp;
            break;
        }
    }
    let stringConvert = arrSort.join("");
    return Number(stringConvert);
}
console.log(sortNumber(156029));
    




// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường
// Ví dụ:
// “HELLO world” => “hello_world”
// “Xin Chào Các BẠN” => “xin_chào_các_bạn”
function snakeCaseString(string_5) {
    let new_string_5 = string_5;
    new_string_5 = new_string_5.replace(/ /g, "_");
    new_string_5 = new_string_5.toLowerCase();
    return new_string_5;
    // return string_5.replaceAll(" ", "_").toLowerCase()
}
console.log(snakeCaseString('HELLO world'));
console.log(snakeCaseString('Xin Chào Các BẠN'));