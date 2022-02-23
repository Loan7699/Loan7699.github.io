# String methods Javascript
trong 1 chuoi co string.length - 1 ki tu, bat dau ki tu dau tien la tu vi tri 0
## 1. indexOf, lastIndexOf, includes
chi ra vi tri ki tu trong chuoi
### 1.1. indexOf
+ Cach su dung:
tra ve vi tri xuat hien dau tien cua 1 gia tri trong chuoi
indexOf() tra ve -1 neu gia tri khong duoc tim thay
indexOf() co phan biet chu hoa va chu thuong
+ Cu phap:
  ```js
  string.indexOf(gia tri tim kiem, vi tri bat dau tu)
  ```
  vi tri bat dau tu mac dinh la 0
  Khac voi **search()** khong truyen doi so vi tri bat dau

+ Vi du:
  ```js
  let text = "Hello world, welcome to the universe.";
  let result = text.indexOf("welcome"); // 13 do mac dinh vi tri bat dau tu 0
  ```
  ```js
  let text = "Hello world, welcome to the universe.";
  let result = text.indexOf("Welcome"); // -1 do khong tim thay gia tri
  ```
  ```js
  let text = "Hello world, welcome to the universe.";
  text.indexOf("e", 5); // tim gia tri tu vi tri bat dau la 5 => 14 (chu e dau tien o vi tri 14 tim tu vi tri 5)
  ```
### 1.2 lastIndexOf()
+ Cach dung:
  tra ve vi tri xuat hien cuoi cung cua gia tri tim kiem trong chuoi
  lastIndexOf() tim kiem chuoi tu cuoi den dau
  tra ve -1 neu ko tim thay
  phan biet chu hoa voi chu thuong

+ Cu phap:
  ```js
  string.lastIndexOf(gia tri tim kiem, vi tri bat dau tim tu)
  ```
  vi tri bat dau mac dinh la do dai chuoi

+ Vi du:
  ```js
  let text = "Hello planet earth, you are a great planet.";
  let result = text.lastIndexOf("planet"); // 36 do tim tu cuoi
  ```
  ```js
  let text = "Hello planet earth, you are a great planet.";
  let result = text.lastIndexOf("Planet"); // -1 do ko tim thay gia tri
  ```
  ```js
  let text = "Hello planet earth, you are a great planet.";
  let result = text.lastIndexOf("planet", 20); // do tim tu vi tri 20 ve dau chuoi
  ```
### 1.3 includes()
+ Cach dung:
  tra ve **true** neu 1 chuoi chua 1 chuoi duoc chi dinh, nguoc lai tra ve **false**
  phan biet chu hoa va chu thuong

+ Cu phap:
  ```js
  string.includes(chuoi mac dinh, vi tri bat dau tim kiem)
  ```
  vi tri bat dau mac dinh la 0
+ Vi du:
  ```js
  let text = "Hello world, welcome to the universe.";
  let result = text.includes("world"); // true
  ```
  ```js
  let text = "Hello World, welcome to the universe.";
  let result = text.includes("world", 12); // false
  ```
## 2. slice, substring, substr
dung de cat 1 phan cua chuoi
### 2.1. slice
+ Cach dung:
  tra ve trong 1 chuoi moi, ko lam thay doi chuoi goc

+ Cu phap:
  ```string.slice(start, end)```
  start: vi tri bat dau cat chuoi (bat buoc)
  end: vi tri ket thuc cat chuoi, mac dinh la do dai chuoi
  neu end la vi tri am thi se tinh tu cuoi chuoi

+ Vi du:
  ```js
  let text = "Hello world!";
  let result = text.slice(0, 5); // Hello
  ```
  ```js
  let result = text.slice(3); // "lo world" do vi tri bat dau la 0, ket thuc la do dai chuoi
  ```
  ```js
  let result = text.slice(-1); // "!" do tinh tu cuoi chuoi
  ```
  ```js
  let result = text.slice(0); // "Hello world!"
  ```
### 2.2. substring()
giong voi slide() nhung khong nhan gia tri am

### 2.3. substr()
+ cach dung: giong voi cac phuong thuc cat chuoi khac
+ Cu phap:
  ```js
  string.substr(start, length)
  ```
  start: vi tri bat dau cat chuoi
  neu gia tri **start** dai hon do dai chuoi thi tra ve **""**
  neu start la so am thi tinh tu cuoi chuoi
  length: do dai chuoi muon cat, mac dinh la phan con lai cua chuoi

+ Vi du:
  ```js
  let result = text.substr(0, 1); // "H"
  ```
  ```js
  let result = text.substr(text.length-1, 1); // "!" do dem tu cuoi chuoi
  ```
  ````js
  let result = text.substr(-6, 6); // "world!"
  ```
## 3. concat
dung de noi chuoi
+ Cach dung:
dung de noi 2 hay nhieu chuoi
ko lam thay doi chuoi ban dau
tra ve 1 chuoi moi
+ Cu phap:
```string.concat(string1, string2, ..., stringX)```
string1: bat buoc
+ Vi du:
```js
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2); // seafood
```
```js
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2); // Hello word!
```
## 4. startsWith, endsWith, toLowerCase, toUpperCase
### 4.1. toLowerCase
+ Cach dung: viet thuong cho chuoi

+ Cu phap:
  ```string.toLowerCase()```

+ Vi du:
  ```js
  let text = "Hello World!";
  let result = text.toLowerCase(); // hello world!
  ```

### 4.2. toUpperCase
tuong tu nhu toLowerCase
+ Vi du:
  ```js
  let text = "Hello World!";
  let result = text.toUpperCase(); // HELLO WORLD!
  ```
### 4.3. startsWith
+ Cach dung:
  tra ve true neu chuoi bat dau bang chuoi duoc chi dinh, nguoc lai la false
  phan biet chu hoa va thuong
+ Cu phap:
  ```string.startsWith(chuoi tim kiem, vi tri bat dau(mac dinh la 0))```

+ Vi du:
  ```js
  let text = "Hello world, welcome to the universe.";
  text.startsWith("Hello"); // true, bat dau tu vi tri 0
  ```
  ```js
  let text = "Hello world, welcome to the universe.";
  text.startsWith("world", 7); // true,, bat dau tu vi tri 7

### 4.4. endsWith
tuong tu startsWith
+ Vi du:
```js
let text = "Hello world";
let result = text.endsWith("world"); // true
```
```js
let text = "Hello World";
let result = text.endsWith("world"); // false
```

## 5. replace, trim, charAt, split
## 5.1. replace
+ Cach dung
  tra ve 1 chuoi moi voi gia tri duoc thay the
  ko lam thay doi chuoi ban dau

+ Cu phap:
  ```string.replaceAll(gia tri can thay the, gia tri thay the)```

+ Vi du:
  ```js
  let text = "Visit Microsoft!";
  let result = text.replace("Microsoft", "W3Schools"); // Visit W3Schools!
  ```
  ```js
  let text = "Mr Blue has a blue house and a blue car";
  let result = text.replace(/blue/g, "red"); // Mr Blue has a red house and a red car.
  ```

### 5.2. trim
+ Cach dung:
  loai bo khoang trang o 2 ben chuoi
  ko lam thay doi chuoi ban dau

+ Cu phap:
  ```string.trim()```

+ Vi du:
  ```js
  let text = "       Hello World!        ";
  let result = text.trim(); // Hello World!
  ```
  ```js

### 5.3. split
+ Cach dung:
chuyen doi 1 chuoi thanh 1 mang
tra ve mang moi, ko lam thay doi chuoi goc
"" su dung lam dau phan tach, chuoi duoc phan tach thanh cac tu

+ Cu phap:
```string.split(chuoi/bieu thuc chinh quy(ko bat buoc), gioi han so lan tach)```

+ Vi du:
```js
let text = "How are you doing today?";
const myArray = text.split(" "); // How,are,you,doing,today?
```
```js
let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[1]; // are
```
```js
const myArray = text.split(""); // H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
```
```js
const myArray = text.split(" ", 3); // How,are,you
```

### 5.4. chartArt()
+ Cach dung
  tra ve ki tu cua vi tri duoc chi dinh trong chuoi

+ Cu phap:
  ```string.charAt(so chi vi tri)```

+ Vi du:
  ```js
  let text = "HELLO WORLD";
  let letter = text.charAt(0); // H
  ```
  ```js
  let text = "HELLO WORLD";
  let letter = text.charAt(text.length-1); // D
  ```
  ```js
  let text = "HELLO WORLD";
  let letter = text.charAt(15); // space
  ```
  




