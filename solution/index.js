const divSections = document.getElementById('sections')

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
divSections.addEventListener('dblclick', changeTask)
divSections.addEventListener('keydown', moveTask)

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
                    ul1.append(task) //add the text to the list
                }
                break
            case 'submit-add-in-progress':
                task.textContent = inProgressTask
                if (inProgressTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj["in-progress"].push(inProgressTask)
                    ul2.append(task) //add the text to the list
                }
                break
            case 'submit-add-done':
                task.textContent = doneTask
                if (doneTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj.done.push(doneTask)
                    ul3.append(task) //add the text to the list
                }
                break
        }
        localStorage.setItem('tasks', JSON.stringify(tasksObj))
    }
}
function generateTasks() {
    for (let i of tasksObj.todo) {
        const task = makeTaskElement()
        task.innerHTML = i
        ul1.append(task)
    }
    for (let i of tasksObj["in-progress"]) {
        const task = makeTaskElement()
        task.innerHTML = i
        ul2.append(task)
    }
    for (let i of tasksObj.done) {
        const task = makeTaskElement()
        task.innerHTML = i
        ul3.append(task)
    }
}


function changeTask(e) {
    e.preventDefault()
    const task = e.target
    if (task.className === 'task') {
        let newInput = document.createElement('input')
        // newInput.setAttribute('id','chageTaskInput')
        const oldcontent = task.textContent
        newInput.value = oldcontent
        task.innerText = ''
        let listType = []
        task.append(newInput)
        newInput.addEventListener('blur', () => {
            task.innerText = newInput.value
            switch (task.parentElement.id) {
                case "ul1":
                    listType = tasksObj.todo
                    break
                case "ul2":
                    listType = tasksObj['in-progress']
                    break
                case "ul3":
                    listType = tasksObj.done
                    break
            }
            listType[listType.findIndex(a => a === oldcontent)] = task.innerText
            localStorage.setItem('tasks', JSON.stringify(tasksObj))
        })
    }
}

function moveTask(event) {
    if (!(event.key === '1' && event.altKey || event.key === '2' && event.altKey || event.key === '3' && event.altKey)) return
    let task = event.target
    if (task.className !== 'task') return
    const newTask = makeTaskElement(task.innerText)
    switch (task.parentElement.id) {
        case "ul1":
            tasksObj.todo = tasksObj.todo.filter(a => a !== newTask.textContent)
            break
        case "ul2":
            tasksObj['in-progress'] = tasksObj['in-progress'].filter(a => a !== newTask.textContent)
            break
        case "ul3":
            tasksObj.done = tasksObj.done.filter(a => a !== newTask.textContent)
            break
    }

    if (event.key === '1' && event.altKey) {
        ul1.append(newTask)
        task.remove()
        tasksObj.todo.push(newTask.textContent)
    }
    if (event.key === '2' && event.altKey) {
        ul2.append(newTask)
        task.remove()
        tasksObj['in-progress'].push(newTask.textContent)
    }
    if (event.key === '3' && event.altKey) {
        ul3.append(newTask)
        task.remove()
        tasksObj.done.push(newTask.textContent)
    }
    localStorage.setItem('tasks', JSON.stringify(tasksObj))
}






function makeTaskElement(text) {
    const task = document.createElement("li")
    task.setAttribute('tabindex', '0')
    task.setAttribute('class', 'task')
    task.textContent = text
    return task
}

