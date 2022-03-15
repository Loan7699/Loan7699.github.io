let selectEl = document.querySelector('#list');

async function getBreadList() {
    // B1: gọi api!: https://dog.ceo/api/breeds/list/all
    // nếu thành công => trả về danh sách các loài chó
    try {
        let res = await axios.get('https://dog.ceo/api/breeds/list/all');
        
        // lấy ra mảng các keys của message
        let array = Object.keys(res.data.message);

        let html = '';
        for (let i = 0; i < array.length; i++) {
            html += `<option value='${array[i]}'>${array[i]}</option>`
        }
        selectEl.innerHTML = html;

    } catch(err) {
        console.log(err);
    }

    // B2: sử dụng vòng lặp để render vào thẻ select

    // chọn 1 option => lấy ra được giá trị gọi => gán vào url

}

getBreadList()

let btnRandom = document.querySelector('.btn-random');
let imageEl = document.querySelector('.image img');


// Hiển thị ảnh random sau khi chọn select
btnRandom.addEventListener('click', async function() {
    // gọi API
    try {
        // lấy ra nội dung trong ô select
        let value = selectEl.value;

        // Gọi API
        let res = await axios.get(`https://dog.ceo/api/breed/${value}/images/random`); // truyền vào url ảnh hiển thị chứa value của select
        console.log(res.data); // trả về 1 object chứa nhiều thông tin, message(url ảnh) nằm trong data

        // Hiển thị ảnh
        imageEl.src = res.data.message;
    } catch(err) {
        console.log(err);
    }
})