// truy cập
const heading = $('#heading');
console.log(heading);

// Chèn nội dung : html(); text(), val()
heading.html('Xin chào')
// val(): lấy nội dung trong input

// style
// Chèn từng thuộc tính
heading.css('color', 'red')

// Chèn nhiều thuộc tính
heading.css({
    'color': 'green',
    'background-color': 'red'
})

// Sự kiện
$('.btn').click(function() {
    $('#heading').toggle() // click vào btn heading ẩn, hiện
    // Tham khảo jQuery Effects
})

$('.para').each(function(index, ele) { // truy cập vào tất cả các phần tử para
    $(ele).css('color', 'blue');
})

$('.box ul li').eq(2).css('color', 'blue'); // li thứ 3
$('.box ul li').first().css('color', 'green'); // li đầu
$('.box ul li').eq(0).css('color', 'pink'); // li đầu
$('.box ul li').last().css('color', 'red'); // li cuối
// truy cập anh em...: parent(), next(), prev()

// Sử dụng .ajax để gọi api
$.ajax({
    type: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
    sucess: function (res) {
        console.log(res);
    },
    error: function(err) {
        console.log(err);
    }
});

// Sử dụng fetch JS lấy api
async function getRandom() {
    let res = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await res.json();

    console.log(data);
}
getRandom();