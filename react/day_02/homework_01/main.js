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


