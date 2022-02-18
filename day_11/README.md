# Vong lap JavaScript
## 1. Switch-case
+ Cu phap:
  ```Js
  switch (vaariable)
  {
      case value_1: {
          // do something
          break;
      }
      case value_1: {
          // do something
          break;
      }
      default: { // khong thuoc case nao
          // do something
          break;
      }
  }

+ Vi du:
``` Js
let money = 13000

switch (money) {
    case 12000:
    case 13000:
    case 14000: {
        console.log("cafe sữa");
        break;
    }
    case 10000: {
        console.log("cafe đá");
        break;
    default: {
        console.log("Không có đồ uống nào phù hợp");
        break; // break thoát ra khỏi switch-case, nếu ko có break tự động thực hiện câu lệnh ở dưới ko kiểm tra ĐK
    }
}
```

## 2. For
+ Cu phap:
  ``` Js
  for (begin, condition, step) {
    // Thực thi khối lệnh lặp đi lặp lại
    // Cho đến khi condition nhận giá trị "false"
    }

   // begin : Khởi tạo giá trị ban đầu cho vòng lặp
   // condition : Điều kiện để tiếp tục chạy vòng lặp
   // step : Cập nhật giá trị sau mỗi lần lặp
+ Vi du:
```Js
// Thực hiện kế hoạch trong 30 ngày : Thức dậy lúc 5 giờ sáng
for (let day = 1; day <= 30; day = day + 1) {
    console.log(`Ngày ${day} thức dậy lúc 5h`);
}
```

### 3. lenh *Break, continue*
+ *Break*: được sử dụng để kết thúc vòng lặp.
  *Vi du*: 
  ```Js
  // Thức dậy lúc 5 giờ, nhưng đến ngày số 20 chán quá -> bỏ
  for (let day = 1; day <= 30; day++) {
    if (day == 20) {
        console.log("Chán quá, không thực hiện nữa");
        break
    }
    console.log(`Ngày ${day} thức dậy lúc 5h`);
    }
+ *continue*: continue được sử dụng để bỏ qua một vòng lặp hiện tại (khong thuc hien cau lenh duoi continue thuoc vong lap, chuyen luon sang vong lap moi)
  ``` Js
  // Thức dậy lúc 5 giờ, với các ngày chủ nhật thì không cần thực hiện
  // gặp câu lệnh continue bỏ qua vòng lặp, tiếp tục tăng day, ko thực hiện lệnh bên dưới
  for (let day = 1; day <= 30; day++) {
    if (day % 7 == 0) {
        console.log("Nghỉ xả hơi");
        continue
    }
    console.log(`Ngày ${day} thức dậy lúc 5h`);
  }
## 4. While
khác với *for*, *while* không có bước khai báo và cập nhật giá trị với mỗi vòng lặp
+ Cu phap:
```Js
// Các giá trị khởi tạo nếu có

while (condition) {
    // Thực thi khối lệnh lặp đi lặp lại
    // Cho đến khi condition nhận giá trị "false"

    // Tự cập nhật các giá trị (nếu có) bên trong vòng lặp
}
```
+ Vi du:
  ```Js
  // sử dụng while
  let day = 1; // giá trị khởi tạo

  while (day <= 30) { // điều kiện
    console.log(`Ngay ${day} thức dậy lúc 5h`);
    day = day + 1; // cập nhật giá trị mới
  }
## 5. do-while
chỉ khác *while* nếu lệnh trong do được thực hiện ít nhất 1 lần sau đó mới kiểm tra điều kiện trong while
+ Cu phap:
```Js
// Các giá trị khởi tạo nếu có
do {
    // Thực thi khối lệnh lặp đi lặp lại
    // Cho đến khi condition nhận giá trị "false"

    // Tự cập nhật các giá trị (nếu có) bên trong vòng lặp

    // Note : Khối lệnh được thực hiện ít nhất 1 lần
} while (condition)
```
+ Vi du:
  ```Js
  // sử dụng do-while

  let day = 1 // khởi tạo giá trị
  do {
    console.log(`Ngay ${day} thức dậy lúc 5h`);
    day = day + 1; // Cập nhật giá trị mới
  } while(day <= 0)
  


