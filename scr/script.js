let elForm = document.querySelector(".form");
let elTemplate = document.querySelector(".template").content;
let elList = document.querySelector(".list");
let elFormInput = elForm.querySelector(".form__input");
let elListCoutItem = document.querySelector(".list__cout__item");

let todosArr = JSON.parse(localStorage.getItem("todos")) || []

const checkTodo = (e) => {

    let dataId = e.target.dataset.ID

    let findCheckTodo = todosArr.find(i => i.id == dataId)

    findCheckTodo.isCompleted = !findCheckTodo.isCompleted
    console.log(findCheckTodo);

    renderArr(todosArr, elList)
    localStorage.setItem("todos", JSON.stringify(todosArr))
}

const editTodo = (e) => {
    let newContent = prompt("Yangi contentni kiriting")
    let dataId = e.target.dataset.ID

    let findEditTodo = todosArr.find(i => i.id == dataId)
    findEditTodo.content = newContent

    renderArr(todosArr, elList)
    localStorage.setItem("todos", JSON.stringify(todosArr))
}

const deleteTodo = (e) => {
    let dataId = e.target.dataset.ID

    let findTodo = todosArr.findIndex(i => i.id == dataId)

    todosArr.splice(findTodo, 1)

    renderArr(todosArr, elList)
    localStorage.setItem("todos", JSON.stringify(todosArr))
}

function renderArr(arr, list) {
    list.innerHTML = null

    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        let todoContent = cloneTemplate.querySelector("span")
        let todoDeleteBtn = cloneTemplate.querySelector(".list__button__delete")
        let todoEditBtn = cloneTemplate.querySelector(".list__button__edit")
        let todoCheckBtn = cloneTemplate.querySelector(".checkbox")

        todoDeleteBtn.dataset.ID = item.id
        todoEditBtn.dataset.ID = item.id
        todoContent.textContent = item.content
        todoCheckBtn.dataset.ID = item.id
        todoDeleteBtn.addEventListener("click", deleteTodo)
        todoEditBtn.addEventListener("click", editTodo)
        todoCheckBtn.addEventListener("change", checkTodo)

        if (item.isCompleted) {
            todoContent.style = "text-decoration: line-through; color: black; font-size: 15px"
            todoCheckBtn.checked = true
        }

        elListCoutItem.textContent = "cout item: " + todosArr.length

        list.appendChild(cloneTemplate)
    })
}

elForm.addEventListener("submit", e => {
    e.preventDefault()

    if (elFormInput.value != "") {
        todosArr.push({
            id: new Date().getMilliseconds(),
            content: elFormInput.value,
            isCompleted: false,
        })
        elFormInput.value = null

        console.log(todosArr);

        localStorage.setItem("todos", JSON.stringify(todosArr))

        renderArr(todosArr, elList);
    } else {
        alert("Bo`sh joyni to`ldiring!")
    }
})

// renderArr(todosArr, elList);

// document.addEventListener("DOMContentLoaded", function () {
//     elFormInput.addEventListener("click", function () {
//         const elFormInput = elForm.value.trim();
//         if (taskText !== "") {
//             const elFormInput = document.createElement("li");
//             const currentTime = new Date().toLocaleTimeString();
//             taskItem.innerHTML = `<strong>${taskText}</strong> - <em>${currentTime}</em>`;
//             taskList.appendChild(elFormInput);
//             taskInput.value = "";
//         } else {
//             alert("Iltimos, vazifani kiriting!");
//         }
//     });
// });

