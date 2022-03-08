let users = [
    {
        name: 'Bob',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
        image: 'abc',
        color: '#ccff33'
    },

    {
        name: 'Marry',
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
        image: '123',
        color: '#ff6633'
    },

    {
        name: 'Jane',
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        image: '456',
        color: '#003df5'
    },

    {
        name: 'Bell',
        quote: "Life is what happens when you're busy making other plans.",
        image: '789',
        color: '#f5b800'
    },

    {
        name: 'Tom',
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        image: 'efg',
        color: '#66ff33'
    },
]

// Khi bấm vào mỗi user nào sẽ hiển thị màu, quote, name của user đó
// Ảnh của user được active to hơn 1 tí (thêm class selected vào user được chọn - xem mã HTML để hiểu rõ hơn)
const container = document.querySelector('.testimonials-container');
const authorImage = document.querySelectorAll('.author');
const quote = document.querySelector('p');
const name = document.querySelector('strong');

for (let i = 0; i < users.length; i++) {
    authorImage[i].addEventListener('click', function () {
        container.style.backgroundColor = users[i].color;
        quote.innerText = users[i].quote;
        name.innerText = users[i].name;
        authorImage[i].classList.add('selected');
        
    })
}
