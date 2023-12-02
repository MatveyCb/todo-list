let toggleBtn = document.querySelector(".toggle__bulb")

let bulb = document.querySelector(".bulb")

let body = document.querySelector("body")

let buttonAdd = document.querySelector(".button__add")

let footer = document.querySelector(".footer__text")

let input = document.querySelector(".input__add")

let listContainer = document.querySelector(".todo__list")

let caunter = 0

let caunterElement = document.querySelector(".counter span")

let light = "dark"

toggleBtn.addEventListener("click", () => {

    if (light == "dark") {
        light = "white"
    } else {
        light = "dark"
    }

    toggleBtn.classList.toggle("toggle__bulb-active");
    bulb.classList.toggle("bulb-active")
    body.classList.toggle("body-active")
    buttonAdd.classList.toggle("active__todo")
    footer.classList.toggle("footer__text-active")

    let listItem = document.querySelectorAll(".todo__list-item")
    let dlts = document.querySelectorAll(".dlt")
    for (let e = 0; e < listItem.length; e++) {
        listItem[e].classList.toggle("active__todo")
        dlts[e].classList.toggle("active__dlt")
    }
})

buttonAdd.addEventListener("click", () => {
    if (input.value == "") {
        alert("you most write someting")
    }
    else {
        listContainer.innerHTML += `<div class="${light == "dark" ? "todo__list-item" : "todo__list-item active__todo"}">
                                        <p>
                                            ${input.value}
                                        </p>
    
                                        <button class="${light == "dark" ? "dlt" : "dlt active__dlt"}"></button>
                                    </div>`
        input.value = ""
        caunter++
        caunterElement.innerHTML = caunter
        saveData()
    }
})

listContainer.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        event.target.parentElement.remove()
        caunter--
        caunterElement.innerHTML = caunter
        saveData()
    }
})

function saveData() {
    localStorage.setItem("todos", listContainer.innerHTML)
    localStorage.setItem("caunter", caunter)
}

function getData() {
    let data = localStorage.getItem("todos")
    let dataCaunter = localStorage.getItem("caunter")
    if (dataCaunter) {
        caunter = +dataCaunter
        caunterElement.innerHTML = caunter
    }
    if (data) {
        listContainer.innerHTML = data
        let dataItem = document.querySelectorAll(".todo__list-item")
        let dlts = document.querySelectorAll(".dlt")
        dataItem.forEach((element,e) => {
                    dlts[e].classList.remove("active__dlt")
            element.classList.remove("active__todo")
        })
    }
}

getData()