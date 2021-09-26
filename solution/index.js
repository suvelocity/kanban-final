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
        setupLi(li);
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

function setupLi(li) {
    const helper = (ev) => {
        altNum(ev, li);
    }
    li.addEventListener('mouseenter', () => {
        document.addEventListener('keydown', helper);
    });
    li.addEventListener('mouseleave', () => {
        document.removeEventListener('keydown', helper);
    });
}

function loadLocal() {
    for (const key in tasklist) {
        for (const task of tasklist[key]) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(task.text));
            li.className = "task";
            li.object = task;
            setupLi(li);
            switch (key) {
                case "todo":
                    todoList.appendChild(li);
                    break;
                case "in-progress":
                    inProgressList.appendChild(li);
                    break;
                case "done":
                    doneList.appendChild(li);
                    break;
            }
        }
    }

}
loadLocal();

document.querySelectorAll("li").forEach(function (liEdit) {
    liEdit.ondblclick = function () {
        let val = this.innerHTML;
        let input = document.createElement("input");
        input.value = val;
        input.onblur = function () {
            // Setting the new value in the state
            this.parentNode.object.text = input.value;
            this.parentNode.innerText = input.value;
            updateTaskList();
        }
        this.innerHTML = "";
        this.appendChild(input);
        input.focus();
    }
});