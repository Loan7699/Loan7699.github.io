// const menuIconEl = document.querySelector('.menu-icon');
// const menuEl = document.querySelector('.menu ul');

// menuIconEl.addEventListener('click', function() {
//     menuEl.classList.toggle('show');
// })

// // Kéo thả màn hình ul ẩn
// window.addEventListener('resize', function() {
//     if (window.innerWidth > 768) { // kích thước cửa sổ lớn hơn 768 thì ul đóng lại
//         menuEl.classList.remove('show') 
//     }
// })

// Dùng jQuery kết hợp hiệu ứng mượt hơn

// let isShow = false;

// $('.menu-icon').click(function() {
//     isShow = !isShow
//     $('.menu ul').slideToggle(function() {
//         if (isShow) {
//             $('.menu ul').css('dislay', 'flex') // hiện => flex
//         } else {
//             $('.menu ul').css('display', 'none') // ẩn => none
//         }
//     })
// })

// $(window).resize(function() {
//     if ($(window).innerWidth > 768) { // kích thước cửa sổ lớn hơn 768 thì ul đóng lại
//         $('.menuEl').css('dislay', 'flex')
//         isShow = false;
//     } else {
//         $('.menuEl').css('dislay', 'none')
//     }
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
        $(".menu ul").css("display", "flex")
        isShow = false
    } else {
        $(".menu ul").css("display", "none")
    }
})
