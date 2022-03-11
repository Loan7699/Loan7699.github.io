d; // 1. Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

// truy cập các phần tử
/* 
const boxes = document.querySelector('.boxes');
const boxArray = document.getElementsByClassName('box');
const score = document.getElementById('score');

for (let i = 0; i < colors.length; i++) {
    // tạo thẻ div
    const box = document.createElement('div');
    // add class box cho thẻ div
    box.classList.add('box');
    // thay đổi backgroundColor bằng giá trị từng phần tử mảng
    box.style.backgroundColor = colors[i];
    // chèn phần tử box vào thẻ div boxes
    boxes.insertAdjacentElement('beforeend', box);
}



// 2. Cập nhật số lượng total box trong thẻ <span> có class “points”
// truy cập phần tử span
const totalBox = document.querySelector('#score span');
// thêm class points cho phần tử span
totalBox.classList.add('points');
// gán nội dung phần tử span bằng số box
totalBox.innerText = boxArray.length;

// 3. Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1

for (let i = 0; i < boxArray.length; i++) {
    boxArray[i].addEventListener('click', function () {
        boxArray[i].style.display = 'none';
        totalBox.innerText = Number(totalBox.innerText) - 1;
    })
}

// 4. Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    for (let i = 0; i < colors.length; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.style.backgroundColor = colors[i];
        boxes.insertAdjacentElement('beforeend', newBox);
        newBox.addEventListener('click', function() {
            newBox.style.display = 'none';
            totalBox.innerText = Number(totalBox.innerText) - 1;
        })
    }
    
    totalBox.innerText = Number(totalBox.innerText) + 5;
})
*/
// copy giá trị mảng ra 1 mảng mới
let colorsCopy = [...colors];
// Chữa bài
const boxesEl = document.querySelector(".boxes");
const pointsEl = document.querySelector(".points");
const btn = document.querySelector("#btn");

// Render box
function renderBox(arr) {
    // xóa hết dữ liệu trước khi render
  boxesEl.innerHTML = "";

  let html = "";
  
  for (let i = 0; i < arr.length; i++) {
    html += `<div 
        class='box 
        style='background-color:${arr[i]}'
        onclick='deleteBox('${i})'
        ></div>`;
  }
  boxesEl.innerHTML = html;

  // cập nhật số lượng
  updateTotalBox(arr);
}
renderBox(colors);

// cập nhật số lượng box
function updateTotalBox(arr) {
  pointsEl.innerText = arr.length;
}
renderBox(colors);

// xóa box
function deleteBox(index) {
//   for (let i = 0; i < colors.length; i++) {
//     if (i == index) {
//       colors.splice(i, 1);
//     }
//   }

// sử dụng filter
colors = colors.filter((color, i) => i != index); // lọc những phần tử có chỉ số khác index
  renderBox(colors);
}

// Thêm box
btn.addEventListener('click', function() {
    colors = [...colors, ...colorsCopy] // hoặc sử dụng concat
    renderBox(colors);
})

renderBox(colors);
