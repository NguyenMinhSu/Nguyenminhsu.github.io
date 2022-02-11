// Các chức năng có trong ứng dụng todolist
// 1. Thêm công việc
// 2. Lọc công việc theo trạng thái
// 3. Thay đổi trạng thái cv
// 4. Sửa tên cv
// 5. Xóa công việc
// 6. Hiển thị danh sách công việc ban đầu

// Mỗi cv bao gồm các thuộc tính gì
// 1. Tên công việc - title
// 2. Trạng thái công việc - status - (true/false)
// 3. Id (duy nhất - không trùng nhau)

// Random id
const todoInputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");
function randomId() {
    return Math.floor(Math.random() * 1000)
}

// Mockup data mẫu
let todos = [
    {
        id : randomId(),
        title : "Làm bài tập",
        status : false
    },
    {
        id : randomId(),
        title : "Đi đá bóng",
        status : true
    },
    {
        id : randomId(),
        title : "Chơi game với bạn",
        status : false
    }
]
// Các chức năng có trong ứng dụng todolist
// 1. Thêm công việc
// 2. Lọc công việc theo trạng thái
// 3. Thay đổi trạng thái cv
// 4. Sửa tên cv
// 5. Xóa công việc
// 6. Hiển thị danh sách công việc ban đầu

// Mỗi cv bao gồm các thuộc tính gì
// 1. Tên công việc - title
// 2. Trạng thái công việc - status - (true/false)
// 3. Id (duy nhất - không trùng nhau)

// Random id
function randomId() {
    return Math.floor(Math.random() * 1000)
}

// Mockup data mẫu
let todos = [
    {
        id : randomId(),
        title : "Làm bài tập",
        status : false
    },
    {
        id : randomId(),
        title : "Đi đá bóng",
        status : true
    },
    {
        id : randomId(),
        title : "Chơi game với bạn",
        status : false
    }
]

const todolistEl = document.querySelector(".todo-list");

// 6. Hiển thị danh sách công việc ban đầu
function renderTodo(arr) {
    // Xóa hết dữ liệu hiện có để chuẩn bị render dữ liệu mới
    todolistEl.innerHTML = ""

    // Danh sách công việc trống
    if(arr.length == 0) {
        todolistEl.innerHTML = "Không có công việc nào trong danh sách"
        return
    }

    // Hiển thị danh sách công việc ra ngoài giao diện
    let content = ""
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i]; // t đại diện cho 1 object todo
        content += `
            <div class="todo-item ${t.status == true ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.status == true ? "checked" : ""}/>
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    }

    // Chèn dữ liệu mới để hiển thị
    todolistEl.innerHTML = content
}
btnAdd.addEventListener("click", function () {
    // B1 : Lấy dữ liệu trong ô input
    let title = todoInputEl.value

    // B2 : Kiểm tra dữ liệu có trống hay không
    if (title == "") {
        alert("Tên công việc không được để trống")
        return
    }

    // B3 : Tạo object todo mới
    let newTodo = {
        id: randomId(),
        title: title,
        status: false
    }

    // B4 : Thêm object todo mới vào trong mảng todos ban đầu
    todos.push(newTodo)

    // B5 : Hiển thị cv mới ra ngoài giao diện
    renderTodo(todos)
    todoInputEl.value = "" // clear dữ liệu trong ô input để nhập cv khác
})


