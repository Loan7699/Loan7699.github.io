// Lập trình đồng bộ, bất đồng bộ

// 1. Lập trình đồng bộ: các công việc được thực hiện theo thứ tự, tại 1 thời điểm chỉ có 1 cv được thực hiện

/*
 Có 2 cv: cv 1, cv 2
cv 1: 3s
cv 2" 4s
Tổng thời gian thực hiện 7s
 */

function one() {
    console.log('Công việc 1');
}

function two() {
    console.log('Công việc 2');
}

// Thực hiện cv
one()
two()

// 2. Lập trình bất đồng bộ: chạy song song nhiều cv, cv nào chạy xong trước thực hiện trước
// cv 3: 5s
function three() {
    setTimeout(() => {
        console.log('Công việc 3');
    }, 5000) // delay sau 5s
}

// cv 4: 3s
function four() {
    setTimeout(() => {
        console.log('Công việc 4');
    }, 3000) // delay sau 5s
}

// Tổng tgian thực hiện 5s
three();
four() // kết quả in cv4 trước, cv3 sau do function thực hiện xong trước

// Xử lý bất đồng bộ trong JS
/*
1. callback function
2. promise
3. async-await funtion
*/

