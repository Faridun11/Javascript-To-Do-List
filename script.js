let elForm = document.querySelector(".form");
let elTemplate = document.querySelector(".template").content;
let elList = document.querySelector(".list");
let elFormInput = elForm.querySelector(".form__input");

let todosArr = []

function renderArr(arr, list) {
    list.innerHTML = null

    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        cloneTemplate.querySelector("span").textContent = item.content

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
        alert("Bo`sh joyni to`ldiring")
    }
})
