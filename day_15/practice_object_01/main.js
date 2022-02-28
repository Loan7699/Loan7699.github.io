// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const showInfoProduct = products => { // products khác với ở trên
    products.forEach(product => {
        console.log(`${product.name} - ${product.brand} - ${products.brand} - ${product.count}`);
    })
}
showInfoProduct(products);
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const totalPriceProducts = price => {
    let res = 0
    products.forEach(product => {
        res += product.price * product.count
    })
    return res;
}
console.log(totalPriceProducts(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findProductsApple = products => {
    return products.filter(product => product.brand == "Apple")
}
console.log(findProductsApple(products));

// 4. Tìm các sản phẩm có giá > 20000000
const findProducts = products => {
    return products.filter(product => product.price > 20000000)
}
console.log(findProducts(products));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findProductName = products => {
    return products.filter(product => (product.name).toLowerCase().includes('pro'))
}
console.log(findProductName(products));
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
const addProduct = product => {
    let index = Math.floor(Math.random() * products.length);
    products.push(products[index]);
    return products;

}
console.log(addProduct(products));

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const deleteProductSamsung = product => {
    return products.filter(product => ((product.brand).indexOf('Samsung') == -1));
}
console.log(deleteProductSamsung(products));

// 8. Sắp xếp giỏ hàng theo price tăng dần
const arrangePriceIncrease = product => {
    let price = products.map(student => student.price);
    price.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < products.length; i++) {
        arr = arr.concat(products.filter(product => product.price == price[i]));
    }
    return arr;
}
console.log(arrangePriceIncrease(products));
// 9. Sắp xếp giỏ hàng theo count giảm dần
const arrangePriceDecrease = product => {
    let price = products.map(student => student.price);
    price.sort((a, b) => a - b).reverse();
    let arr = [];
    for (let i = 0; i < products.length; i++) {
        arr = arr.concat(products.filter(product => product.price == price[i]));
    }
    return arr;
}
console.log(arrangePriceDecrease(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const bringProducts = product => {
    index1 = Math.floor(Math.random() * products.length);
    index2 = Math.floor(Math.random() * products.length);
    let new_array = [];
    new_array.push(products[index1], products[index2]);
    return new_array;
}
console.log(bringProducts(products));

// buổi thứ 2 tuần sau kiểm tra Javascript cơ bản, chủ yếu array và object
// 20 câu TN 20ph
// 7-8 bài code 