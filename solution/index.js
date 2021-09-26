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
updateTaskList();


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

function setItemPhase(task, location) {
    if(task.phase == location) return;
    const idx = tasklist[task.phase].findIndex(sTask => sTask == task);
    if (idx > -1) {
        switch (task.phase) {
            case 'todo':
                for (const child of todoList.children) {
                    if (child.object == task) {
                        tasklist[task.phase].splice(idx, 1);
                        moveItemTo(child, location);
                    }
                }
                break;
                case 'in-progress':
                    for (const child of inProgressList.children) {
                        if (child.object == task) {
                        tasklist[task.phase].splice(idx, 1);
                        moveItemTo(child, location);
                    }
                }
                break;
                case 'done':
                    for (const child of doneList.children) {
                        if (child.object == task) {
                            tasklist[task.phase].splice(idx, 1);
                        moveItemTo(child, location);
                    }
                }
                break;
            }
            task.phase = location;
            tasklist[location].push(task);
        }
        updateTaskList();
    }
    function moveItemTo(elem, location) {
        switch (location) {
            case 'todo':
                todoList.appendChild(elem);
                break;
                case 'in-progress':
                inProgressList.appendChild(elem);
                break;
                case 'done':
                    doneList.appendChild(elem);
                    break;
                }
    }
    
    
    loadLocal();

    function altNum(e, li) {
        if (e.altKey) {
            switch (e.key) {
                case '1':
                    setItemPhase(li.object, "todo");
                    break;
                case '2':
                    setItemPhase(li.object, "in-progress");
                    break;
                case '3':
                    setItemPhase(li.object, "done");
                    break;
            }
        }
    }

    let searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function () {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let allLi = document.querySelectorAll("li");
    let Counter = 0;
    allLi.forEach((li) => {
        if ((li.innerText.toLowerCase()).includes(searchInput, 0) === false) {
            li.style.display = "none";
        } else {
            li.style.display = "list-item";
        }

        if (li.style.display === "none") {
            Counter++;
        }
    });

    if (Counter === allLi.length) {
        alert('No items to display');
    }
});
