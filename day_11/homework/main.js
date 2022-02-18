let value = "a";
// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

function repeatString_01(string) {
    for (i = 1; i <= 9; i++) {
        string = string + value;
    }
    console.log(string);
    return string;
}
repeatString_01("a");

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
function repeatString_02(string) {
    for (i = 1; i <= 9; i++) {
        string = string + "-" + value;
    }
    console.log(string);
    return string;
}
repeatString_02("a");

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
function repeatString_03(string, n) {
    for (i = 1; i <= n; i++) {
        string = string + "-" + value;
    }
    console.log(string);
    return string;
}
repeatString_03("a", 5);

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
let sum = 0;
for (i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        sum = sum + i;
    }
}
console.log(sum);

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function calculateVolume(radius) {
    V = ((4 / 3) * Math.PI) * Math.pow(radius, 3);
    console.log(V);
}
calculateVolume(5)

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// Ví dụ :
// sum(3,8) = 22
// sum(8,3) = 22

function calculateSum(a, b) {
    let sum_01 = 0;
    if (a < b) {
        for (i = a + 1; i < b; i++) {
            sum_01 = sum_01 + i;
        }
    } else {
        for (i = a - 1; i > b; i--) {
            sum_01 = sum_01 + i;
        }
    }
    console.log(sum_01);
}
calculateSum(3, 8);
calculateSum(8, 3);
calculateSum(3,5)

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function soNguyenTo(n) {
    if (n < 2) {
        console.log(false);
        return 0;
    } else {
        let count = 0;
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 0) {
            console.log(true);
            return 1;
        } else {
            console.log(false);
            return 0;
        }
    }
}
soNguyenTo(1);
soNguyenTo(3);

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function sumSoNguyenTo(n) {
    let sum_02 = 0;
    for (i = 2; i <= n; i++) {
        let count = 0;
        for ( j = 2; j <= Math.sqrt(i) ; j++) {
            if(i % j == 0 ) {
                count++
            } 
        }
        if (count == 0) {
            sum_02 = sum_02 + i;
        }
    }
    console.log(sum_02);
}

sumSoNguyenTo(12);
sumSoNguyenTo(1);

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function sumUoc(n) {
    let sum_03 = 0;
    for (i = 1; i <= n; i++) {
        if(n % i == 0) {
            sum_03 = sum_03 + i
        }
    }
    console.log(sum_03);
}
sumUoc(1)
sumUoc(12)