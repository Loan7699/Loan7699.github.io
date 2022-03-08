/*
Giá trị mặc định của counter ban đầu = 0
Bấm vào Cộng tăng counter lên 1
Bấm vào Trừ giảm counter đi 1
Nếu counter > 0 có màu green
Nếu counter = 0 có màu #333333
Nếu counter < 0 có màu red
*/
const btnMinus = document.querySelector('.prevBtn');
const btnAdd = document.querySelector('.nextBtn');
const h1 = document.getElementById('counter');
let counter = Number(h1.innerText); // hoặc let count = 0;

btnAdd.addEventListener('click', function() {
    counter ++; // count++
    h1.innerText = counter; // h1.innerText = count;
    changeColor() // gọi hàm
})

btnMinus.addEventListener('click', function() {
    counter --;
    h1.innerText = counter;
    changeColor(); // gọi hàm
})

const changeColor = () => {
    if (counter > 0) {
        h1.style.color = 'green';
    } else if (counter == 0) {
        h1.style.color = '#333333';
    } else {
        h1.style.color = 'red';
    }
}

// btnAdd.addEventListener('click', changeColor);

btnMinus.addEventListener('click', changeColor);

