// Bài 1:
// Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra
// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// Nếu số đó chia hêt cho 5 thì in ra “Buzz”
function checkDivisible(a) {
    if (a%3 ==0 && a%5 ==0) {
        console.log("FizzBuzz");
    }
    if (a%3 == 0) {
        console.log("Fizz");
    }
    if (a%5 == 0) {
        console.log("Buzz");
    }
}
checkDivisible(6)
checkDivisible(5)
checkDivisible(15)

// Bài 2:
// Viết function giải phương trình bậc nhất (ax + b= 0)
// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả
function equation1(a, b) {
    if (a == 0) {
        if (b == 0) {
            console.log("Phương trình vô số nghiệm");
        } else {
            console.log("Phương trình vô nghiệm");
        }
    } else {
        console.log(`Phương trình có 1 nghiệm ${-b/a}`);
    }
}
equation1(1, -2)
equation1(0, -2)
equation1(0, 0)

// Bài 3:
// Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)
// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả
function equation2(a, b, c) {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                console.log("Phương trình vô số nghiệm");
            } else {
                console.log("Phương trình vô nghiệm");
            }
        } else {
            console.log(`Phương trình có 1 nghiệm ${-c/b}`);
        }
    } else {
        let denta = Math.pow(b,2)-4*a*c;
        if (denta < 0) {
            console.log("Phương trình vô nghiệm")
        } else if (denta == 0) {
            console.log(`Phương trình có nghiệm duy nhất ${-b/2*a}`);
        } else {
            console.log(`Phương trình có 2 nghiệm ${(-b+Math.sqrt(denta))/4*a} và ${(-b-Math.sqrt(denta))/4*a}`)
        }
    }
}
equation2(1, 2, 1)
equation2(2, -1, -3 )
equation2(0, -1, 0)

// Bài 4:
// Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không
// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”
function year(a) {
    if (a % 100 == 0) {
        if (a % 400 == 0) {
            console.log(`${a} là năm nhuận`);
        } else {
            console.log(`${a} không là năm nhuận`);
        }
    } else {
        if (a % 4 == 0) {
            console.log(`${a} là năm nhuận`);
        } else {
            console.log(`${a} không là năm nhuận`);
        }
    }
}
year(2100)
year(2012)
year(2400)

// Bài 5:
// Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng
// Sử dụng return
function bmi(M, H) {
    let result = M/(H*2);
    return result
}
console.log(bmi(43, 1.5))

// Bài 6
// Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng
// Sử dụng return
function temperature(T) {
    let nhietDoF = 1.8*T + 32;
    return nhietDoF
}
console.log(temperature(50))

