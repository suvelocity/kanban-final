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
function changeTask(e) {
    e.preventDefault()
    const target = e.target
    const saveKey = tasksObj[target.closest('ul').id]
    const oldText = target.textContent
    target.setAttribute('contentEditable', 'true')
    target.addEventListener('blur', () => {
        let newText = target.textContent
        if (newText === '') target.textContent = oldText
        newText = target.textContent
        saveKey[saveKey.findIndex((a) => a === oldText)] = newText
        localStorage.setItem('tasks', JSON.stringify(tasksObj))
        target.setAttribute('contentEditable', 'false')
    })
}

divSections.addEventListener('keydown', moveTask)
function moveTask(event) {
    if (
        !(
            (event.key === '1' && event.altKey) ||
            (event.key === '2' && event.altKey) ||
            (event.key === '3' && event.altKey)
        )
    )
        return
    let task = event.target
    if (task.className !== 'task') return
    const newTask = makeTaskElement(task.innerText)

    switch (task.parentElement.id) {
        case 'todo':
            tasksObj.todo = tasksObj.todo.filter((a) => a !== newTask.textContent)
            break
        case 'in-progress':
            tasksObj['in-progress'] = tasksObj['in-progress'].filter(
                (a) => a !== newTask.textContent
            )
            break
        case 'done':
            tasksObj.done = tasksObj.done.filter((a) => a !== newTask.textContent)
            break
    }

    const ulPogress = document.getElementById('in-progress')
    if (event.key === '1' && event.altKey) {
        todo.prepend(newTask)
        task.remove()
        tasksObj.todo.unshift(newTask.textContent)
    }
    if (event.key === '2' && event.altKey) {
        ulPogress.prepend(newTask)
        task.remove()
        tasksObj['in-progress'].unshift(newTask.textContent)
    }
    if (event.key === '3' && event.altKey) {
        done.prepend(newTask)
        task.remove()
        tasksObj.done.unshift(newTask.textContent)
    }
    localStorage.setItem('tasks', JSON.stringify(tasksObj))
}

search.addEventListener('input', searchTask)
function searchTask() {
    let tasks = document.getElementsByClassName('task')
    const length = tasks.length
    for (let i = 0; i < length; i++) {
        tasks[0].remove()
    }
    for (const taskType in tasksObj) {
        for (const task of tasksObj[taskType]) {
            if (task.includes(search.value)) {
                const newTask = makeTaskElement(task)
                document.getElementById(taskType).append(newTask)
            }
        }
    }

}
function makeTaskElement(text) {
    const task = document.createElement("li")
    task.setAttribute('tabindex', '0')
    task.setAttribute('class', 'task')
    task.setAttribute('draggable', 'true')
    task.addEventListener('dragstart', drag)
    task.textContent = text
    return task
}
function drag(e) {
    e.target.setAttribute('id', 'remove-task')
    e.dataTransfer.setData("Text", e.target.textContent);
}
function allowDrop(e) {
    e.preventDefault();
}
function drop(e) {
    const removeTask = document.getElementById('remove-task')
    if (removeTask === null) return
    const taskText = e.dataTransfer.getData("Text");
    e.target.closest('ul').append(makeTaskElement(taskText))
    tasksObj[e.target.closest('ul').id].unshift(taskText)
    tasksObj[removeTask.parentNode.id] = tasksObj[removeTask.parentNode.id].filter(a => a !== taskText)
    removeTask.remove()
    localStorage.setItem('tasks', JSON.stringify(tasksObj))
}
