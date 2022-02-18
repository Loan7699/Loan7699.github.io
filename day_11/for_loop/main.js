// Thực hiện kế hoạch trong 30 ngày : Thức dậy lúc 5 giờ sáng
for (let day = 1; day <= 30; day = day + 1) {
    console.log(`Ngày ${day} thức dậy lúc 5h`);
}

// Chỉ thức dậy lúc 5 giờ vào những ngày lẻ, còn ngày chẵn thì thức dậy lúc 7h
for (let day = 1; day <= 30; day = day + 1) {
    if (day % 2 == 1) {
        console.log(`Ngày ${day} thức dậy lúc 5 giờ`);
    } else {
        console.log(`Ngày ${day} thức dậy lúc 7h`);
    }
}

// break được sử dụng để kết thúc vòng lặp.
// Thức dậy lúc 5 giờ, nhưng đến ngày số 20 chán quá -> bỏ
for (let day = 1; day <= 30; day++) {
    if (day == 20) {
        console.log("Chán quá, không thực hiện nữa");
        break
    }
    console.log(`Ngày ${day} thức dậy lúc 5h`);
}

// continue được sử dụng để bỏ qua một vòng lặp hiện tại.
// Thức dậy lúc 5 giờ, với các ngày chủ nhật thì không cần thực hiện
// gặp câu lệnh continue bỏ qua vòng lặp, tiếp tục tăng day, ko thực hiện lệnh bên dưới
for (let day = 1; day <= 30; day++) {
    if (day % 7 == 0) {
        console.log("Nghỉ xả hơi");
        continue
    }
    console.log(`Ngày ${day} thức dậy lúc 5h`);
}

// ví du 2: thực hiện tiết kiệm tiền trong 10 ngày
// mỗi ngày 100 nghìn
// Tổng => có 1.000.000 VND

// trước khi bắt đầu, số tiền hiện có =0
let money = 0;

for(let day = 1; day <= 10; day++) {
    money = money + 100000; // số tiền hôm nay bằng tổng số tiền trước đó + 100 nghìn
}

console.log(money);

// 1. Nếu ngày lẻ tiết kiệm 100, ngày chẵn 200
let money_01 = 0;
 for (let day = 1; day <= 30; day++) {
     if (day % 2 == 0) {
         money_01 = money_01 + 200000;
     } else {
         money_01 = money_01 + 100000;
     }
}
console.log(money_01);

// 2. Thực hiện tiết kiệm 100 đến ngày 8 thì dừng lại
let money_02 = 0;
for (let day = 1; day <= 30; day++) {
    if (day == 8) {
        console.log("dừng lại");
    }
    money_02 = money_02 + 100000;
}
console.log(money_02);

// 3. Chỉ thực hiện tiết kiệm 100 vào các ngày chẵn, ngày lẻ bỏ qua
let money_03 = 0;
for (day = 1; day <= 30; day++) {
    if (day % 2 != 0) {
        console.log(`Ngay lẻ ${day} bỏ qua`);
        continue
    }
    money_03 = money_03 + 100000;
}
console.log(money_03);