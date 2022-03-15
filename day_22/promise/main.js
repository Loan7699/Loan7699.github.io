// Promise: lời hứa

// Ví dụ: Đến tết nếu được tiền sẽ mua Iphone 13 pro max (31 tr)

// Định nghĩa lời hứa:
let money = 30;

// Mua Iphone
let buyIphone = () => {
    return new Promise(function (resolve, reject) {
        // 2 tham số: resolve: khi lời hứa thành công
        // reject ngược lại được gọi khi thất bại
        if (money >= 31) {
            resolve('Mua Iphone thôi');
        } else {
            reject('Không đủ tiền mua Iphone');
        }
    })
}

// console.log(buyIphone()); // trạng thái mặc định là pending (đang chờ) khi chưa thực hiện

// Nếu đủ tiền mua ip, còn thừa 5tr mua thêm air pod
let buyAirPod = () => {
    return new Promise(function (resolve, reject) {
        if (money - 31 - 5 >= 0) {
            resolve('Mua thêm air pod');
        } else {
            reject('Không đủ tiền mua air pod')
        }
    })
}

// Thực thi function xem mua được không
/*
buyIphone()
    .then(res => { // lời hứa được thành công 'then' được gọi, res dựa vào giá trị trong resolve
        console.log(res);
        return buyAirPod() // cần return để gọi được 1 hàm then nữa, nếu byAirPod thành công thì đi vào then tiếp, thất bại vào catch chung cho các promise
    })
    .then(res1 => {
        console.log(res1);
    })
    .catch(err => { // trường hợp promise1 thất bại vào catch và dừng luôn
        console.log(err); // thất bại 'catch' được gọi, err dựa vào giá trị reject
    })
    .finally(() => { // bất kể promise thành công hay thất bại đều thực hiện
        console.log('Về nhà');
    })
*/

// Sử dụng promise.all để thực hiện đồng thời các promise
Promise.all([buyIphone(), buyAirPod()])
    .then((values) => {
        console.log(values)
    })
    .catch(err => {
        console.log(err);
    })