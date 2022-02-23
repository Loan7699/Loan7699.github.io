# Array methods Javascript

## 1. To string(), join(), 
### 1.1. To string()
 + Cach dung: chuyen tu array sang string, ko chỉ định được dấu phân tách chuỗi, ko lam thay doi chuoi ban dau
  
 + Cu phap:
  ```array.toString()``

 + Vi du
 ```js
 let languages = [
    'Javascript',
    'PHP',
    'Ruby',
 ]
 console.log(languages.toString()); // Javascript,PHP,Ruby
 ```

### 1.2. Join():
+ Cach dungchuyển từ array sang string, khác **toString()**, **join()** có thể chỉ định dấu phân tách bất kì, mặc định là dấu ","
+ Cu  phap:
  ```array.join(dau phan cach)```
+ Vi du:
  ``` js
  console.log(languages.join("*")); // Javascript*PHP*Ruby
  ```

## 2. pop(), push(): làm thay đổi mảng ban đầu,
### 2.1. pop()
+ Cach dung: xóa phần tử cuối cùng ra khỏi mảng, trả về phần tử đã loại bỏ, thay doi mang ban dau
+ Cu phap:
  ```array.pop()```
+ Vi du:
  ```
  console.log(languages.pop());
  console.log(languages);
  ```

### 2.2. push()
+ Cach dung: thêm 1 hoặc nhiều phần tử cuối mảng, trả về độ dài mới của mảng
+ Cu phap:
  ```array.push(item1, item2, ..., itemX)```
+ Vi du:
```js
console.log(languages.push("Java", "Dart")); // trả về độ dài mảng: 4
console.log(languages); // trả về mảng mới
```

## 3. Shift, unshift
### 3.1. shift
+ Cach dung: xóa đi 1 phần tử ở đầu mảng, trả về phần tử đã xóa
+ Cu phap:
  ```array.shift()```
+ Vi du:
  ``` js
  console.log(languages.shift()); // trả về phần tử đầu là "Javascript"
  console.log(languages); // trả về mảng mới sau khi xóa
  ```

### 3.2. unshift
+ Cach dung: thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mảng mới
+ Cu phap:
  ```array.unshift(item1, item2, ..., itemX)```
+ Vi du:
  ```js
  console.log(languages.unshift("Javascript")); // độ dài mới: 4
  console.log(languages); // mảng mới
  ```

## 4. splicing:
+ Cach dung: xóa 1 phần tử bất kì trong mảng hoac chèn 1 phần tử bất kì vào mảng
+ Cu phap:
  ```array.splice(index, howmany, item1, ....., itemX)```
  index (bat buoc): Vi tri them/bot. Gia tri am xac dinh tu cuoi mang
+ Vi du:
  ```js
  let language = [
    "Java",
    "Dart",
    "JavaScript",
    "PHP",
    "Ruby"
  ]
  language.splice(1, 2); // 1: index(số chỉ) phần tử bắt đầu xóa, 2: số phần tử muốn xóa
  console.log(language); // ['Java', 'PHP', 'Ruby']
  ```
  ```js
  language.splice(1, 0, "Javascript")
  console.log(language); // khong xoa phan tu nao, chen them "Javascript" vi tri thu 1

## 5. concat:
+ cach dung: nối 2 mảng với nhau, ko lam thay doi mang hien co
+ Cu phap:
   ```array1.concat(array2, array3, ..., arrayX)```
+ Vi du:
   ````js
   let language_1 = [
    "Java",
    "Dart"
   ]
  let language_2 = [
    "PHP",
    "Ruby"
  ]
  console.log(language_1.concat(language_2));
  ```

## 6. slicing:
+ Cach dung: cắt 1 vài hoặc toàn bộ phần tử của mảng, ko thay doi mang ban dau
+ Cu phap:
  ```array.slice(start, end)```
  start: vi tri bat dau mac dinh la 0, so am chon tu cuoi mang
  end: vi tri ket thuc, mac dinh la vi tri cuoi mang, so am chon tu cuoi mang
  ```js
  console.log(language.slice(1,2)); // "Javascript" 1: vị trí bđ cắt; 2: vị trí con trỏ kết thúc cắt
  ```
   ```// language.slice(1); // cắt toàn bộ phần còn lại mảng từ vị trí 1```
   ```// language.slice(0); // cắt toàn bộ mảng, có thể truyền số âm```

## 7. reverse()
+ Cach dung:
  đảo ngược thứ tự các phần tử của mảng, ghi đè lên mảng ban đầu
+ Cu phap:
  ```array.reverse()```
+ Vi du::
  ```js
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.reverse()); // ['Mango', 'Apple', 'Orange', 'Banana']
  ```

## 8. sort()
+ Cach dung: sắp xếp các phần tử 1 mảng theo thứ tự bảng chữ cái và tăng dần, ghi đè lên mảng ban đầu
  
+ Cu phap:
  ```array.sort(compareFunction)```
+ Vi du
  ```js
  console.log(fruits.sort()); // Apple,Banana,Mango,Orange
  ```
  
## 9. indexOf()
+ Cach dung: trả về chỉ mục đầu tiên (vị trí) của 1 giá trị được chỉ định, trả về -1 nếu không tìm được
+ Vi du:
  ```js
  console.log(index = fruits.indexOf("Apple")); // bắt đầu ở chỉ mục 3
  let fruits_1 = ["Banana", "Apple", "Orange", "Apple", "Mango", "Apple"];
  console.log(fruits_1.indexOf("Apple", 3)); // chỉ số âm thì sẽ đếm từ cuối chuỗi
  console.log(index = fruits.indexOf("Apple", -1)); // 4 do tính từ cuối
  ```

+ lastIndexOf(): trả về chỉ mục cuối cùng của 1 giá trị được chỉ định (tìm từ phần tử cuối đến đầu), trả về -1 nếu không tìm được
  ```js
  console.log(fruits_1.lastIndexOf("Apple")); // 5
  ```
  ```js
  console.log(fruits_1.lastIndexOf("Apple", 4)); // 3 do đếm từ vị trí 4 lên đầu chuỗi
  ```

## 10. includes()
+ cach dung: trả về true nếu mảng chứa giá trị chỉ định, ngược lại là true, phân biệt chữ in hoa và thường
+ Cu phap:
  ```array.includes(element, start)```
  element: gia tri tim  kiem
  start: vi tri bat dau tim, mac dinh la 0
+ Vi du:
  ```js
  console.log(fruits.includes("Mango")); // true
  console.log(fruits.includes("Banana", 3)); // false vì tìm từ chỉ định 3 đến cuối chuỗi
  ```
