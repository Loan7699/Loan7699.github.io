# Function
## Function la gi?
+ Cu phap:
```js 
function functionName(para_01,...,para_n) {
 // code thuc thi function
  }
functionName(para_01,...,para_n)
// thuc thi Function
```
+ Phan biet tham so (parameter) va doi so (argument)
  + parameter la bien trong khai bao ham
  + argument la gia tri thuc cua bien truyen vao ham
  ![vi du](https://media.techmaster.vn/api/static/9479/DvZgiVPr)

## Mot so loai function:
+ function ko co tham so/ co tham so
+ function co gia tri tra ve/ ko tra ve
  1. function ko co tham so:
   ```js
   function sayHello() {
       console.log("Xin chao cac ban")
   }
   sayHello()
   ```
   2. function co tham so
   ```js
   function sayHello(name) {
       console.log("Xin chao ${name}")
   }
   sayHello(Phuong Loan)
   // in ra Xin chao Phuong Loan
   ```
   3. function tra ve ket qua, su dung **Return**
   ```js
   function sum(a, b) {
       return a + b;
   }
   let dat = sum (a, b)
   console.log(data); // neu muon luu bien su dung sau
   console.log(sum(3,4)) // neu muon in luon ra ket qua
   ```
   **Note**: *nhung cau lenh dang sau return se khong duoc thuc thi*
   4. Function khong tra ve ket qua
   Đối với function không có từ khóa return thì coi như function đó không trả về kết quả

## Default Parameter ES6 (gia tri mac dinh cua tham so)
cho phep su dung neu chung duoc dinh nghia sai hoac ko duoc truyen gia tri
```js
function sum (num1 = 10, num2 = 20)
// giá trị mặc định nếu ko truyền giá trị
{
    let result = num1 + num2;
    return result
}
console.log(sum()) //=> num1=10, num2=20 lấy giá trị mặc định => 30
console.log(sum(3)) // => num1=3, num2=20; 3+20=23
console.log(sum(2,3));// => num1=2, num2=3 => 5
```
## Pham vi su dung cua bien (Scope):
+ Globe scope
  bien toan cuc neu duoc dinh nghia ben ngoai ham, se duoc su dung tu do
  ```js
  let name = "Phuong Loan"
  console.log(name)
  ```
+ Function scope
  bien duoc dinh nghia ben trong ham
  ```js
  function hello() {
    let name = "Phuong Loan";
    console.log(name);
   }
   hello(); // Phuong Loan
   console.log(name) // Lỗi
   ```
+ Block scope
  ```js
  {
    let name = "Phuong Loan";
    console.log(name); // Phuong Loan
    }
    console.log(name) // Lỗi
    ```
**Note**: *Nếu 1 bien khong co tu khoa khai bao bien, se tro thanh bien global*
```js
function sayHello() {
    number = 10;
    console.log(number);
}

sayHello() // 10

console.log(number); // 10
```

## Kieu du lieu Boolean:
+ gia tri: true/false
```js
let a = true;
let b = false;
let c = !a; // false
let d = !b; // false
```
+ xac dinh gia tri Boolean cho bien, bieu thuc ta sử dụng hàm Boolean()
```js
let a = 5;
console.log(Boolean(a)); // true

let b = 6;
let c = 10;
console.log(Boolean(b > c)); // false
```
+ Truthy & Falsy value
Truthy value la nhung gia tri ma khi ep kieu về Boolean thi se cho ra gia tri la true.
Nguoc lại, Falsy value la nhung gia tri ma khi ep kieu ve Boolean thi cho ra gia tri la false
**Note:**
*Co 6 gia tri sau duoc coi là falsy : false, 0, NaN, ‘’, null, undefined*
*Cac gia tri con lai, ngoai cac gia tri tren duoc goi la truthy*
```js
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false
```
## Cau lenh dieu kien if-else
+ Cau lenh **if**
Cu phap:
```js
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}
```
Vi du:
```js
let hour = 6;
if (hour < 10) {
    console.log("Good morning!");
}
```
+ Cau lenh **if-else**
Neu dieu kien dung thuc hien cau lenh trong **if**, nguoc lai thuc hien lenh trong **else**
Cu phap
```js
if (dieu kien) {
    // Code đuoc thuc thi neu dieu kien 1 dung
} else {
    // Code đuoc thuc thi neu dieu kien 1 sai
}
```
Vi du:
```js
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```
+ Cau lenh **if-else if-else**
chuyen sang dieu kien moi neu dieu kien tren sai
Cu phap:
```js
if (dieu kien 1) {
    // Code đuoc thuc thi neu dieu kien 1 dung
} else if (dieu kien 2) {
    // Code duoc thuc thi neu dieu kienn 1 sai và dieu kien 2 dung
} else {
    // Code duoc thuc thi neu dieu kien 1 và 2 sai
}
```
Vi du:
```js
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```
**Note**: 
"=": gan gia tri
Toan tu ==: so sanh ve mat gia tri
Toan tu ===: so sanh ca ve gia tri va kieu du lieu
## Toan tu 3 ngoi:
kiem tra dieu kien trong 1 dong code duy nhat
Cu phap:
```js
condition ? true_value : false_value;
```
Trong đo:
condition : Bieu thuc dieu kien
true_value : duoc tra ve neu dieu kien dung
false_value : duoc tra ve neu dieu kien sai
neu dieu kien dung thuc hien lenh sau **?**, dieu kien sai thuc hien lenh sau:
Vi du:
```js
let hour = 6

hour < 12 ? console.log("Good morning!") : console.log("Good afternoon!")
```