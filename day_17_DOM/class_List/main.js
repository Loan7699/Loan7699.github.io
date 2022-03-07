const heading = document.querySelector('h1');
// xem danh sách class của h1
console.log(heading.classList);

// thêm class - add(): thêm 1 or nhiều class
heading.classList.add('text-big', 'text-center');

// xóa class - remove()
heading.classList.remove('text-big', 'text-center');

// kiểm tra 1 class có tồn tại hay không - contains() => trả về true/false
console.log(heading.classList.contains('text-red'));
console.log(heading.classList.contains('demo'));

// toggle: kiểm tra 1 class có tồn tại hay không, nếu không tồn tại => thêm vào, nếu có => xóa đi

// sử dụng hàm setInterval(): thực hiện 1 hành động lặp lại sau 1 khoảng tgian
/*
C1:
setInterval(function() {
    heading.classList.toggle('text-red') // hành động
}, 1500) // thời gian 1500ms = 1.5s
*/
// thực hiện liên tục hành động thêm vào và xóa đi class text-red

// C2: Viết tách function ra
/*
const toggleClass = () => {
    heading.classList.toggle('text-red');
}
// chạy liên tục
setInterval(toggleClass, 1000) // hành động, thời gian
*/

// muốn chạy chục lần dưng lại
let count = 0;

const toggleClass = () => {
    count++
    if (count == 10) {
        clearInterval(interval)
    }
    heading.classList.toggle('text-red');
}

let interval = setInterval(toggleClass, 1000);

// Đếm ngược thời gian từ 10s-0s
// Sau đó cập nhật nội dung h1 thành 'Chúc mừng năm mới'
const h2 = document.querySelector('h2');
let time = 10;

// cập nhật thời gian
let updateTime = () => {
    // giảm thời gian đi 1
    time--;
    // cập nhật thời gian mới lên trên giao diện
    h2.innerText = `${time}s`
    // kiểm tra thời gian
    if (time == 0) {
        heading.innerText = 'Chúc mừng năm mới';

        // kết túc quá trình lặp lại
        clearInterval(interval1);
    }
}

// cứ 1s thì gọi updateTime 1 lần
let interval1 = setInterval(updateTime, 1000)

// setTimeout(): hàm delay 1 khoảng thời gian mưới thực thi công việc
setTimeout(function() {
    console.log('Xin chào');
}, 1000);
