// Phân tích
// Câu 1. Các chức năng có trong ứng dụng là gì
/*
1. Thêm cv: gõ input rồi ấn vào nút thêm
tiêu đề là nội dung ô input
trạng thái mặc định là false
id: hàm function randomId
2. xóa cv (delete)
3. chỉnh sửa cv
4. lọc cv theo trạng thái
5. thay đổi trạng thái cv (toggle)
*/

// Câu 2. Đối tượng trong ứng dụng là gì? công việc
// Có các thuộc tính nào?
/*
1. trạng thái => status
2. tiêu đề => title
3. id => id
*/
// nếu dùng id option mới bằng length+1 thì khi xóa 1 object sẽ có 2 id trùng nhau
// viết hàm random Id
function randomId() {
    return Math.floor(Math.random() * 1000000);
}

let todos = [
    {
        id: randomId(),
        title: "play soccer",
        status: false,
    },
    {
        id: randomId(),
        title: "do my homework",
        status: true,
    },
    {
        id: randomId(),
        title: "go to school",
        status: true,
    },
];

// Truy cập
const todoList = document.querySelector(".todo-list");

const optionAll = document.getElementById('all');
const optionActive = document.getElementById('active');
const optionUnactive = document.getElementById('unactive');

const btnAdd = document.getElementById('btn-add');
const inputEl = document.getElementById('todo-input');

const btnupdate2 = document.getElementById('btn-update');
const btnupdate1 = document.querySelectorAll('.btn-update');

// Render danh sách
function renderTodo(arr) {
    // xóa hết DL trước khi render
    todoList.innerHTML = "";

    // Kiểm tra trường hợp không có công việc nào trong danh sách
    if (arr.length == 0) {
        todoList.innerHTML = "Không có công việc nào trong danh sách";
        return;
    }
    // khi có công việc thì render, sử dụng vòng lặp
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        // sử dụng toán tử 3 ngôi trong template string để kiểm tra đk và thêm thuộc tính active-todo và checked cho status = true
        html += `
        <div class="todo-item ${t.status ? "active-todo" : ""}">
           <div class="todo-item-title">
                <input type="checkbox" 
                ${t.status ? "checked" : ""}  
                onclick ='toggleStatus(${t.id})'
                />
                <p>${t.title}</p>
           </div>

           <div class="option">
                <button class="btn btn-update" onclick='updateTodo(${t.id})'>
                    <img src="./img/pencil.svg" alt="icon" />
                </button>
                <button class="btn btn-delete" onclick ='deleteTodo(${t.id})'>
                    <img src="./img/remove.svg" alt="icon" />
                </button>
            </div>
        </div>
    `;
    }

    // sau khi có nội dung thì insert lại nội dung cho todoList
    todoList.innerHTML = html;
}

// Định nghĩa function
// 2. Xóa công việc
function deleteTodo(id) {

    // c1: for
    // B1: sử dụng vòng lặp để tìm kiếm object có id == id truyền vào
    for (let i = 0; i < todos.length; i++) {
        let t = todos[i];
        if (t.id == id) {
            todos.splice(i, 1);
        }
    }
    // tìm thấy thì xóa ra khỏi mảng todos

    // B2: Sau khi xóa xong thì gọi function renderTodo để cập nhật lại giao diện

    // C2: filter lọc các công việc không cùng id
    // todos = todos.filter(todo => todo.id != id)
    renderTodo(todos);
}

// 5. Thay đổi trạng thái công việc
function toggleStatus(id) {

    // C1: for
    // B1: Sử dụng for qua mảng todos để tìm kiếm object có id truyền vào
    // Kiểm tra nếu trạng thái cv là true => set lại false
    // nếu trạng thái cv là false set lại là true

    for (let i = 0; i < todos.length; i++) {

        if (todos[i].id == id) {
            if (todos[i].status) {
                todos[i].status = false;
            } else {
                todos[i].status = true;
            }
            // hoặc gán lại giá trị phủ định của nó thay cho if-else
            // todos[i].status = !todos[i].status
        }
    }


    // B2: Sau khi thay đổi DL xong thì gọi lại function renderTodo cập nhật lại giao diện
    renderTodo(todos)
}

// 4. Lọc công việc theo trạng thái
// c2: sử dụng vòng lặp qua 3 option

// C1: thêm sự kiện từng option
optionAll.addEventListener('click', function () {
    // Mặc định Render ra mảng todos
    renderTodo(todos);
})

optionActive.addEventListener('click', function () {
    // B1: lọc các công việc có status = true ra 1 mảng mới
    let newTodos = todos.filter(todo => todo.status == true)
    // B2: render lại giao diện với mảng vừa lọc
    renderTodo(newTodos);
})

optionUnactive.addEventListener('click', function () {
    // B1: lọc các công việc có status = false ra 1 mảng mới
    let newTodos = todos.filter(todo => todo.status == false)
    // B2: render lại giao diện với mảng vừa lọc
    renderTodo(newTodos);
})

// 1. Thêm cv
btnAdd.addEventListener('click', function () {
    // B1: lấy ra dữ liệu trong ô input
    let todo = inputEl.value;
    // B2: kiểm tra DL trống
    // Nếu có thì thông báo -> alert
    if (!todo) {
        alert('Bạn chưa nhập input');
        return; // không thực thi bước 3
    }

    // B3: tạo object todo mới
    let newtodo = {
        id: randomId(),
        title: todo,
        status: false
    }

    // B4: thêm object mới vào mảng todos ban đầu
    todos.push(newtodo); // trả về độ dài mảng mới, thay đổi mảng ban đầu

    // B5: Render lại giao diện
    renderTodo(todos);
    // Clear DL trong ô input để nhập cv khác
    inputEl.value = ''; // gán dữ liệu ô input=0 (vì thẻ input không có nội dung bên trong nên không sử dụng input.innerText)
})

// 3. chỉnh sửa công việc (ấn nút xanh btn-update)
// c1: tạo ô input đang ấn, tiêu đề hiện tại
// C2:
// C3: sử dụng ô input ban đầu, nội dung input là cv muốn sửa tạo thêm 1 nút sửa trong html, khi ấn nút xanh nút sửa hiện, thêm ẩn. sau khi sửa nút thêm hiện, sửa ẩn ( sử dụng thêm class hide hoặc display: none)

function updateTodo(id) {

    // hiện nút sửa, ẩn nút thêm khi bấm btnupdate1
    btnupdate2.classList.remove('hide');
    btnAdd.classList.add('hide');

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            // gán nội dung ô input bằng title của phần tử mảng chọn
            inputEl.value = todos[i].title;

            // bấm btn sửa, gán tiêu đề = nội dung mới của input
            btnupdate2.addEventListener('click', function () {
                todos[i].title = inputEl.value;
    
                renderTodo(todos);

                // ẩn nút sửa, hiện nút thêm
                btnupdate2.classList.add('hide');
                btnAdd.classList.remove('hide');
            })
        }
    }

    // !! title cập nhật mới liên tục qua value của input
    renderTodo(todos);
}

renderTodo(todos);

// Note: mỗi lần thay đổi dữ liệu cần gọi lại function để cập nhật dữ liệu