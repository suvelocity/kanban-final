const divSections = document.getElementById('sections')
const search = document.getElementById('search')
//checks if there is a local storage, if not creates one
if (localStorage.getItem('tasks') === null) {
    const tasks = {
        "todo": [],
        "in-progress": [],
        "done": []
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
let tasksObj = JSON.parse(localStorage.getItem('tasks'))
generateTasks()//generates all tasks in the localStorage
divSections.addEventListener('click', addTasks)// adding the addTasks to the click eventlistener 
//addTasks() adds a creates a li element and inserts the content in the input to the li lelement then apeends it to the coreresponding list
function addTasks(e) {
    const target = e.target
    if (target.tagName === 'BUTTON') {
        const toDoTask = document.getElementById('add-to-do-task').value
        const inProgressTask = document.getElementById('add-in-progress-task').value
        const doneTask = document.getElementById('add-done-task').value
        const task = makeTaskElement()
        switch (target.id) {
            case 'submit-add-to-do':
                task.textContent = toDoTask
                if (toDoTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj.todo.push(toDoTask)
                    todo.append(task) //add the text to the list
                }
                break
            case 'submit-add-in-progress':
                task.textContent = inProgressTask
                if (inProgressTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj["in-progress"].push(inProgressTask)
                    document.getElementById("in-progress").append(task) //add the text to the list
                }
                break
            case 'submit-add-done':
                task.textContent = doneTask
                if (doneTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj.done.push(doneTask)
                    done.append(task) //add the text to the list
                }
                break
        }
        localStorage.setItem('tasks', JSON.stringify(tasksObj))
    }
}
//generates and inserts all tasks from the LocalStorage as li elements to their corresponding ul element, as well as adding eventlisteners to the ul elements
function generateTasks() {
    for (const taskType in tasksObj) {
        for (let taskText of tasksObj[taskType]) {
            const task = makeTaskElement(taskText)
            document.getElementById(taskType).append(task)
        }
    }
    let allUl = document.getElementsByTagName('UL')
    for (const ul of allUl) {
        ul.addEventListener('dragover', allowDrop)
        ul.addEventListener('drop', drop)
    }
}

divSections.addEventListener('dblclick', changeTask)
//if you double click a li element it makes it editable, then when you click off it its saves the changes
function changeTask(e) {
    e.preventDefault()
    const target = e.target
    const saveKey = tasksObj[target.closest('ul').id]
    const oldText = target.textContent
    target.setAttribute('contentEditable', 'true')//makes the task editable
    target.addEventListener('blur', () => { // when you click off the element
        let newText = target.textContent
        if (newText === '') target.textContent = oldText
        newText = target.textContent
        saveKey[saveKey.findIndex((a) => a === oldText)] = newText //changes the old text to the updated text
        localStorage.setItem('tasks', JSON.stringify(tasksObj))//updates localstorage
        target.setAttribute('contentEditable', 'false') //makes the task uneditable
    })
}

divSections.addEventListener('keydown', moveTask)
//if you mark a task andpress alt and one of the numbers 1-3, it'll move the task you marked to the correspnding list
function moveTask(event) {
    if (
        !(
            (event.key === '1' && event.altKey) ||   //filters all key presses that are not 
            (event.key === '2' && event.altKey) ||   // alt+1, alt+2, alt+3
            (event.key === '3' && event.altKey)
        )
    )
        return
    let task = event.target
    if (task.className !== 'task') return //only lets the event work on li elements(tasks)
    const newTask = makeTaskElement(task.innerText)
    const oldTaskType = task.parentElement.id
    tasksObj[oldTaskType] = tasksObj[oldTaskType].filter((a) => a !== newTask.textContent)//removes the list from previous list at localstorage
    let newTaskType
    if (event.key === '1' && event.altKey) {// checks which list to transfer to
        newTaskType = document.getElementById('todo')
    }
    if (event.key === '2' && event.altKey) {
        newTaskType = document.getElementById('in-progress')
    }
    if (event.key === '3' && event.altKey) {
        newTaskType = document.getElementById('done')
    }
    newTaskType.prepend(newTask)
    task.remove()
    tasksObj[newTaskType.id].unshift(newTask.textContent)
    localStorage.setItem('tasks', JSON.stringify(tasksObj)) // updates localstorage to the recent change
}

search.addEventListener('input', searchTask)
//removes all tasks once input to the searchbar is changes and only shows all tasks that contain a part of the searched phrase
function searchTask() {
    let tasks = document.getElementsByClassName('task')
    const length = tasks.length
    for (let i = 0; i < length; i++) {//remove all tasks
        tasks[0].remove()
    }
    for (const taskType in tasksObj) {
        for (const task of tasksObj[taskType]) {
            if (task.includes(search.value)) {// only generate the tasks that contain the value of the searchbar within them
                const newTask = makeTaskElement(task)
                document.getElementById(taskType).append(newTask)
            }
        }
    }

}
// makes a task element 
function makeTaskElement(text) {
    const task = document.createElement("li")
    task.setAttribute('tabindex', '0')
    task.setAttribute('class', 'task')
    task.setAttribute('draggable', 'true')
    task.addEventListener('dragstart', drag)
    task.textContent = text
    return task
}
//saves the content inside the tasks
function drag(e) {
    e.target.setAttribute('id', 'remove-task')
    e.dataTransfer.setData("Text", e.target.textContent);
}
function allowDrop(e) {
    e.preventDefault();
}
// makes it so that when you drop a task you dragged it goes it to another list and also updates the localstorage
function drop(e) {
    const removeTask = document.getElementById('remove-task')
    if (removeTask === null) return//makes sure to only drop text that came from a dragged task 
    const taskText = e.dataTransfer.getData("Text");// collects the text from the dragged task
    e.target.closest('ul').append(makeTaskElement(taskText))
    tasksObj[removeTask.parentNode.id] = tasksObj[removeTask.parentNode.id].filter(a => a !== taskText)//remvoes old text
    tasksObj[e.target.closest('ul').id].unshift(taskText)//adds the task to the new list in localstorage
    removeTask.remove()
    localStorage.setItem('tasks', JSON.stringify(tasksObj))//updates the localstorage
}
const urlApi = 'https://json-bins.herokuapp.com/bin/614b755962d4873b110d1c00' // api-bin url

//saves the entire list object into the api
async function save() {
    loading.style.visibility = 'visible'
    const putProp = {
        method: 'PUT',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tasks: tasksObj }),
    }
    await fetch(urlApi, putProp)
    loading.style.visibility = 'hidden'
    document.getElementById("img").setAttribute('src', `https://http.cat/${getAns.status}`)//adds a cat status picture
}

//loads the entire tasks object as lists and changes the dom and localstorage to match
async function load() {
    loading.style.visibility = 'visible'
    const getProp = {
        method: 'Get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    let getAns = await fetch(urlApi, getProp)
    const data = await getAns.json()
    localStorage.setItem('tasks', JSON.stringify(data.tasks))
    tasksObj = data.tasks
    let tasks = document.getElementsByClassName('task')
    const length = tasks.length
    for (let i = 0; i < length; i++) {
        tasks[0].remove()
    }
    generateTasks()
    loading.style.visibility = 'hidden'
    document.getElementById("img").setAttribute('src', `https://http.cat/${getAns.status}`)//adds a cat status picture
}