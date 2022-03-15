/*
1. Lấy danh sách giống loài chính và hiển thị
Vừa vào trang, lấy danh sách breed và hiển thị như sau (giống bài tập trên lớp)
API: https://dog.ceo/api/breeds/list/all
*/

let selectEl = document.querySelector('#list');
let btnSub = document.querySelector('.btn-sub');
let subEl = document.querySelector('.sub');
let subBreedEl = document.querySelector('.sub-breed')
let imageEl = document.querySelector('.image img');


async function getBreadList() {
    // gọi api
    try {
        let res = await axios.get('https://dog.ceo/api/breeds/list/all');

        // lấy ra mảng các keys của message
        let array = Object.keys(res.data.message);

        // render phần tử mảng vào option trong select
        let html = '';

        for (let i = 0; i < array.length; i++) {
            html += `<option value='${array[i]}'>${array[i]}</option>`;
        }
        selectEl.innerHTML = html;

    } catch (err) {
        console.log(err);
    }
}
getBreadList();

/*
2. Hiển thị giống loài phụ
Chọn 1 giống loại cụ thể trông ô select và bấm nút " Get Sub Breed"
Chi tiết API : https://dog.ceo/dog-api/documentation/sub-breed
Nếu giống loài đó không có Sub Breed thì hiển thị 'Không có sub Breeds
Nếu giống loài đó có Sub Breed thì hiển thị danh sách sub breeds
*/

// imageEl.classList.remove('hide');

btnSub.addEventListener('click', async function () {
    try {
        // lấy nội dung ô select
        let value = selectEl.value;

        // kiểm tra nếu có li cũ thì xóa trước khi hiện sub-breed mới
        let liEl = document.querySelectorAll('li');

        for (let i = 0; i < liEl.length; i++) {
            if (liEl[i]) {
                liEl[i].parentElement.removeChild(liEl[i]);
            }
        }
        
        // gọi api
        let res = await axios.get(`https://dog.ceo/api/breed/${value}/list`);
        

        // lấy ra mảng các giá trị của message
        let array = Object.values(res.data.message);

        // xóa class hide của ul
        subEl.classList.remove('hide');

        // nếu đọ dài mảng giá trị bằng rỗng
        if (array.length == 0) {

            // kiểm tra tồn tại ảnh không, nếu có xóa thuộc tính src
            if (imageEl.src) {
                imageEl.removeAttribute('src');
            }
            subBreedEl.insertAdjacentHTML('afterbegin', '<li>Không có sub breed</li>')
            return;
        }

        // dùng vòng lặp
        for (let i = 0; i < array.length; i++) {

            // chèn li có nội dung lần lượt phần tử mảng
            let subBreed = document.createElement('li');
            subBreed.innerText = array[i];
            subBreedEl.insertAdjacentElement('afterbegin', subBreed);

/*
3. Hiển thị ảnh random của loài phụ
Khi bấm vào 1 giống loài phụ bất kỳ trong danh sách " Sub Breeds List" thì hiển thị 1 ảnh random tương ứng với giống loài phụ đó
Chi tiết API : https://dog.ceo/dog-api/documentation/sub-breed
*/
            // lắng nghe sự kiện bấm vào sub-breed
            subBreed.addEventListener('click', async function () {
                try {
                    // gọi api
                    let res = await axios.get(`https://dog.ceo/api/breed/${value}/${array[i]}/images/random`);

                    // gán lại src của ảnh bằng link tương ứng
                    imageEl.src = res.data.message;
                } catch (err) {
                    console.log(err);
                }
            })
        }

    } catch (err) {
        console.log(err);
    }
})







