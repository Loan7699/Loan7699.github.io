// Sử dụng HTML-atribute
const sayHello = () => {
    alert('Xin chào các bạn 1');
}

//  Sử dụng DOM property
const btn2 = document.getElementById('btn-2');

// // Function ko tên => anonymous function
// btn2.onclick = function() {
//     alert('Xin chào các bạn 2');
// }

const sayHello2 = () => {
    alert('Xin chào các bạn 2');
}

btn2.onclick = sayHello2;

// Sử dụng addEventListener
const btn3 = document.getElementById('btn-3');

// btn3.addEventListener("click", function() {
//     alert('Xin chào các bạn 3'); // 2 tham số: tên sự kiện và fucntion
// })

const sayHello3 = () => {
    alert('Xin chào các bạn 3')
};
btn3.addEventListener('click', sayHello3);

// Ví dụ: Mỗi lần ấn vào nút 'btn-4' thì body đổi 1 màu khác nhau
const btn4 = document.getElementById('btn-4');

// Random màu HEX
function randomHexCode() {
    let hex = "#"
    let hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index];
    }
    return hex
}

// thay đổi màu cho body
const changeBackgroundColor = () => {
    // B1: random màu
    let color = randomHexCode()
    // b2: set màu vừa random cho body
    document.body.style.backgroundColor = color;
}

// lắng nghe sự kiện khi bấm vào nút -'btn-4
btn4.addEventListener('click', changeBackgroundColor);

