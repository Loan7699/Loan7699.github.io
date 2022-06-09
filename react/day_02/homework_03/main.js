// Bài 3: Cho 1 mảng các số nguyên, trả về bộ ba các số sao cho i#j#k sao cho num[i] + num[j] + num[k] == 0;

function threeSum(array) {
    // sắp xếp mảng các số
    array.sort(function (a, b) { return a - b; });
    console.log(array);
    // khai báo mảng chứa bộ 3 số và mảng sau khi tìm i,j,k bằng rỗng
    let triplets = [];
    let newArray = [];

    for (let i = 0; i < array.length - 2; i++) {
        let j = i + 1; //j sau i
        let k = array.length - 1; // k là chỉ số cuối mảng

        while (j < k) {
            if (array[i] + array[j] + array[k] == 0) {
                // thỏa mãn Đk thì thêm gtri vào mảng bộ ba số
                // thiếu TH xét trùng num[i] = num[i-1] và với j, k
                triplets.push(array[i], array[j], array[k]);

                // kiểm tra nếu mảng sau ko chứa mảng bộ ba thì thêm bộ ba vào mảng đó
                if (newArray.includes(triplets) == false) {
                    newArray.push(triplets);
                    // gán lại giá trị mảng
                    triplets = [];
                }

                j++;
                k--;
            }
            else
                j++;
        }
    }

    return newArray;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([-12, 3, 6, 1, 6, -9]));
