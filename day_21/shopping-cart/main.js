// Phân tích
// Chức năng có thể thực hiện trên giao diện?
/*
1. xóa sản phẩm
2. chỉnh sửa số lượng sản phẩm
3. nhập mã khuyến mại
4. tính tổng tiền
5. tính tổng số sản phẩm trong giỏ hàng
*/

// Đối tượng ở đây là gì? Sản phẩm
// có thuộc tính nào
// 1. id => Id : number
// 2. tên sp => title: string
// 3. mô tả => description: string
// 4. số lượng trong giỏ hàng => count: number
// 5. giá => price: number
// 6. ảnh => image: string

let products = [
    {
        id: 1,
        title: 'Kem CN',
        description: 'Mô tả sản phẩm 1',
        count: 2,
        price: 500000,
        image: 'https://anessa.vn/uploads/images/product-15867068741.png'
    },

    {
        id: 2,
        title: 'Sữa rửa mặt',
        description: 'Mô tả sản phẩm 2',
        count: 2,
        price: 250000,
        image: 'https://media.hasaki.vn/catalog/product/g/o/google-shopping-bo-doi-gel-chong-nang-anessa-bot-rua-mat-d-program.jpg'
    }
]

// các mã giảm giá
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40
}

// Function convert tiền
function convertMoney(number) {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

}

// Truy cập vào các thành phần
let productsEl = document.querySelector('.products');
let countNumber = document.querySelector('.count');
let subtotalEl = document.querySelector('.subtotal span');
let vatEl = document.querySelector('.vat span');
let totalEl = document.querySelector('.total span');
let inputCodeEl = document.querySelector('#promo-code');
let discountEl = document.querySelector('.discount');
let btnCode = document.querySelector('.promotion button');

// Hiển thị DL trên giao diện
function renderProduct(arr) {
    // xóa hết DL trước khi render
    productsEl.innerHTML = '';

    // Cập nhật số lượng
    updateTotalProduct(arr);

    // Tính tổng tiền
    updateTotalMoney(arr)

    // Tính tổng tiền sau khi áp mã KM
    updateCodeTotalMoney(arr)

    // Kiểm tra không có sp nào trong giỏ hàng
    if (arr.length == 0) {
        productsEl.insertAdjacentElement('afterbegin', '<li> Không có sản phẩm nào trong giỏ hàng</li>');
        document.querySelector('.option-container').style.display = 'none';
        return;
    }
    // Trường hợp có sp
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        html += `
        <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="${p.image}" alt="${p.title}">
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${p.title}</a></div>
                            <div class="description">
                                ${p.description}
                            </div>
                            <div class="price">${convertMoney(p.price)}</div>
                        </div>
                    </div>
    
                    <div class="col right">
                        <div class="quantity">
                            <button class="btn-subtract" onclick='subtractCount(${p.id})'>-</button>
                            <p>${p.count}</p>
                            <button class="btn-add" onclick='addCount(${p.id})'>+</button>
                        </div>
    
                        <div class="remove">
                            <span class="close" onclick='removeProduct(${p.id})'>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
        `
    }
    productsEl.innerHTML = html;

}

// 5. Tính số lượng sản phẩm
function updateTotalProduct(arr) {
    // Duyệt vòng lặp để tính tổng các giá trị thuộc tính 'count'
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].count;
    }

    // update tổng tính được vào phần tử có lass'count'
    countNumber.innerText = `${count} items in the bag`
}

// 1. Xóa sản phẩm
function removeProduct(id) {
    // sử dụng vòng lặp để tìm sp có id tương ứng
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            // xóa sp ra khỏi mảng 'products'
            products.splice(i, 1);
        }
    }
    // render lại giao diện
    renderProduct(products)
}

// Tăng số lượng sản phẩm
function addCount(id) {
    // sử dụng vòng lặp tìm id tương ứng
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            // tăng giá trị count lên 1
            products[i].count++;
        }
    }
    // render lại giao diện
    renderProduct(products);
}

// Giảm số lượng sản phẩm
function subtractCount(id) {
    // sử dụng vòng lặp tìm id tương ứng
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            if (products[i].count == 1) {
                return;
            }
            products[i].count--;
        }
        // giảm giá trị count lên 1
        // giá trị sau khi giảm phải >= 1
    }
    // render lại giao diện
    renderProduct(products);
}

// Tính tổng tiền
function updateTotalMoney(arr) {
    let subtotal = 0;
    for (let i = 0; i < arr.length; i++) {
        subtotal += arr[i].count * arr[i].price;
    }
    
    let vat = (subtotal * 10) / 100;
    let total = subtotal + vat;
    
    subtotalEl.innerText = convertMoney(subtotal);
    vatEl.innerText = convertMoney(vat);
    totalEl.innerText = convertMoney(total);
}

// Tính tổng tiền khi có mã giảm
function updateCodeTotalMoney(arr) {
    // sử dụng vòng lặp để tính tổng tiền (subtotal)
    let subtotal = 0;
    for (let i = 0; i < arr.length; i++) {
        // Tổng tiền = count*price;
        subtotal += arr[i].count * arr[i].price;
    }

    // VAT = 10% * subtotal
    let VAT = (10 * subtotal) / 100

    // total = subtotal + VAT
    let total = subtotal + VAT;

    // cập nhật lại phần tử tương ứng

    // mặc định là discount = 0;
    // kiểm tra discount hợp lệ hay không
    let keys = Object.keys(promotionCode);
    let discount = 0;

    btnCode.addEventListener('click', function () {
        // lấy giá trị trong ô input khuyến mãi
        let promocodeValue = inputCodeEl.value;
        
        // Nếu hợp lệ thì tính toán discount dựa vào giá trị được giảm
        for (let i = 0; i < keys.length; i++) {
            if (promocodeValue == keys[i]) {
                // hiện phần tử discount khi mã KM hợp lệ bằng cách xóa class 'hide'
                discountEl.classList.remove('hide');

                // gán giá trị mã KM = value ứng với key của object
                let code = promotionCode[keys[i]];

                // tính discount = giá tiền sp * giá trị mã KM
                discount = (subtotal * code) / 100;
                
                // total = subtotal + VAT - discount
                total = total - discount;

                // cập nhật nội dung mới cho các phần tử
                discountEl.innerText = `Discount ${convertMoney(discount)}`;
                subtotalEl.innerText = convertMoney(subtotal);
                vatEl.innerText = convertMoney(VAT);
                totalEl.innerText = convertMoney(total);
                return;
            }
        }
    })
    // khi bấm nút giảm giá gọi luôn updateTotalMoney
}

// btnCode.addEventListener('click', updateTotalMoney(products));

renderProduct(products);