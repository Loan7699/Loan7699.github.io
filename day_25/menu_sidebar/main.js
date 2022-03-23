$('.menu-icon').click(function() {
    $('.menu ul').css('left', '0')
    $('#overlay').css('display', 'block');
    // click menu màn overlay hiện
})

// Ban đầu xét cách left = -250px đúng bằng chiều rộng menu
// sau khi click dùng đổi left về 0

$('#overlay').click(function() {
    $('.menu ul').css('left', '-250px');
    $('#overlay').css('display', 'none');
})

$(window).resize(function() {
    if($(window).innerWidth() > 768) {
        $(".menu ul").css("left", "-250px")
        $("#overlay").css("display", "none")
    }
})
