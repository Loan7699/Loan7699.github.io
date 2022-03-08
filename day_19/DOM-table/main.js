// Thêm class “table-bordered” cho <table>
const table = document.querySelector('.table')
table.classList.add('table-bordered');

// Thêm class “bg-dark” cho <tr> đầu tiên
const tr1 = document.querySelector('tr');
tr1.classList.add('bg-dark');

// Thêm 1 hàng mới trong table với nội dung như sau : ‘Sean Reyes’ (@sreyes)
const newTable = document.createElement('tr');
newTable.innerHTML = '<td>6</td><td> Sean</td><td>Reyes</td><td>@sreyes</td>';

table.insertAdjacentElement('beforeend', newTable);

// Cập nhật “Leona Dixon’s handle” thành “@dixonl” (hàng 3 - cột Handle)
const row3 = document.querySelector('tr:nth-child(4)');
const row3col4 = row3.querySelector('td:last-child');
row3col4.innerText = '@dixonl';

// Di chuyển “Rosa Reed” lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.
const row4 = document.querySelector('tr:nth-child(5)');
const row4Copy = row4.cloneNode(true);
const row1 = document.querySelector('tr');

row1.insertAdjacentElement('afterend', row4Copy);
row4.parentElement.removeChild(row4);

const tr = document.querySelectorAll('tr');
for (let i = 1; i < tr.length; i++) {
    tr[i].querySelector('td').innerText = i;
}


// Đổi chỗ 2 cột “First” và “Handle” cho nhau
const first = document.querySelectorAll('td:nth-child(2)');
const handle = document.querySelectorAll('td:nth-child(4)');

for ( let i = 0; i < first.length; i++) {
    let contentTd2 = first[i].innerText;
    first[i].innerText = handle[i].innerText;
    handle[i].innerText = contentTd2;
}

const thFirst = document.querySelector('th:nth-child(2)');
const thHandle = document.querySelector('th:nth-child(4)');

let temp = thFirst.innerText;
thFirst.innerText = thHandle.innerText;
thHandle.innerText = temp;


// Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = “#f2f2f2”
const row = document.querySelectorAll('tr');
for (let i = 0; i < row.length; i++) {
    if (i % 2 != 1) {
        row[i].style.backgroundColor = "#f2f2f2";
    }
}


