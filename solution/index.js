// If there's previous tasklist -load it, else - create empty state
let tasklist = localStorage.getItem('tasks') ?
    JSON.parse(localStorage.getItem('tasks')) :
    {
        todo: [],
        "in-progress": [],
        done: []
    };

// ul elements
const todoList = document.getElementById('todo');
const inProgressList = document.getElementById('in-progress');
const doneList = document.getElementById('done');

// Saving the current state into localStorage
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
        li.addEventListener('dblclick',edit);
        li.appendChild(document.createTextNode(text));
        // li.object = {
        //     text,
        //     phase: ulId
        // }
        tasklist[ulId].unshift(text);
        setupLi(li);
        li.className = "task";
        let ulS=document.getElementById(ulId);
       ulS.replaceChildren(li, ...ulS.children);

        // }
        
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

function loadLocal() {
    for (const key in tasklist) {
        for (const task of tasklist[key]) {
            let li = document.createElement("li");
            li.addEventListener('dblclick',edit);
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


// Changing the current phase of a task in the state
function setItemPhase(task, phase) {
    if(task.phase == phase) return;
    const idx = tasklist[task.phase].findIndex(sTask => sTask == task);
    if (idx > -1) {
        switch (task.phase) {
            case 'todo':
                for (const child of todoList.children) {
                    if (child.object == task) {
                        tasklist[task.phase].splice(idx, 1);
                        moveItemTo(child, phase);
                    }
                }
                break;
                case 'in-progress':
                    for (const child of inProgressList.children) {
                        if (child.object == task) {
                        tasklist[task.phase].splice(idx, 1);
                        moveItemTo(child, phase);
                    }
                }
                break;
                case 'done':
                    for (const child of doneList.children) {
                        if (child.object == task) {
                            tasklist[task.phase].splice(idx, 1);
                        moveItemTo(child, phase);
                    }
                }
                break;
            }
            task.phase = phase;
            tasklist[phase].push(task);
        }
        updateTaskList();
    }
    
    //Moving the task in the user interface
    function moveItemTo(elem, phase) {
    switch (phase) {
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


// Adding events to new tasks elements
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




    function edit() {
        let val = this.innerHTML;
        let input = document.createElement("input");
        input.id="edit-input";
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
;


function altNum(e, li) {
    if (e.altKey) {
        switch (e.key) {
            case '1':
                setItemPhase(text, "todo");
                break;
            case '2':
                setItemPhase(text, "in-progress");
                break;
            case '3':
                setItemPhase(text, "done");
                break;
            case '4':
                li.remove();
                break;    
        }    
    }
}



let searchInput = document.getElementById("search")
searchInput.addEventListener('keyup', function () {
    
    let allLi = Array.from(document.querySelectorAll("li"));
    let Counter = 0;
    allLi.forEach((li) => {
        if ((li.innerText.toLowerCase()).includes(searchInput.value.toLowerCase(), 0) === false) {
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
})



document.getElementById('save-api').addEventListener('click',saveToServer);



document.getElementById('load-api').addEventListener('click',loadFromServer);




function saveToServer() {
    fetch("https://json-bins.herokuapp.com/bin/614c71fe18fa9b97f9f6adcf", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({tasks: tasklist})
    });
}

function loadFromServer() {
    fetch("https://json-bins.herokuapp.com/bin/614c71fe18fa9b97f9f6adcf").then(res => {
        if(res.ok) {
            res.json().then(data => {
                tasklist = data.tasks;
                updateTaskList();
                location.reload();
            });
        }
    })
}


document.getElementById('clear-button').addEventListener('click',clearTaskList);

function clearTaskList() {
    tasklist.todo = [];
    tasklist["in-progress"] = [];
    tasklist.done = [];
    updateTaskList();
    location.reload();
}