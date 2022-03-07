/*
Nhấn phím enter thì xuất hiện 1 hình tròn ở vị trí bất kỳ trong trang web
Nhấn các phím space thì xuất hiện 1 hình vuông ở vị trí bất kỳ trong trang web
Nhấn các phím còn lại thì đổi màu background của trang web thành 1 màu bất kỳ
Mỗi lần nhấn phím chỉ có 1 hình được xuất hiện (hình tròn hoặc hình vuông tùy thuộc vào phím được bấm
*/

// random màu hex bất kì
const randomColor = () => {
    let hexCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexValue = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexCode.length);
        hexValue += hexCode[index];
    }
    return hexValue;
}
console.log(randomColor());

const random = () => {
    return Math.floor(Math.random() * 1000);
}


document.addEventListener('keypress', function(event) {

    if (event.keyCode == 13) { // vẽ hình tròn
        // xóa hình tròn cũ sau khi nhấn lần tới
        const circleOld = document.querySelector('.circle');
        if (circleOld) {
            circleOld.parentElement.removeChild(circleOld);
        }

        // tạo thẻ div và thêm class 
        let circle = document.createElement('div');
        circle.classList.add('circle');
        document.body.appendChild(circle);


        let x = random();
        let y = random();

        circle.style.top = `${y}px`;
        circle.style.left = `${x}px`;

    } else if (event.keyCode == 32) {
        const squareOld = document.querySelector('.square');
        if (squareOld) {
            squareOld.parentElement.removeChild(squareOld);
        }

        let square = document.createElement('div');
        square.classList.add('square');
        document.body.prepend(square);

        let x = random();
        let y = random();
        square.style.top = `${y}px`;
        square.style.left = `${x}px`;

    } else {
        let color = randomColor();
        document.body.style.backgroundColor = color;
        console.log(color);
    }
})