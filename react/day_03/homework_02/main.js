// Bài 2 (Jump game II): cho 1 mảng các số nguyên ko âm, giá trị mỗi phần tử đại diện cho bước nhảy tối đa tại vị trí đó. Mục tiêu của bạn là đạt tới chỉ số cuối cùng với số lần nhảy ít nhất
let jump = function(array) {

    let end = 0;
    let jumps = 0;
    let farthest = 0;
    for (let i = 0; i < array.length - 1; i++) {
        // console.log(i);
        // console.log(farthest);
        // console.log(i + array[i]);
        farthest = Math.max(farthest, i + array[i]);
        // console.log(farthest);
        if (i == end) {
            jumps++;
            end = farthest;
            // console.log(end);
        }
    }
    return jumps;
}

console.log(jump([2,3,1,1,4]));