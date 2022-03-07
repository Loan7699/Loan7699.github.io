// Yêu cầu 1: Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ
const btn1 = document.getElementById('btn-1');

const ChangeContent = () => {
    document.write('Nội dung bất kì');
}

btn1.addEventListener('click', ChangeContent);

// Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)

const btn2 = document.getElementById('btn-2');

// random mã màu
const randomHex = () => {
    let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexcode = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hex.length);
        hexcode += hex[index];
    }
    return hexcode;
}

// đổi màu p
const para = document.querySelector('p');
const changeColor = () => {
    let color = randomHex();
    para.style.color = color;
}

btn2.addEventListener('click', changeColor);

// Khi nhấn vào button “Change background” thì thay đổi màu của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)

const btn3 = document.getElementById('btn-3');
// random màu RGB
const randomRbg = () => {
    let rbg = [];
    for (let i = 0; i < 3; i++) {
        rbg[i] = Math.floor(Math.random() * 256);
    }
    return `rgb(${rbg.toString()})`;
}
console.log(randomRbg());
// thay đổi màu p
const changeBackground = () => {
    let color = randomRbg();
    para.style.backgroundColor = color;
}

btn3.addEventListener('click', changeBackground);