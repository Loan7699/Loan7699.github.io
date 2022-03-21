// 1. Lấy danh sách giống loài chính và hiển thị
// Vừa vào trang, lấy danh sách breed và hiển thị như sau (giống bài tập trên lớp)
// API: https://dog.ceo/api/breeds/list/all
$.get (
    'https://dog.ceo/api/breeds/list/all',
    function(res) {
        let array = Object.keys(res.message);
        console.log(array);
        let html = '';
        for(let i = 0; i < array.length; i++) {
            html += `<option value='${array[i]}'>${array[i]}</option>`
        }
        $('#list').html(html);
    }
)

// 2.Hiển thị giống loài phụ
// Chọn 1 giống loại cụ thể trông ô select và bấm nút " Get Sub Breed"
// Chi tiết API : https://dog.ceo/dog-api/documentation/sub-breed

$('.btn-sub').click(function() {
    $('li').remove();
    
    let value = $("#list option:selected" ).text();
    $('.sub').removeClass('hide');
    
    $.get(
        `https://dog.ceo/api/breed/${value}/list`,
        function(res) {
            let array = res.message;
            if (array.length == 0) {
                if ($('img').src) {
                    $('img').removeAttr('src');
                }

                let li = $('<li></li>').text('Không có sub breed');
                $('.sub-breed').append(li);
                return;
            }

            for(let i = 0; i < array.length; i++) {
                let li = $('<li></li>').text(`${array[i]}`);
                $('.sub-breed').append(li);

                $('.sub-breed').click(function() {
                    $.get(
                        `https://dog.ceo/api/breed/${value}/${array[i]}/images/random`,

                        function(res) {

                            $('img').attr('src', res.message);
                        }
                    )
                })
            }
        }
    )
    
})

// 3. Hiển thị ảnh random của loài phụ
// Khi bấm vào 1 giống loài phụ bất kỳ trong danh sách " Sub Breeds List" thì hiển thị 1 ảnh random tương ứng với giống loài phụ đó
// Chi tiết API : https://dog.ceo/dog-api/documentation/sub-breed

