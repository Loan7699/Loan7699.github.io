// 1. Một tính năng mới vào gói Pro: ‘24/7 Phone support’
const newLi = document.createElement('li');
newLi.innerText = "24/7 Phone support";

const ulPro = document.querySelector('#pro-plan ul');
ulPro.insertAdjacentElement('beforeend', newLi);

// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)
const cardPro = document.querySelector('.col-md-4');
cardPro.parentElement.insertAdjacentElement('beforeend', cardPro);

// 3. Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’
const buttonPro = document.querySelector('#pro-plan button');
buttonPro.innerText = 'Buy Now';
buttonPro.style.backgroundColor = '#0984e3';
buttonPro.style.color = "#fff";

// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
const spanPro = document.querySelector('#pro-plan .storage-amount');
const spanBasic = document.querySelector('#basic-plan .storage-amount')

let storage1 = Number(spanPro.innerText);
spanPro.innerText = storage1 + (storage1*25)/100

let storage2 = Number(spanBasic.innerText);
spanBasic.innerText = storage2 + (storage2*50)/100;

console.log('Xin chào');