const btn = document.getElementById('btn');

// Xử lý ẩn hiện nút "TOP"
window.addEventListener("scroll", function () {
    // B1: Lấy ra vị trí hiện tại của thanh scroll
    let position = document.documentElement.scrollTop;

    // B2: Nếu vị trí thanh cuộn > 300 thì hiển thị button
    // Và ngược lại
    if (position > 300) {
        btn.style.display = "block";
    } else {
        // Nếu vị trí thanh cuộn < 300 thì ẩn button
        btn.style.display = "none";
    }
});

// Xử lý khi bấm vào nút "TOP" để quay lại đầu trang
btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0, // Vị trí cần đến
        behavior: "smooth", // Kiểu scroll
    });
});


