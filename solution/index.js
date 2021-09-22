'use strict'
let taskObj;
if(localStorage.getItem("SavedTasks")) {
    taskObj = JSON.parse(localStorage.getItem("SavedTasks"));
}
else {
    taskObj = {
        generalTasks: [
            { nameOfTask: "Bring Down Trash" },
            { nameOfTask: "Throw Away Dirt" },
        ],
        ongoingTasks: [
            { nameOfTask: "Clean Dishes" },
        ],
        finishedTasks: [
            { nameOfTask: "Clean the Room" },
        ],
    }
}

const addTask = (taskType) => {
    if (taskType === "generalTasks") {
        const taskValue = document.getElementById("add-to-do-task").value;
        const newObj = { nameOfTask: taskValue }
        taskObj[taskType].unshift(newObj);
    }
    else if (taskType === "ongoingTasks") {
        const taskValue = document.getElementById("add-in-progress-task").value;
        const newObj = { nameOfTask: taskValue }
        taskObj[taskType].unshift(newObj);
    }
    else if (taskType === "finishedTasks") {
        const taskValue = document.getElementById("add-done-task").value;
        const newObj = { nameOfTask: taskValue }
        taskObj[taskType].unshift(newObj);
    }
    postTasks();
}

const postTasks = () => {
    let generalString = ``, ongoingString = ``, finishedString = ``;
    for (let key of taskObj.generalTasks) {
        generalString += `<li class="to-do-tasks">${key.nameOfTask}</li>`
    }
    document.getElementById("general-task-table").innerHTML = generalString;

    for (let key of taskObj.ongoingTasks) {
        ongoingString += `<li class="in-progress-tasks">${key.nameOfTask}</li>`
    }
    document.getElementById("ongoing-task-table").innerHTML = ongoingString;

    for (let key of taskObj.finishedTasks) {
        finishedString += `<li class="done-tasks">${key.nameOfTask}</li>`
    }
    document.getElementById("finished-task-table").innerHTML = finishedString;
    localStorage.setItem("SavedTasks", JSON.stringify(taskObj));
}

postTasks();