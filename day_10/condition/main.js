// Kiểu dữ liệu Boolean
let a = true;
let b = false;
let c = !a;
let d = !b;

console.log(a, b, c, d);

// sử dụng hàm Boolean để kiểm tra giá trị đúng sai của 1 biến, hay biểu thức
// console.log(Boolean(10));
// console.log(Boolean("Phuong Loan"));
// console.log(Boolean(3+5));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// Toán tử và (&&) (nhân)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Toán tử hoặc (||) (cộng)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Câu lệnh điều kiện Nếu...thì...
// let hour = 20;
// if (hour < 12) {
//   console.log("Chào buổi sáng");
// }

// let troiDep = true;
// let coTien = true;
// if (troiDep == true && coTien == true) {
//   console.log("Đi chơi");
// }

// // If-else
// if (hour < 12) {
//   console.log("Xin chào buổi sáng");
// } else {
//   console.log("Chào buổi chiều");
// }

// // If - else/if - else
// if (hour < 12) {
//   console.log("Chào buổi sáng");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Chào buổi chiều");
// } else {
//   console.log("Chào buổi tối");
// }

// Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau

// ”A” nếu mark >= 85
// ”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
// ”C” nếu 40 <= mark < 70 (40 <= mark && mark <70)
// Các trường hợp còn lại in ra “D”

function checkMark(mark) {
  if (mark >= 85) {
    console.log("A");
  } else if (mark >= 70 && mark < 85) {
    console.log("B");
  } else if (mark >= 40 && mark < 70) {
    console.log("C");
  } else {
    console.log("D");
  }
}
checkMark(70);

// Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn
function max(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
max(4, 5);

// Bài 3: Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
function check(a) {
  if (a < 0) {
    console.log("a là số âm");
  } else if (a == 0) {
    console.log("số 0");
  } else {
    console.log("a là số dương");
  }
}
check(-2);
check(0);
check(5);

// Bài 4: Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
function chanLe(a) {
  if (a % 2 == 0) {
    console.log(`${a} là số chẵn`);
  } else {
    console.log(`${a} là số lẻ`);
  }
}
chanLe(5);
chanLe(-4);

// Bài 5: Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không.
function chiaHet(a) {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log(`${a} chia hết cho 3 và 5`);
  } else {
    console.log(`${a} không đồng thời chia hết cho 3 và 5`);
  }
}
chiaHet(10);
chiaHet(15);

// Bài 6: Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?
function checkSum(a, b, c) {
    if((a+b)==c) {
        console.log(`${c} = ${a}+${b}`);
    } else {
        console.log(`${c} không bằng ${a}+${b}`);
    }
}
checkSum(2,3,5)
checkSum(2,3,7)

//  ==: so sánh về giá trị
//  ===: so sánh về giá trị và kiểu dữ liệu
// let a=2;
// let b="2"
// a==b => true
// a===b => false

// If-else
let hour = 20;
if (hour < 12) {
  console.log("Chào buổi sáng");
} else {
    console.log("Chào buổi chiều")
}

// Toán tử 3 ngôi: condition ? true : false
// condition = true thực thi câu lệnh đằng sau dấu ?
// condition == false thực thi câu lệnh đằng sau dấu :

hour < 12 ? console.log("Chào buổi sáng") : console.log("Chào buổi chiều")

