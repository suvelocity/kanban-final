let data
let localSave = localStorage.getItem("tasks")
if (localSave){
    data = JSON.parse(localSave)
}
else {data = {
    "todo": [],
    "in-progress": [],
    "done": []
  }
}
const createElement = (tag, content = [], clss = [], attr = {}, eventListener = {}) => {
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
const addNewData = (target, task) => {
    if (target.id === "submit-add-to-do"){
        data.todo.push(task)
    }
    if (target.id === "submit-add-in-progress"){
        data["in-progress"].push(task)
    }
    if (target.id === "submit-add-done"){
        data.done.push(task)
    }
    return data
}
const removeData = (taskToDelete) => {
    for (const elem of data.todo){
        if (elem == taskToDelete) {
            data.todo.splice(data.todo.indexOf(elem), 1)
        }
    }
    for (const elem of data["in-progress"]){
        if (elem == taskToDelete) {
            data["in-progress"].splice(data["in-progress"].indexOf(elem), 1)
        }
    }
    for (const elem of data.done){
        if (elem == taskToDelete) {
            data.done.splice(data.done.indexOf(elem), 1)
        }
    }
}
const deleteTask = ({target}) => {
    const elementToDelete = target.closest("li")
    elementToDelete.parentElement.removeChild(elementToDelete)
    removeData(elementToDelete.innerText)
    localSaveData()
}
function localSaveData(){
    localSave = JSON.stringify(data)
    localStorage.setItem("tasks", localSave)
}

function createTask(task){
    const taskDeleteButton = createElement("button", [""], ["delete-button"], {}, {click: deleteTask})
    const newTaskElem = createElement("li", [task, taskDeleteButton], ["task"])
    return newTaskElem
}

function addNewTask({target}){
    const section = target.closest("section")
    const newTask = section.querySelector("input").value
    if (newTask == "" ) {
        alert("OOPS! can't add empty task")
        return
    }
    const newTaskElem = createTask(newTask)
    const sectionUl = section.querySelector("ul")
    sectionUl.prepend(newTaskElem)
    section.querySelector("input").value = ""
    addNewData(target, newTask)
    localSaveData()
}
function generateLists(){
    for (const task of data.todo) {
        const toDoList = document.querySelectorAll(".to-do-tasks")[0]
        const newTask = createTask(task)
        toDoList.appendChild(newTask)
    }
    for (const task of data["in-progress"]) {
        const inProgressList = document.querySelectorAll(".in-progress-tasks")[0]
        const newTask = createTask(task)
        inProgressList.appendChild(newTask)
    }
    for (const task of data.done) {
        const doneList = document.querySelectorAll(".done-tasks")[0]
        const newTask = createTask(task)
        doneList.appendChild(newTask)
    }
}

const addButtons = document.querySelectorAll(".new-task-button")
for (const button of addButtons) {
    button.addEventListener("click", addNewTask)
}
generateLists()