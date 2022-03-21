// Sử dụng jQuery để hoàn thiện các yêu cầu sau:

// 1. Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
$('#heading').css({'color': 'red' , 'text-tranform': 'uppercase'});

// 2. Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
$('.para').css({'color': 'blue' , 'font-size': '20px'});

// 3. Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const link = $('<a></a>').text('facebook').attr({"href" : 'https://www.facebook.com/' , 'target' : '_blank'});
$('.para-3').after(link);

// 4. Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
$('#title').text('Đây là thẻ tiêu đề');

// 5. Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
$('.description').addClass('text-bold');

// 6. Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
$('.para-3').replaceWith('<button>Click me</button>');

// 7. Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
$('.para-2').clone().insertAfter($('.para-2'));

// 8. Xóa thẻ có class=“para-1”
$('.para-1').remove();