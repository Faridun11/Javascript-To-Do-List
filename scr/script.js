let elForm = document.querySelector(".form");
let elTemplate = document.querySelector(".template").content;
let elList = document.querySelector(".list");
let elFormInput = elForm.querySelector(".form__input");

let todosArr = []

const deleteTodo = (e) => {
    let dataId = e.target.dataset.ID

    let findTodo = todosArr.findIndex(i => i.id == dataId)

    todosArr.splice(findTodo, 1)

    renderArr(todosArr, elList)
}

function renderArr(arr, list) {
    list.innerHTML = null

    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        let todoContent = cloneTemplate.querySelector("span")
        let todoDeleteBtn = cloneTemplate.querySelector(".list__button__delete")

        todoDeleteBtn.dataset.ID = item.id
        todoContent.textContent = item.content
        todoDeleteBtn.addEventListener("click", deleteTodo)

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

        renderArr(todosArr, elList);
    } else {
        alert("Bo`sh joyni to`ldiring!")
    }
})
