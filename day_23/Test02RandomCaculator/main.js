// Truy cập
let primaryNumberEl = document.querySelector('#primary-number');
let secondaryNumberEl = document.querySelector('#secondary-number');
let operatorEl = document.querySelector('#operator');
let timeEl = document.querySelector('.time');
let inputResultEl = document.querySelector('#result');
let scoreEl = document.querySelector('.score');
scoreEl.innerHTML = 0;

// Random 2 số bất kì
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
randomNumber()

// Random operator
let operators = ['+', '-', '*'];
function randomOperator() {
    let index = Math.floor(Math.random() * operators.length);
    return operators[index];
}

let operatorObject = {
    '+': (a, b) => Number(a) + Number(b),
    '-': (a, b) => a - b,
    '*': (a, b) => a * b
}

function render() {
    primaryNumberEl.innerHTML = randomNumber();
    secondaryNumberEl.innerHTML = randomNumber();
    operatorEl.innerHTML = randomOperator(operators);
    inputResultEl.value = '';
    inputResultEl.focus();
}

function start() {
    timeEl.innerHTML = 10;
    scoreEl.innerHTML = 0;
    countdown();
}

window.onload = start;

// Hàm đếm ngược thời gian

function countdown() {
    let isConfirm = confirm('Are you ready?');
    if (isConfirm) {
        let counter = setInterval(() => {
            timeEl.innerHTML--;
            if (timeEl.innerHTML == '0') {
                clearInterval(counter);
                alert(`Your score: ${scoreEl.innerHTML}`);
                start();
            }
        }, 1000)
    } else {
        inputResultEl.disabled = true;
    }
}

// Lắng nghe sự kiện nhấn phím Enter
inputResultEl.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        if (operatorObject[operatorEl.innerHTML](primaryNumberEl.innerHTML, secondaryNumberEl.innerHTML) == inputResultEl.value) {
            scoreEl.innerHTML++;
            render();
        } else if (inputResultEl.value == '') {
            alert('Bạn chưa nhập kết quả');
        } 
        else {
            inputResultEl.value = '';

        }
    }
})



// // Chữa bài

// // Truy cập
// // Truy cập vào các thành phần
// const primaryNumberEl = document.getElementById("primary-number");
// const secondaryNumberEl = document.getElementById("secondary-number");
// const operatorEl = document.getElementById("operator");
// const resultEl = document.getElementById("result");
// const timeEl = document.querySelector(".time");
// const scoreEl = document.querySelector(".score");

// const operators = ["+", "-", "*"];
// let total;
// let time = 10;
// let score = 0;
// let interval;

// function randomNumber() {
//     // Random số và phép tính
//     let primaryNumber = Math.floor(Math.random() * 10);
//     let secondaryNumber = Math.floor(Math.random() * 10);
//     let operator = operators[Math.floor(Math.random() * operators.length)];

//     // Tính toán kết quả của biểu thức vừa random
//     total = eval(`${primaryNumber} ${operator} ${secondaryNumber}`);

//     // Hiển thị nội dung lên giao diện
//     primaryNumberEl.innerText = primaryNumber;
//     secondaryNumberEl.innerText = secondaryNumber;
//     operatorEl.innerText = operator;
// }

// // chạy thời gian
// function updateTime() {
//     time--;

//     // Cập nhật lên giao diện
//     timeEl.innerHTML = time >= 10? `00:${time}` : `00:0${time}`

//     // Nếu time = 0 thì kết thúc đếm ngược và thông báo kết quả
//     if (time == 0) {
//         clearInterval(interval);

//         // Thông báo kết quả
//         console.log('kết quả' + score);

//         // disable ô inout không cho nhập nữa
//         resultEl.disabled = true;

//         // Thông báo kết quả
//         alert('Kết quả của bạn là :' + score)
//     }
// }

// resultEl.addEventListener('keyup', function(e) {
//     if (e.keyCode == 13) {
//         // Lấy value trong ô input
//         let value = e.target.value;

//         // Kiểm tra với đáp án
//         if (value == total) {
//             // Tăng điểm lên 1
//             score++;

//             // cập nhật trên giao diện
//             scoreEl.innerText = score >= 10 ? score: `0${score}`

//             // random phép tính khác
//             randomNumber()
//         } 
//         // Xóa DL trong ô input để người chơi nhập đáp án khác
//         resultEl.value = '';
//     }
// })

// // Chạy khi bắt đầu game
// function init() {
//     // Random số
//     randomNumber();

//     // Xét lại time và score
//     // 00:03 - 00:10
//     timeEl.innerHTML = time >= 10? `00:${time}` : `00:0${time}` // lớn hơn 10 có 2 số 0 trước, nhở hơn 10 có 3 số 0
//     // 11 - 02
//     scoreEl.innerText = score >= 10 ? score: `0${score}`

//     // Chạy thời gian
//     interval = setInterval(updateTime, 1000);
// }

// init();
