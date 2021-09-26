let tasklist = localStorage.getItem('tasks') ?
    JSON.parse(localStorage.getItem('tasks')) :
    {
        todo: [],
        "in-progress": [],
        done: []
    };


const todoList = document.getElementById('todo');
const inProgressList = document.getElementById('in-progress');
const doneList = document.getElementById('done');


function updateTaskList() {
    localStorage.setItem('tasks', JSON.stringify(tasklist));
}

function addItem(text, ulId) {
    if (text.length === 0) {
        alert("No value presents");
    }
    else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(text));
        li.object = {
            text,
            phase: ulId
        }
        tasklist[ulId].unshift(li.object);
        li.className = "task";
        document.getElementById(ulId).appendChild(li);
        updateTaskList();
    }
}

document.body.addEventListener('click', function (e) {
    if (e.target === document.getElementById("submit-add-to-do")) {
        let inputToDo = document.getElementById("add-to-do-task");
        addItem(inputToDo.value, "todo");
       
    }
    if (e.target === document.getElementById("submit-add-in-progress")) {
        let inputProgress = document.getElementById("add-in-progress-task");
        addItem(inputProgress.value, "in-progress");
       
    }
    if (e.target === document.getElementById("submit-add-done")) {
        let inputDone = document.getElementById("add-done-task");
        addItem(inputDone.value, "done");
        
    }
})
