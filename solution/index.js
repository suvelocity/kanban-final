            ////////////////////////
            //    Local srorage   //
            ////////////////////////

//  Initialazing Tasks  //
let taskObj
let localSave = localStorage.getItem("tasks")
if (localSave){
    taskObj = JSON.parse(localSave)
}
else {
    taskObj = {
    "todo": [],
    "in-progress": [],
    "done": []
    }
}

//  Initialazing Labels  //
let labeledTasksObj
let localLabeledTasksSave = localStorage.getItem("labeledTasks")
if (localLabeledTasksSave){
    labeledTasksObj = JSON.parse(localLabeledTasksSave)
}
else {
    labeledTasksObj = {
    "todo": {},
    "in-progress": {},
    "done": {}
    }
}
const updateLabeledTasksObj = () => {
    const tasksList = document.querySelectorAll(".task")
    for (const task of tasksList) {
        const taskUl = task.closest("ul")
        if (taskUl.classList.contains("to-do-tasks")){
            labeledTasksObj.todo[task.innerText] = task.dataset.label
        }
        if (taskUl.classList.contains("in-progress-tasks")){
            labeledTasksObj["in-progress"][task.innerText] = task.dataset.label
        }
        if (taskUl.classList.contains("done-tasks")){
            labeledTasksObj.done[task.innerText] = task.dataset.label
        }
    }
}

let labels
let localLabelsSave = localStorage.getItem("labels")
if (localLabelsSave){
    labels = JSON.parse(localLabelsSave)
}
else {
    labels = {
        defult: "rgb(248, 248, 234)",
        work: "rgb(185, 255, 163)",
        personal: "rgb(182, 189, 255)",
    }
}
function updateLocalLabeledTasksData(){
    localLabeledTasksSave = JSON.stringify(labeledTasksObj)
    localStorage.setItem("labeledTasks", localLabeledTasksSave)
}
function updateLocalLabelsData(){
    localLabelsSave = JSON.stringify(labels)
    localStorage.setItem("labels", localLabelsSave)
}

//  Data updating  //
const addNewTaskData = (ul, task) => {
    
    if (ul.classList.contains("to-do-tasks")){
        taskObj.todo.push(task)
    }
    if (ul.classList.contains("in-progress-tasks")){
        taskObj["in-progress"].push(task)
    }
    if (ul.classList.contains("done-tasks")){
        taskObj.done.push(task)
    }
}
const removeTaskData = (taskToDelete) => {
    for (const task of taskObj.todo){
        if (task == taskToDelete) {
            taskObj.todo.splice(taskObj.todo.indexOf(task), 1)
        }
    }
    for (const task of taskObj["in-progress"]){
        if (task == taskToDelete) {
            taskObj["in-progress"].splice(taskObj["in-progress"].indexOf(task), 1)
        }
    }
    for (const task of taskObj.done){
        if (task == taskToDelete) {
            taskObj.done.splice(taskObj.done.indexOf(task), 1)
        }
    }
}
function updateLocalSaveData(){
    localSave = JSON.stringify(taskObj)
    localStorage.setItem("tasks", localSave)
}

            ////////////////////////
            //        DOM         //
            ////////////////////////



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

function createTask(task){
    const hamburgerTop = createElement("div", [], ["hamburger-menu", "hamburger-top"])
    const hamburgerMiddle = createElement("div", [], ["hamburger-menu", "hamburger-middle"])
    const hamburgerBottom = createElement("div", [], ["hamburger-menu", "hamburger-bottom"])
    const taskDeleteButton = createElement("button", [hamburgerTop, hamburgerMiddle, hamburgerBottom], ["options-button"], {}, {click: callMenu}) 
    const newTaskElem = createElement("li", [task, taskDeleteButton], ["task"], {"data-label": "defult"})
    return newTaskElem
}
function deleteTask() {
    const elementToDelete = targetedTask
    elementToDelete.parentElement.removeChild(elementToDelete)
    removeTaskData(elementToDelete.innerText)
    updateLocalSaveData()
    deleteMenu()
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
let thisNewTaskButton
function focusOnNewTaskInput({target}){
    const section = target.closest("section")
    thisNewTaskButton = section.querySelector(".new-task-button")
    document.addEventListener("keydown", enterToAddNewTask)
}
function enterToAddNewTask(event){
    if (event.key === "Enter"){
        event.preventDefault()
        thisNewTaskButton.click()
        thisNewTaskButton = null
    }
}

//  Initializing DOM  //
function generateLists(){
    for (const task of taskObj.todo) {
        const toDoList = document.querySelectorAll(".to-do-tasks")[0]
        const newTask = createTask(task)
        toDoList.appendChild(newTask)
    }
    for (const task of taskObj["in-progress"]) {
        const inProgressList = document.querySelectorAll(".in-progress-tasks")[0]
        const newTask = createTask(task)
        inProgressList.appendChild(newTask)
    }
    for (const task of taskObj.done) {
        const doneList = document.querySelectorAll(".done-tasks")[0]
        const newTask = createTask(task)
        doneList.appendChild(newTask)
    }
}
generateLists()

function generateLabelsForTasks(){
    const tasksList = document.querySelectorAll(".task")
    for (const task of tasksList) {
        const taskUl = task.closest("ul")
        if (taskUl.classList.contains("to-do-tasks")){
            for (const labeledTasks in labeledTasksObj.todo){
                if (task.innerText === labeledTasks){
                    task.setAttribute("data-label", labeledTasksObj.todo[labeledTasks])
                    task.setAttribute("style", `background-color:${labels[labeledTasksObj.todo[labeledTasks]]}`)
                }
            }
        }
        if (taskUl.classList.contains("in-progress-tasks")){
            for (const labeledTasks in labeledTasksObj["in-progress"]){
                if (task.innerText === labeledTasks){
                    task.setAttribute("data-label", labeledTasksObj["in-progress"][labeledTasks])
                    task.setAttribute("style", `background-color:${labels[labeledTasksObj["in-progress"][labeledTasks]]}`)
                }
            }
        }
        if (taskUl.classList.contains("done-tasks")){
            for (const labeledTasks in labeledTasksObj.done){
                if (task.innerText === labeledTasks){
                    task.setAttribute("data-label", labeledTasksObj.done[labeledTasks])
                    task.setAttribute("style", `background-color:${labels[labeledTasksObj.done[labeledTasks]]}`)
                }
            }
        }
    }
}
generateLabelsForTasks()
// Clear tasks
function clearTasks(){
    const tasksElems = document.querySelectorAll(".task")
    for (const taskElem of tasksElems){
        taskElem.parentElement.removeChild(taskElem)
        removeTaskData(taskElem.innerText)
        updateLocalSaveData()
    }
}

//  Maniputale tasks order and sections  //
let selectedTask
const moveTask = (section) => {
        // Get the needed data about the task
    const selectedTaskText = selectedTask.innerText
        // Create the task in it's new section
    const newTaskElem = createTask(selectedTaskText)
    section.prepend(newTaskElem)
        // Removes the task from it's previus section
    selectedTask.parentElement.removeChild(selectedTask)
        // Updates local storage
    removeTaskData(selectedTaskText)
    addNewTaskData(section, selectedTaskText)
    updateLocalSaveData()
    selectedTask = null
}
function moveBetweenSections({altKey, key}){
    if (selectedTask){
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

            ////////////////////////
            //  Event  listeners  //
            ////////////////////////
          
//  Asigning event listeners  //
const addButtons = document.querySelectorAll(".new-task-button")
for (const button of addButtons) {
    button.addEventListener("click", addNewTask)
}
document.addEventListener("mouseover", hoverHandler)
const searchBar = document.getElementById("search")
searchBar.addEventListener("keydown", search)
const saveButton = document.getElementById("save-btn")
saveButton.addEventListener("click", storeTasks)
const loadButton = document.getElementById("load-btn")
loadButton.addEventListener("click", loadTasks)
const clearAll = document.getElementById("clear-btn")
clearAll.addEventListener("click", clearTasks)
const mobileLabelButton = document.getElementById("label-opener-img")
mobileLabelButton.addEventListener("click", mobileLabelMenuOpen)
const addNewCustomLabel = document.getElementById("custom-label-btn-add")
addNewCustomLabel.addEventListener("click", customLabel)
const newTaskInputs = document.querySelectorAll(".new-task-input")
for (const newTaskInput of newTaskInputs){
    newTaskInput.addEventListener("focus", focusOnNewTaskInput)
}


// Handelers
function hoverHandler({target}){
    if (target.classList.contains("task")){
        selectedTask = target
        document.addEventListener("keydown", moveBetweenSections)
        document.addEventListener("dblclick", editTask)
        selectedTask.addEventListener("blur", finishedit)
    }
    target.onmouseout = () => {
        document.removeEventListener("keypress", moveBetweenSections)
        selectedTask = null
    }
}

            //////////////////////////////////
            //  features and functionality  //
            //////////////////////////////////

//  Edit tasks
function editTask(){
    if (selectedTask){
        selectedTask.setAttribute("contenteditable", "true")
        selectedTask.classList.add("editable")
        removeTaskData(selectedTask.innerText)
        updateLocalSaveData()
        document.addEventListener("keydown", enterToBlur)
    }
}
function finishedit(){  // Saves the new task in local storage
    for (const task of document.querySelectorAll(".editable")){
        task.removeAttribute("contenteditable")
        task.classList.remove("editable")
        const editedTaskUl = task.parentElement
        addNewTaskData(editedTaskUl , task.innerText)
        updateLocalSaveData()
        document.removeEventListener("keydown", enterToBlur)
    }
}
function enterToBlur(event){
    if (event.key === "Enter") {
        event.preventDefault()
        selectedTask.blur()
    }
}

//  Search tasks
function search({key}){
    let searchQuery
    const searchBarEntry = document.getElementById("search").value.toLowerCase()
    if (key == "Backspace"){
        searchQuery = searchBarEntry.slice(0, searchBarEntry.length-1)
    }
    if (key == "Space") {
        searchQuery = searchBarEntry+" "
    }
    if (key.length === 1){
        searchQuery = searchBarEntry+key
    }
    const tasksList = document.querySelectorAll(".task")
    if (searchQuery !== undefined){
        for (const task of tasksList) {
            if (!(task.innerText.includes(searchQuery))){
                task.classList.add("invisible")
            }
            else {
                task.classList.remove("invisible")
            }
        }
    }
}

// API storage
async function storeTasks(){
    const loader = createElement("div", [], [], {id: "loading"})
    const header = document.getElementById("header")
    header.appendChild(loader)
    const tasks = {taskObj, labelsObj: labeledTasksObj}
    const pushToCloud = await fetch("https://json-bins.herokuapp.com/bin/614ad8b24021ac0e6c080c0b", {
        method: "PUT",
        headers: {
            Accept: "application/json", 
            "Content-Type": "application/json",
        },
        body: JSON.stringify({tasks})
    })
    if (!pushToCloud.ok) {
        alert(`Failed! Error ${response.status}: ${response.statusText}`);
    }
    header.removeChild(loader)
}

async function loadTasks(){
    const loader = createElement("div", [], [], {id: "loading"})
    const header = document.getElementById("header")
    header.appendChild(loader)
    const tasksRequest = await fetch("https://json-bins.herokuapp.com/bin/614ad8b24021ac0e6c080c0b", {
        method: "GET",
        headers: {
            Accept: "application/json", 
            "Content-Type": "application/json",
        }
    })
    if (!tasksRequest.ok) {
        alert(`Failed! Error ${tasksRequest.status}: ${tasksRequest.statusText}`);
    }
    const loaded = await tasksRequest.json()
    clearTasks()
    taskObj = loaded.tasks
    generateLists()
    updateLocalSaveData()
    header.removeChild(loader)
}

            ////////////////////////
            //       labels       //
            ////////////////////////
function createLabelDiv(){
    clearLabelDiv()
    const labelsDiv = document.getElementById("labels")
    const labelUl = createElement("ul", [], ["label-list"])
    const showAll = createElement("li", ["Show All"], ["label"], {}, {click: displayAll})
    labelUl.appendChild(showAll)
    for (const label in labels){
        const labelLi = createElement("li", [`${label}`], ["label"], {"style": `background-color:${labels[label]}`}, {click: displayOnly})
        labelUl.appendChild(labelLi)
    }
    const addNewLabel = createElement("li", ["Add New Label"], ["label", "create-new-label-btn"], {}, {click: customLabelCreator})
    labelUl.appendChild(addNewLabel)
    labelsDiv.appendChild(labelUl)
}
createLabelDiv()
function clearLabelDiv(){
    const labelsList = document.querySelectorAll(".label")
    for (const labelElem of labelsList){
        labelElem.parentElement.removeChild(labelElem)
    }
}
function customLabel(){
    const color = document.getElementById("custom-label-color").value
    const name = document.getElementById("custom-label-name").value
    labels[name] = color
    createLabelDiv()
    updateLocalLabelsData()
}
function setLabel({target}){
    let labelColor
    for (const label in labels){
        if (label === target.innerText.toLowerCase()){
            labelColor = labels[label]
        }
    }
    targetedTask.setAttribute("data-label", target.innerText)
    targetedTask.setAttribute("style", `background-color:${labelColor}`)
    updateLabeledTasksObj()
    updateLocalLabeledTasksData()
}
function mobileLabelMenuOpen(){
    const labelMenu = document.getElementById("labels")
    labelMenu.classList.add("display")
    document.body.addEventListener("click", mobileLabelMenuClose)
}
function mobileLabelMenuClose({target}){
    const labelMenu = document.getElementById("labels")
    if (target.id === "labels" || target.parentElement.id === "labels" || target.parentElement.parentElement.id === "labels" || target.id === "label-opener-img"){
        return
    }
    else {
        labelMenu.classList.remove("display") 
    }
    document.body.removeEventListener("click", mobileLabelMenuClose)
}
function displayOnly({target}){
    const tasksList = document.querySelectorAll(".task")
    for (const task of tasksList) {
        if (task.dataset.label !== target.innerText){
            task.classList.add("invisible")
        }
        else {
            task.classList.remove("invisible")
        }
    }
}
function displayAll(){
    const tasksList = document.querySelectorAll(".task")
    for (const task of tasksList) {
        task.classList.remove("invisible")
    }
}
function customLabelCreator(){
    const customLabelCreatorDiv = document.getElementById("custom-label-creator")
    customLabelCreatorDiv.classList.add("display")
    document.body.addEventListener("click", exitCreator)
}
function exitCreator({target}){
    const customLabelCreatorDiv = document.getElementById("custom-label-creator")
    if (target.id === "custom-label-creator" || target.parentElement.id === "custom-label-creator" || target.classList.contains("custom-label-btn") || target.parentElement.classList.contains("custom-label-btn") || target.classList.contains("create-new-label-btn")){
        return
    }
    else {
        customLabelCreatorDiv.classList.remove("display")
    }
    document.body.removeEventListener("click", exitCreator)
}



let targetedTask
function callMenu({target}){
    deleteMenu()
    targetedTask = target.closest(".task")
    const thisMenuButton = target.closest(".options-button")
    const menuButtonCoords = thisMenuButton.getBoundingClientRect()
    createMenuElem(menuButtonCoords.left, menuButtonCoords.bottom)
    document.body.addEventListener("click", exitMenu)
}
function createMenuElem(left, top){
    const menuElem = createElement("div", [], ["menu"], {style: `top: ${top+10}px; left: ${left-10}px`})
    for (const label in labels){
        const labelElem = createElement("button", [`${label}`], ["in-menu-botton"], {style: `background-color: ${labels[label]}`}, {click: setLabel})
        menuElem.appendChild(labelElem)
    }
    const deleteButton = createElement("button", ["delete task"], ["delete-button", "in-menu-botton"], {}, {click: deleteTask})
    menuElem.appendChild(deleteButton)
    document.body.appendChild(menuElem)
    document.body.addEventListener("click", exitMenu)
}
function deleteMenu(){
    targetedTask = null
    const prevMenus = document.querySelectorAll(".menu")
    for (const prevMenu of prevMenus){
        prevMenu.parentElement.removeChild(prevMenu)
    }
}
function exitMenu({target}){
    if (target.classList.contains("menu") || target.parentElement.classList.contains("menu") || target.classList.contains("options-button") || target.parentElement.classList.contains("options-button")){
        return
    }
    else {
        deleteMenu()
    }
    document.body.removeEventListener("click", exitMenu)
}