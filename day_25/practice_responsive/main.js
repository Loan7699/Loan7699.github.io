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
    // !isShow = NOT isShow => true
    $(".page-number ul").slideToggle(function () {
        if (isShow) {
            $(".page-number ul").css("display", "flex");
            $('#overlay').css('display', 'block');

        } else {
            $(".page-number ul").css("display", "none")
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


$('#overlay').click(function() {
    $('.page-number ul').css("display", "none");
    $('#overlay').css('display', 'none');
})

$('.menu-close').click(function() {
    $('.page-number ul').css("display", "none");
    $('#overlay').css('display', 'none');
})
