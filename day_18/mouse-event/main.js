
/*
document.addEventListener('mousedown', function () {
    console.log('mousedown'); // ấn chuột
})

document.addEventListener('mousemove', function () {
    console.log('mousemove'); // di ch chuột
})

document.addEventListener('mouseup', function () {
    console.log('mouseup'); // nhả chuột
})
*/

document.addEventListener('click', function (event) {
    console.log('click'); // click
    console.log(event);
})

// mỗi hàm xử lý sự kiện cho 1 biến event chứa thông tin sự kiện, sự kiện khác nhau cho thông tin khác nhau

// Nhấn chuột vào 1 vị trí bất kỳ trên trang web, tạo 1 hình tròn tại vị trí nhấn chuột
// Mỗi lần nhấn chuột chỉ có 1 hình tròn được xuất hiện

document.addEventListener('mousemove', function(event) {
    // Trước khi vẽ hình tròn mới cần xóa hình tròn trước đó đi
    const boxEl = document.querySelector('.box');

    // nếu box tồn tại thì xóa
    if (boxEl) {
        boxEl.parentElement.removeChild(boxEl);
    }


    // B1: tạo hình tròn: tạo thẻ div và gán class 'box'
    let box = document.createElement('div');
    box.classList.add('box');

    // B2: Lấy ra vị trí đang nhấn chuột
    console.log(event);
    let x = event.offsetX;
    let y = event.offsetY;

    // B3: gán lại tọa độ nhấn cho box
    box.style.top = `${y-50}px`;
    box.style.left = `${x-50}px`;

    document.body.appendChild(box);
})


