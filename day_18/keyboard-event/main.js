

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });
// Lắng nghe sự kiện keydown
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        console.log("bạn đã nhấn enter");
    } else if (event.keyCode == 32) {
        console.log('bạn đã nhấn space');
    } else {
        console.log('bạn đã nhấn bàn phím');
    }
});
/*
THỰC HÀNH
Nhấn phím enter thì xuất hiện 1 hình tròn ở vị trí bất kỳ trong trang web
Nhấn các phím space thì xuất hiện 1 hình vuông ở vị trí bất kỳ trong trang web
Nhấn các phím còn lại thì đổi màu background của trang web thành 1 màu bất kỳ
Mỗi lần nhấn phím chỉ có 1 hình được xuất hiện (hình tròn hoặc hình vuông tùy thuộc vào phím được bấm
*/
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        // Vẽ hình tròn
        drawCircle()
    } else if (event.keyCode == 32) {
        // Vẽ hình vuông
    } else {
        // Thay đổi background của body
    }
});
const drawCircle = () => {} // phải random ra con số để set lại top left theo số random

// định nghĩa 1 class khác 

const drawRectangle = () => {}

const changeBackground = () => {}

// Bài 2:
// b1: tạo 1 hình tròn ở vị trí bất kì dùng html
// ban đầu truy cập vào box
// box.offetTop
// box.offetLeft
// mỗi lần ấn lấy ra vị trí hiện tại 1 lần


