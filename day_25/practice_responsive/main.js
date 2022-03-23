// const menuUlEl = document.querySelector('.page-number ul');
// const menuEl = document.querySelector('.page-number');
// const menuIconEl = document.querySelector('.menu-icon');

// menuIconEl.addEventListener('click', function() {
//     menuUlEl.classList.toggle('show');
//     console.log('Hi');
// })

let isShow = false
$(".menu-icon").click(function () {
    isShow = !isShow
    $(".menu ul").slideToggle(function () {
        if (isShow) {
            $(".menu ul").css("display", "flex")
        } else {
            $(".menu ul").css("display", "none")
        }
    })
})

$(window).resize(function() {
    if($(window).innerWidth() > 768) {
        $(".page-number ul").css("display", "flex");
        $("#overlay").css("display", "none")
        isShow = false
    } else {
        $(".page-number ul").css("display", "none")
    }
})


$('.menu-icon').click(function() {
    $('.page-number ul').css('display', 'flex')
    $('#overlay').css('display', 'block');
    // click menu màn overlay hiện
})

// Ban đầu xét cách left = -250px đúng bằng chiều rộng menu
// sau khi click dùng đổi left về 0

$('#overlay').click(function() {
    $('.page-number ul').css("display", "none");
    $('#overlay').css('display', 'none');
})

$('.menu-close').click(function() {
    $('.page-number ul').css("display", "none");
    $('#overlay').css('display', 'none');
})
