// API lấy danh sách các tỉnh (province)
// GET : https://provinces.open-api.vn/api/p/
async function getProvince() {
    try {

        // gọi API lấy danh sách tỉnh thành phố
        let res = await axios.get('https://provinces.open-api.vn/api/p/');
        console.log(res.data);

        // Render tỉnh thành phố
        renderInfo(res.data, provinceEl)
    } catch (err) {
        console.log(err);
    }
}



// Truy cập
const provinceEl = document.getElementById('province');
function renderProvince(arr) {
    arr.forEach(ele => {
        provinceEl.innerHTML += `<option value='${ele.code}'>${ele.name}</option>`
    });
}

provinceEl.addEventListener('change', async function (event) {

    try {
        // let provinceCode = provinceEl.value;
        // let provinceCode = this.value;
        let provinceCode = event.target.value

        // Gọi API để lấy danh sách quận huyện tương ứng với province
        let res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
        console.log(res.data.districts);
        // Render quận huyện tương ứng với responce trả về
        // xóa dữ liệu ô trước khi Render
        districtEl.innerHTML = '';
        renderInfo(res.data.districts, districtEl)
    } catch (error) {
        console.log(error);
    }
})

// Lấy danh sách quận huyện (district)
// GET : https://provinces.open-api.vn/api/p/${provinceCode}?depth=2

let districtEl = document.querySelector('#district')

// function renderDistricts(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//         let p = arr[i]
//         districtEl.innerHTML += `<option value='${p.code}'>${p.name}</option>`
//     }
// }

let communeEl = document.querySelector('#commune');

// Lấy danh sách xã phường
// GET : https://provinces.open-api.vn/api/d/${districtCode}?depth=2
districtEl.addEventListener('change', async function(arr) {
    try {
        let districtCode= districtEl.value;
        
        let res = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
        
        renderInfo(res.data.wards, communeEl)
    } catch (error) {
        console.log(error);
    }
})

// Hiển thị danh sách chung, ko cần render từng cái
function renderInfo(arr, ele) {
    ele.innerHTML = '';
    arr.forEach(ele => {
        ele.innerHTML += `<option value='${ele.code}'>${ele.name}</option>`
    })
}

getProvince();