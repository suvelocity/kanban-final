//  Initialazing Data //
let data
let localSave = localStorage.getItem("tasks")
if (localSave){
    data = JSON.parse(localSave)
}
else {
    data = {
    "todo": [],
    "in-progress": [],
    "done": []
    }
}

//  Data updating  //
const addNewTaskData = (ul, task) => {
    
    if (ul.classList.contains("to-do-tasks")){
        data.todo.push(task)
    }
    if (ul.classList.contains("in-progress-tasks")){
        data["in-progress"].push(task)
    }
    if (ul.classList.contains("done-tasks")){
        data.done.push(task)
    }
    return data
}
const removeTaskData = (taskToDelete) => {
    for (const task of data.todo){
        if (task == taskToDelete) {
            data.todo.splice(data.todo.indexOf(task), 1)
        }
    }
    for (const task of data["in-progress"]){
        if (task == taskToDelete) {
            data["in-progress"].splice(data["in-progress"].indexOf(task), 1)
        }
    }
    for (const task of data.done){
        if (task == taskToDelete) {
            data.done.splice(data.done.indexOf(task), 1)
        }
    }
    return data
}
function updateLocalSaveData(){
    localSave = JSON.stringify(data)
    localStorage.setItem("tasks", localSave)
}


//  Maniputale tasks order and sections  //
let taskToMove
const moveTask = (section) => {
        // Get the needed data about the task
    const previusTaskUl = taskToMove.closest("ul")
    const taskText = taskToMove.innerText
        // Create the task in it's new section
    const newTaskElem = createTask(taskText)
    section.prepend(newTaskElem)
    console.log(section, taskText)
        // Removes the task from it's previus section
    taskToMove.parentElement.removeChild(taskToMove)
        // Updates local storage
    removeTaskData(taskText)
    addNewTaskData(section, taskText)
    updateLocalSaveData()
    taskToMove = null

}
function moveBetweenSections({altKey, key}){
    if (taskToMove){
        if (altKey && key == 1){
            const toDoList = document.querySelector(".to-do-tasks")
            moveTask(toDoList)
        }
        if (altKey && key == 2){
            const toDoList = document.querySelector(".in-progress-tasks")
            moveTask(toDoList)
        }
        if (altKey && key == 3){
            const toDoList = document.querySelector(".done-tasks")
            moveTask(toDoList)
        }
    }
}
function hoverHandler({target}){
    if (target.classList.contains("task")){
        taskToMove = target
        document.addEventListener("keydown", moveBetweenSections)
        // console.log(target)
    }
    target.onmouseout = () => {
        document.removeEventListener("keypress", moveBetweenSections)
        taskToMove = null
    }
}

//  Create and delete elements  //
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

function deleteTask({target}) {
    const elementToDelete = target.closest("li")
    elementToDelete.parentElement.removeChild(elementToDelete)
    removeTaskData(elementToDelete.innerText)
    updateLocalSaveData()
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
    addNewTaskData(sectionUl, newTask)
    updateLocalSaveData()
}

//  Initializing DOM  //
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

generateLists()

//  Adding event listeners  //
const addButtons = document.querySelectorAll(".new-task-button")
for (const button of addButtons) {
    button.addEventListener("click", addNewTask)
}
document.addEventListener("mouseover", hoverHandler)
