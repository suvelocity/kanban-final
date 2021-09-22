'use strict'
let taskObj;

const addEventListenerToDeleteButton = () => {
    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(element => {
        element.addEventListener("click", function () {
            deleteTask(element.parentElement.getElementsByClassName("task")[0].innerText)
        }
        )
    }
    );
}
const addEventListenerToTasks = () => {
    const taskdivs = document.querySelectorAll('.TaskDiv');
    taskdivs.forEach(element => {
        element.addEventListener("click", function (e) {
           element.style.backgroundColor = "yellow";
            if(e.altKey){
               console.log(555);
           }
        }
        )
    }
    );
}
addEventListenerToTasks();

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
        generalString += `<li class="task">${key}</li><button class="deleteButton"><img src="./Images/XRED.ico"></button>`
    }
    document.getElementById("general-task-table").innerHTML = generalString;

    for (let key of taskObj["in-progress"]) {
        ongoingString += `<li class="task">${key}</li><button class="deleteButton"><img src="./Images/XRED.ico"></button>`
    }
    document.getElementById("ongoing-task-table").innerHTML = ongoingString;

    for (let key of taskObj.done) {
        finishedString += `<li class="task">${key}</li><button class="deleteButton"><img src="./Images/XRED.ico"></button>`
    }
    document.getElementById("finished-task-table").innerHTML = finishedString;
    addEventListenerToDeleteButton();
    localStorage.setItem("tasks", JSON.stringify(taskObj));
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
