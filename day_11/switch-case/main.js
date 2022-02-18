let money = 13000

switch (money) {
    case 12000:
    case 13000:
    case 14000: {
        console.log("cafe sữa");
        break;
    }
    case 10000: {
        console.log("cafe đá");
        break;
    }
    case 8000: {
        console.log("sting dâu");
        break;
    }
    case 2000: {
        console.log("trà đá");
        break;
    }
    default: {
        console.log("Không có đồ uống nào phù hợp");
        break; // break thoát ra khỏi switch-case, nếu ko có break tự động thực hiện câu lệnh ở dưới ko kiểm tra ĐK
    }
}

// Bài tập 1
// Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 - Thứ 7)
// Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
// Ví dụ: day = 6 --> “Hôm nay là thứ 7”

let day = 2
switch (day) {
    case 0: {
        console.log("Hôm nay là thứ hai");
        break;
    }
    case 1: {
        console.log("Hôm nay là thứ ba");
        break;
    }
    case 2: {
        console.log("Hôm nay là thứ tư");
    }
    case 3: {
        console.log("Hôm nay là thứ năm");
        break;
    }
    case 4: {
        console.log("Hôm nay là thứ sáu");
        break;
    }
    case 5: {
        console.log("Hôm nay là thứ bảy");
        break;
    }
    case 6: {
        console.log("Hôm nay là chủ nhật");
        break;
    }
    default: {
        console.log("ko là ngày nào");
    }
}

// Bài tập 2
// Tạo biến month có giá trị từ 1 -> 12, là các tháng trong năm
// Sử dụng switch-case để in ra mùa tương ứng với giá trị của biến month
// 1, 2, 3 : Mùa xuân
// 4, 5, 6 : Mùa hạ
// 7, 8, 9 : Mùa thu
// 10, 11, 12 : Mùa đông
// Ví dụ: month = 9 --> “Mùa thu”

let month = 2;

switch (month) {
    case 1:
    case 2:
    case 3: {
        console.log("Mùa xuân");
        break;
    }
    case 4:
    case 5:
    case 6: {
        console.log("Mùa hạ");
        break;
    }
    case 7:
    case 8:
    case 9: {
        console.log("Mùa thu");
        break;
    }
    case 10:
    case 11:
    case 12: {
        console.log("Mùa đông");
        break;
    }
}