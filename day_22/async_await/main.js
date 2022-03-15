// Mua Iphone

let money = 32;

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

async function buy() {
    try { // quá trình thực thi bthg chạy trong 'try', nếu không dùng try sẽ in ra lỗ hệ thống màu đỏ
        // Thực hiện mua ip
        let res = await buyIphone();
        console.log(res);

        // Thực thi mua air pod
        let res1 = await buyAirPod();
        console.log(res1);

    } catch (err) { // TH lỗi chạy vào catch
        console.log(err);
    }
    return 'Về nhà';
}

let data = buy(); // xem return trả về kết quả gì
console.log(data); // in ra 1 promise trạng thái pending
// Kết quả trả về của 1 async-await là 1 promise trạng thái pending
// Thực hiện promise dùng then, catch

data
    .then(res => console.log(res)) // res tương ứng 'Về nhà'
    .catch(err => console.log(err))