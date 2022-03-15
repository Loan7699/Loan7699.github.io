// 1. Callback function: là 1 function được truyền vào làm tham số cho 1 function khác và đươc thực thi tại 1 thời điểm nào đó

function funcA(funcB) { // funcB là 1 function được truyền vào làm tham số cho funcA
    funcB();
}

// cv1: Làm bài tập 3s
// cv2: nấu cơm 4s
// cv3: đá bóng 3s

function doTask1(name, callback) { // sau khi làm xong cv name sẽ làm gì tiếp
    console.log('Bắt đầu công việc');
    console.log(`Thực hiện công việc: ${name}`);
    setTimeout(() => {
        callback()
    }, 3000)
}

function doTask2(name, callback) { // sau khi làm xong cv name sẽ làm gì tiếp
    console.log('Bắt đầu công việc');
    console.log(`Thực hiện công việc: ${name}`);
    setTimeout(() => {
        callback()
    }, 4000)
}

function doTask3(name, callback) { // sau khi làm xong cv name sẽ làm gì tiếp
    console.log('Bắt đầu công việc');
    console.log(`Thực hiện công việc: ${name}`);
    setTimeout(() => {
        callback()
    }, 3000)
}

function finish() {
    console.log('Kết thúc công việc');
}

// // Thực hiện đồng thời doTask1,2,3
// doTask1('Làm bài tập', finish) // (tên cv, function)
// // in ra Bắt đầu cv
// // Thực hiện cv
// // sau 3s in ra Kết thúc cv
// doTask2('Nấu cơm', finish);
// doTask3('Đá bóng', finish);

// Ví dụ về callback dùng trong filter
const isOdd = number => number % 2 == 1;
console.log([1,2,3,4,5].filter(isOdd)); // filter lặp qua các phần tử, mỗi lần lặp gọi đến hàm isOdd => callback function
// Thực hiện tuần tự
doTask1('Làm bài tập', function() {
    doTask2('Nấu cơm', function() {
        doTask3('Đá bóng', finish);
    })
})

// Để khắc phục tình trạng callback hell trong ES6 có tính năng promise