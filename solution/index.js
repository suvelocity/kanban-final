function createElement(tag, content = [], clss = [], attr = {}, eventListener = {}){
    const newElem = document.createElement(tag)
    for (let child of content){
        if (typeof child === "string"){
            newElem.innerText = child
        }
        else {
            newElem.appendChild(child)
        }
    }
    for (let c of clss){
        newElem.classList.add(`${c}`)
    }
    for (let [att, value] of Object.entries(attr)){
        newElem.setAttribute(`${att}`, `${value}`)
    }
    for (let [event, opperator] of Object.entries(eventListener)){
        newElem.addEventListener(`${event}`, opperator)
    }
    return newElem
}
const deleteTask = ({target}) => {
    const elementToDelete = target.closest("li")
    elementToDelete.parentElement.removeChild(elementToDelete)
}
function addNewTask({target}){
    const section = target.closest("section")
    const newTask = section.querySelector("input").value
    if (newTask == "" ) {
        alert("OOPS! can't add empty task")
        return
    }
    const taskDeleteButton = createElement("button", ["❌"], ["delete-button"], {}, {click: deleteTask})
    const newTaskElem = createElement("li", [newTask, taskDeleteButton], ["task"])
    const sectionUl = section.querySelector("ul")
    sectionUl.prepend(newTaskElem)
    section.querySelector("input").value = ""
}

const addButtons = document.querySelectorAll(".new-task-button")
for (const button of addButtons) {
    button.addEventListener("click", addNewTask)
}