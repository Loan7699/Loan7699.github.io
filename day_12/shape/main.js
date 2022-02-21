// Sử dụng vòng lặp lồng nhau để in ra các hình sau (sử dụng document.write)
// Hình 1
function drawRectangle_01(row, col) {
    let content = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            content += "* ";
        }
        content += `<br/>`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle_01(5, 4);

// Hình 2
function drawRectangle_02(row, col) {
    let content = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if(i == 1 || i == row || j == 1 || j == col ) {
                content += "* "
            } else {
                content += "  "
            }
        }
        content += `<br/>`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle_02(5, 4);

// Hình 3
function drawRectangle_03(side) {
    let content = "";
    for (let i = 1; i <= side; i++) {
        for (let j = 1; j <= side; j++) {
            if((i == j) || (i+j-1 == side)) {
                content += "* "
            } else {
                content += "  "
            }
        }
        content += `<br/>`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle_03(7);

//Hình 4
function drawRectangle_04(side) {
    let content = "";
    for (let i = 1; i <= side; i++) {
        for (let j = 1; j <= side; j++) {
            if(i >= j) {
                content += "* "
            } else {
                content += "  "
            }
        }
        content += `<br/>`
    }
    document.write(`<pre>${content}</pre>`)
}
drawRectangle_04(7);