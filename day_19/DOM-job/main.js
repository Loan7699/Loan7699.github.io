// 1. Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
const card1 = document.querySelector('.col-md-3');
const cardContainer = document.querySelector('.jobs');

const card2 = card1.cloneNode(true);
const card3 = card1.cloneNode(true);
const card4 = card1.cloneNode(true);

cardContainer.insertAdjacentElement('beforeend', card2);
cardContainer.insertAdjacentElement('beforeend', card3);
cardContainer.insertAdjacentElement('beforeend', card4);

// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
const title2 = card2.querySelector('h3');
title2.innerText = 'JavaScript Developer';

const title3 = card3.querySelector('h3');
title3.innerText = 'Java Developer';

const title4 = card4.querySelector('h3');
title4.innerText = 'Python Developer';

// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const total = document.getElementsByClassName('col-md-3')
const jobsListed = document.querySelector('#jobs-listed span')

jobsListed.innerText = total.length;

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi

const input = document.getElementById('search');
const jobsName = document.querySelectorAll('.col-md-3 h3')

input.addEventListener('keydown', function(event) {
    // khi ấn enter
    if (event.keyCode == 13) {
        // lấy ra giá trị ô input
        let value = input.value;

        for (let i = 0; i < jobsName.length; i++) {
            // kiểm tra nội dung tiêu đề chứa giá trị ô input không
            if (jobsName[i].innerText.includes(value)) {
                // nếu có truy cập từ con đến phần tử cha => ông. Sau đó xét thuộc tính display cho phần tử card
                jobsName[i].parentElement.parentElement.style.display = 'block';
            } else {
                jobsName[i].parentElement.parentElement.style.display = 'none';
            }
        }
    }
})

// Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const allJobs = document.getElementById('show-all');
const card = document.querySelectorAll('.job-card')

allJobs.addEventListener('click', function() {
    input.value = '';
    for (let i = 0; i < card.length; i++) {
        card[i].style.display = 'block';
    }
})