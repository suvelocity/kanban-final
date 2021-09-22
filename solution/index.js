'use strict'
let taskObj;
// let currentElement;

const addEventListenerToDeleteButton = () => {
    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(element => {
        element.addEventListener("click", function () {
            deleteTask(element.parentElement.parentElement.getElementsByClassName("task")[0].innerText)
        }
        )
    }
    );
}

const addEventListenerToTasks = () => {
    const taskLi = document.querySelectorAll('.task');
    taskLi.forEach(element => {
        element.addEventListener("dblclick", function () {
            let oldinnerTaskText = element.getElementsByClassName("TaskTitle")[0].innerText;
            element.getElementsByClassName("TaskTitle")[0].contentEditable = true;
            element.getElementsByClassName("TaskTitle")[0].onblur = function () {
                let newinnerTaskText = element.getElementsByClassName("TaskTitle")[0].innerText;
                deleteNChangeTask(oldinnerTaskText, newinnerTaskText);
            }
        })
        element.addEventListener("click", function () {
            try { document.querySelector("#selectedTask").id = ""; }
            catch { element.id = "selectedTask"; }
            element.id = "selectedTask";
            window.addEventListener("keydown", function (e) {
                if (e.key === "Alt") {
                    window.addEventListener("keydown", function (e) {
                        if (e.key === "1") {
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("todo", innerTaskText);
                        }
                        else if (e.key === "2") {
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("in-progress", innerTaskText);
                        }
                        else if (e.key === "3") {
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("done", innerTaskText);
                        }
                    });
                }
            })
        })
    }
    )
}

const addTask = (taskType, id) => {
    const taskValue = document.getElementById(id).value;
    if (!document.getElementById(id).value.replace(/\s/g, '')) { return alert('s') }
    document.getElementById(id).value = "";
    taskObj[taskType].unshift(taskValue);
    postTasks();
}

const postTasks = () => {
    let generalString = ``, ongoingString = ``, finishedString = ``;
    for (let key of taskObj.todo) {
        generalString += `<li class="task"><span class="TaskTitle">${key}</span><button class="deleteButton"><img src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("general-task-table").innerHTML = generalString;

    for (let key of taskObj["in-progress"]) {
        ongoingString += `<li class="task"><span class="TaskTitle">${key}</span><button class="deleteButton"><img src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("ongoing-task-table").innerHTML = ongoingString;

    for (let key of taskObj.done) {
        finishedString += `<li class="task"><span class="TaskTitle">${key}</span><button class="deleteButton"><img src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("finished-task-table").innerHTML = finishedString;
    addEventListenerToTasks();
    addEventListenerToDeleteButton();
    localStorage.setItem("tasks", JSON.stringify(taskObj));
}

const deleteNAddToOtherTask = (WantedTypeOfTask, innerTaskText) => {
    for (let taskarray in taskObj) {
        for (let i = 0; i < taskObj[taskarray].length; i++) {
            if (taskObj[taskarray][i] == innerTaskText) {
                taskObj[WantedTypeOfTask].unshift(innerTaskText)
                taskObj[taskarray].splice(i, 1);
            }
        }
    }
    postTasks();
}

const deleteNChangeTask = (oldTaskText, newTaskText) => {
    for (let taskarray in taskObj) {
        for (let i = 0; i < taskObj[taskarray].length; i++) {
            if (taskObj[taskarray][i] == oldTaskText) {
                taskObj[taskarray].splice(i, 1);
                taskObj[taskarray].unshift(newTaskText)
            }
        }
    }
    postTasks();
}

const deleteTask = (innerTextOfTitle) => {
    for (let taskarray in taskObj) {
        for (let i = 0; i < taskObj[taskarray].length; i++) {
            if (taskObj[taskarray][i] == innerTextOfTitle) {
                taskObj[taskarray].splice(i, 1);
            }
        }
    }
    postTasks();
}

if (localStorage.getItem("tasks")) {
    taskObj = JSON.parse(localStorage.getItem("tasks"));
    postTasks();
}
else {
    taskObj = {
        "todo": [],
        "in-progress": [],
        "done": []
    }
    postTasks();
    localStorage.setItem("tasks", JSON.stringify(taskObj));
}
