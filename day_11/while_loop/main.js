// // Thực hiện kế hoạch trong 30 ngày : Thức dậy lúc 5 giờ sáng
// for (let day = 1; day <= 30; day = day + 1) {
//     console.log(`Ngày ${day} thức dậy lúc 5h`);
// }

// sử dụng while
let day = 1; // giá trị khởi tạo

while (day <= 30) { // điều kiện
    console.log(`Ngay ${day} thức dậy lúc 5h`);
    day = day + 1; // cập nhật giá trị mới
}

// Chỉ thức dậy lúc 5 giờ vào những ngày lẻ, còn ngày chẵn thì thức dậy lúc 7h
let day_01 = 1;
while (day_01 <= 30) {
    if (day_01 % 2 == 0){
        console.log(`Ngay ${day_01} thức dậy lúc 7h`);
    } else {
        console.log(`Ngay ${day_01} thức dậy lúc 5h`);
    }
    day_01 = day_01 + 1;
}

// Thức dậy lúc 5 giờ, nhưng đến ngày số 20 chán quá -> bỏ

let day_02 = 1;
while (day_02 <=30 ) {
    if (day_02 == 20) {
        console.log(`chan qua, ko thực hiện nữa`);
        break;
    }
    console.log(` Ngày ${day_02} dậy lúc 5h sáng`);
    day_02 = day_02 + 1;
}

// Thức dậy lúc 5 giờ, với các ngày chủ nhật thì không cần thực hiện
let day_03 = 1;
while (day_03 <= 30) {
    if(day_03 % 7 == 0) {
        console.log(` Nghỉ xả hơi`);
        day_03 = day_03 + 1;
        continue;
    }
    console.log(` Ngày ${day_03} dậy lúc 5h sáng`);
    day_03 = day_03 + 1
}