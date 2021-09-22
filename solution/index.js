'use strict'
let taskObj;
if (localStorage.getItem("SavedTasks")) {
    taskObj = JSON.parse(localStorage.getItem("SavedTasks"));
}
else {
    taskObj = {
        generalTasks: [],
        ongoingTasks: [],
        finishedTasks: [],
    }
}
// taskObj = {
//     generalTasks: [
//         { nameOfTask: "Bring Down Trash" },
//         { nameOfTask: "Throw Away Dirt" },
//     ],
//     ongoingTasks: [
//         { nameOfTask: "Clean Dishes" },
//     ],
//     finishedTasks: [
//         { nameOfTask: "Clean the Room" },
//     ],
// }

const addTask = (taskType, id) => {
    const taskValue = document.getElementById(id).value;
    if (!document.getElementById(id).value.replace(/\s/g, '')) { return alert('s') }
    document.getElementById(id).value = "";
    const newObj = { nameOfTask: taskValue }
    taskObj[taskType].unshift(newObj);
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