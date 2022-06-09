// Bài 1: Cho 2 số không âm num1 và num 2 dưới dạng chuỗi, trả về tích 2 số dạng chuỗi, ko đc s/d thư viện chuyển đổi số sang chuỗi
var multiply = function(num1, num2) {
    // lấy độ dài chuỗi num1, num2
    var len1 = num1.length;
    var len2 = num2.length;

    // điền value = 0 vào mảng gồm (len1+len2) phần tử => res = [0,0,0,0,0,0];
    var res = Array(len1 + len2).fill(0); // mảng chứa kết quả
    
    var val = 0; // giá trị khi nhân tương ứng phần tử chuỗi 1 với ptu chuỗi 2
    var index = 0; // chỉ số trong mảng res
  
    // vòng lặp lần lượt các phần tử của mảng 1,2
    for (var i = len1 - 1; i >= 0; i--) {
      carry = 0; // phần nhớ khi nhân
      for (var j = len2 - 1; j >= 0; j--) {
        index = len1 + len2 - 2 - i - j;
        
        val= (num1[i] * num2[j]) + carry + res[index]; // 2 ptu nhân lại + nhớ + giá trị tại chỉ số đó
      
        carry = Math.floor(val / 10); // phần nhớ sang hàng kề trái

        res[index] = val % 10; // phần kết quả viết
        
      }
      if (carry!=0) { // sau khi nhân ptu cuối của num2 với các phần tử của num1, xét nếu phần nhớ (carry) # 0 thì điền phần tử tương ứng chỉ số tiếp theo bằng carry
        
        res[index + 1] = carry;
      }
    }
  
    while (res.length > 1 && res[res.length - 1] === 0) // res.length = 1 cho TH nhân với số 0
    res.pop(); // khi phần tử cuối củng của mảng res=0 => xóa phần tử cuối của mảng (xóa 0)
  
    return res.reverse().join(''); // đảo ngược các phần tử của mảng kết quả => chuyển mảng về chuỗi
  };

console.log(multiply('123', '456'));
console.log(multiply('12', '56'));