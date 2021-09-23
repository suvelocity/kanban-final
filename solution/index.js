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
generateTasks()

divSections.addEventListener('click', addTasks)// adding the addTasks to the click eventlistener 

function addTasks(e) {
    const target = e.target
    if (target.tagName === 'BUTTON') {
        const toDoTask = document.getElementById('add-to-do-task').value
        const inProgressTask = document.getElementById('add-in-progress-task').value
        const doneTask = document.getElementById('add-done-task').value
        const li = document.createElement('li')
        li.setAttribute('class', 'task')
        switch (target.id) {
            case 'submit-add-to-do':
                li.textContent = toDoTask
                if (toDoTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj.todo.push(toDoTask)
                    ul1.append(li) //add the text to the list
                }
                break
            case 'submit-add-in-progress':
                li.textContent = inProgressTask
                if (inProgressTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj["in-progress"].push(inProgressTask)
                    ul2.append(li) //add the text to the list
                }
                break
            case 'submit-add-done':
                li.textContent = doneTask
                if (doneTask === '') alert('add some content please')
                //if input empty an alert pop up
                else {
                    tasksObj.done.push(doneTask)
                    ul3.append(li) //add the text to the list
                }
                break
        }
        localStorage.setItem('tasks', JSON.stringify(tasksObj))
    }
}

function generateTasks(){
    for(let i of tasksObj.todo){
        const task = document.createElement("li")
        task.setAttribute("class","task")
        task.innerHTML=i
        ul1.append(task)
    }
    for(let i of tasksObj["in-progress"]){
        const task = document.createElement("li")
        task.setAttribute("class","task")
        task.innerHTML=i
        ul2.append(task)
    }
    for(let i of tasksObj.done){
        const task = document.createElement("li")
        task.setAttribute("class","task")
        task.innerHTML=i
        ul3.append(task)
    }
}