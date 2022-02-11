# JavaScript co ban
## cach su dung file Javacript
co 2 cach su dung JavaScript:
+ su dung Tag script thuong dat trong phan cuoi body
`<script>console.log("Hello world")</script>`
+ viet 1 file.js va link vao file.html thong qua thuoc tinh **src**
`<script src="./main.js"></script>`

## JavaScript Variables
su dung 2 tu khoa de khai bao bien trong JavaScript: **let/const**
co 2 cach khai bao bien
+ khai bao bien va khong gan gia tri :**let age;**. Khi do bien se nhan kieu du lieu la undefined
`let age;`
+ khai bao bien va gan gia tri: **let email = loan.ttp174887@sis.hust.edu.vn**
`let email = loan.ttp174887@sis.hust.edu.vn`

***Note***: khai bao voi **let** co the thay doi gia tri cua bien sau khi gan, con voi **const**, can khoi tao gia tri bien luon ngay khi khai bao va khong thay doi duoc gia tri cua bien

khai bao chuoi rong:
`let emtyString = ""`

in gia tri cho bien vua khai bao va hien thi o **console** trong devtool
`console.log(email) // loan.ttp174887@sis.hust.edu.vn`
## Quy tac dat ten cho bien
+ chua chu, so, _, $
+ ky tu dau tien khong duoc la so, nen bat dau bang so
+ co phan biet in hoa va thuong
+ khong trung voi cac tu khoa trong JavaScript, tra tai [link sau](http://https://www.w3schools.com/js/js_reserved.asp)

## Cach kiem tra kieu DL cua bien
su dung toan tu typeof

    let number = 10;
    console.log(typeof number); // "number"
    let name = "Phuong Loan";
    console.log(typeof name); // "string"

## Mot so kieu DL cua bien:
+ String: kieu DL chuoi chua cac ki tu, duoc dat trong cap dau nhay don hoac kep
`let name = “Phuong Loan”;`
***Note***: them dau \ neu thanh phan chuoi chua dau nhay don hoac kep
`let message = "Xin chào các bạn, mình tên là \"PhuongPhLoan\"";`
sử dụng dấu + để nối chuỗi khi Enter xuong hang
`let message = "Xin chào các bạn, " +
"mình tên là \"Phuong Loan\". "`
sử dụng dấu + để ghép hai chuỗi (hoặc biến) lại với nhau.

Ex: 

    let firstName = "Phuong";
    let lastName = "Loan";
    let fullName = firstName + " " + lastName; // Phuong Loan


+ **number**: kieu DL so gom tap hop cac so, bao gom ca so am
  `let age = 25;`
+ **undefined**: khong xac dinh khi bien khong duoc khoi tao gia tri
+ **boolean**: true/false
+ **null** (khong ton tai)

## Toan tu +,-,*,/ giua cac chuoi
+ toan tu **+**: 
string+number: kieu number => string
Ex: `console.log(fullName + 10 + 20); // PhuongLoan1020`
number1+numeber2+string
Ex: `console.log(10 + 20 + fullName); // 30Phuong Loan`

+ toan tu -,*,/,**:
string => number
Ex: `console.log("20" - "10"); //bản chất là 20-10=10`
neu khong chuyen duoc ket qua tra ve NaN
Ex: `console.log(10 + 20 - fullName); // NaN`

## Khai báo chuỗi sử dụng ký tự back-tick ``
co the viet trong nhieu dong va su dung nhay don nhay kep ma khong can dung them cac ki tu khac
Cu phap: ``string_text ${expression} string_text`
Ex1:
    
    let name = "Phuong Loan";
    let year = 1999;

    console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`);

Ex1:
    
    let b = 22;
    let a = 1;
    let name = John;
    console.log(`Hello ${name}`); Hello John // trong $: truyen gia tri cua bien vao, o ngoai giu nguyen
    console.log(`a + b = ${a + b}`); a+b=23

## Math object trong Javascript
+ Math.PI : Lấy ra giá trị của số PI
+ Math.round(number) : Làm tròn số bình thường
+ Math.ceil(number) : Làm tròn số lên
+ Math.floor(number) : Làm tròn số xuống
+ Math.random() : Random 1 số ngẫu nhiên trong khoảng 0 -> 1
+ Math.min(number1, number 2, … number n) : 
+ Lấy ra giá trị nhỏ nhất trong danh sách số
+ Math.max(number1, number 2, … number n) :
+ Lấy ra giá trị lớn nhất trong danh sách số
+ Math.pow(a, b) : Số mũ (a^b)
+ Math.sqrt(number) : Căn bậc 2
+ …

Ex:

    console.log(Math.PI); // 3.141592653589793

    console.log(Math.ceil(1.2)); // 2
    console.log(Math.ceil(1.7)); // 2
    
    console.log(Math.floor(2.1)); // 2
    console.log(Math.floor(2.6)); // 2

    console.log(Math.round(2.1)); // 2
    console.log(Math.round(2.6)); // 3

    console.log(Math.pow(2,4)); // cơ số 2, số mũ 4, 16

    onsole.log(Math.sqrt(16)) // can bac hai, 4

    console.log(Math.abs(-4)) // GTTD, 4

    console.log(Math.max(1,2,4,5,6,7));
    console.log(Math.min(1,2,4,5,6,7));

Tham khao them tai day [link sau](http://https://www.w3schools.com/js/js_math.asp)