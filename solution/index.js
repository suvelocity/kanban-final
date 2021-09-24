'use strict'
let taskObj, resultObj;
let oldinnerTaskText;
const spaceAtEndRegex = /[\s]*$/g;

const addEventListenerToButtons = () => {
    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(element => {

        element.addEventListener("click", function () {
            deleteTask(element.parentElement.parentElement.getElementsByClassName("task")[0].innerText)
        }
        )
    }
    );
    const checkButtons = document.querySelectorAll('.checkButton');
    checkButtons.forEach(element => {
        element.addEventListener("click", function () {
            deleteNAddToOtherTask("done", element.parentElement.parentElement.getElementsByClassName("task")[0].innerText);
        }
        )
    }
    );
}


const addEventListenerToTasks = () => {
    const taskLi = document.querySelectorAll('.task');
    taskLi.forEach(element => {

        element.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("titleText", element.innerText);
        });
        // element.addEventListener("dragover", function (e) {
        // });

        element.addEventListener("click", function () {
            try { document.querySelector("#selectedTask").id = ""; }
            catch { element.id = "selectedTask"; }
            element.id = "selectedTask";
            window.addEventListener("keydown", function presskey(e) {
                if (e.key === "Alt") {
                    window.addEventListener("keydown", function preesnumber(e) {
                        if (e.key === "1") {
                            window.removeEventListener("keydown", preesnumber);
                            window.removeEventListener("keydown", presskey);
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("todo", innerTaskText);
                        }
                        else if (e.key === "2") {
                            window.removeEventListener("keydown", preesnumber);
                            window.removeEventListener("keydown", presskey);
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("in-progress", innerTaskText);
                        }
                        else if (e.key === "3") {
                            window.removeEventListener("keydown", preesnumber);
                            window.removeEventListener("keydown", presskey);
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("done", innerTaskText);
                        }
                    });
                }
            })
        });

        element.addEventListener("blur", function Changeinside() {
            let newinnerTaskText = element.innerText.replace(spaceAtEndRegex, '');
            console.log(newinnerTaskText);
            deleteNChangeTask(oldinnerTaskText, newinnerTaskText);
        })
        element.addEventListener("dblclick", function () {
            oldinnerTaskText = element.getElementsByClassName("TaskTitle")[0].innerText;
            element.contentEditable = true;
        })

    }
    )
}


const addTask = (taskType, id) => {
    const taskValue = document.getElementById(id).value.replace(spaceAtEndRegex, '');
    if (!document.getElementById(id).value.replace(/\s/g, '')) { return alert('enter Valid Task') }
    document.getElementById(id).value = "";
    taskObj[taskType].unshift(taskValue);
    postTasks();
}

const postTasks = () => {
    let generalString = ``, ongoingString = ``, finishedString = ``;
    for (let key of taskObj.todo) {
        generalString += `<li class="task" draggable="true"><img class="checkButton" src="./Images/check.png"><span class="TaskTitle">${key}</span><img class="deleteButton" src="./Images/XRED.ico"></li>`
    }
    document.getElementById("general-task-table").innerHTML = generalString;

    for (let key of taskObj["in-progress"]) {
        ongoingString += `<li class="task" draggable="true"><img class="checkButton" src="./Images/check.png"><span class="TaskTitle">${key}</span><img class="deleteButton" src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("ongoing-task-table").innerHTML = ongoingString;

    for (let key of taskObj.done) {
        finishedString += `<li class="task" draggable="true"><span class="TaskTitle">${key}</span><img class="deleteButton" src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("finished-task-table").innerHTML = finishedString;
    localStorage.setItem("tasks", JSON.stringify(taskObj));
    addEventListenerToButtons();
    addEventListenerToTasks();
}

const postTasksforquery = () => {
    let query = document.getElementById("search").value;
    searchByQuery(query);
    if (!searchByQuery(query)) {
        return postTasks();
    }
    let generalString = ``, ongoingString = ``, finishedString = ``;
    for (let key of resultObj.todo) {
        generalString += `<li class="task"><img class="checkButton" src="./Images/check.png"><span class="TaskTitle">${key}</span><img class="deleteButton" src="./Images/XRED.ico"></li>`
    }
    document.getElementById("general-task-table").innerHTML = generalString;

    for (let key of resultObj["in-progress"]) {
        ongoingString += `<li class="task"><img class="checkButton" src="./Images/check.png"><span class="TaskTitle">${key}</span><img class="deleteButton" src="./Images/XRED.ico"></li>`
    }
    document.getElementById("ongoing-task-table").innerHTML = ongoingString;

    for (let key of resultObj.done) {
        finishedString += `<li class="task"><span class="TaskTitle">${key}</span><img class="deleteButton" src="./Images/XRED.ico"></li>`
    }
    document.getElementById("finished-task-table").innerHTML = finishedString;
    addEventListenerToTasks();
    addEventListenerToButtons();
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
                taskObj[taskarray].unshift(newTaskText);
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

const searchByQuery = (query) => {
    if (!query) {
        return undefined
    }
    const queryRegex = new RegExp(`${query}`, 'i');
    resultObj = {
        todo: [],
        "in-progress": [],
        done: []
    };
    for (let i = 0; i < taskObj.todo.length; i++) {
        if (queryRegex.test(taskObj.todo[i])) {
            resultObj.todo.push(taskObj.todo[i]);
            continue;
        }
    }
    for (let i = 0; i < taskObj["in-progress"].length; i++) {
        if (queryRegex.test(taskObj["in-progress"][i])) {
            resultObj["in-progress"].push(taskObj["in-progress"][i]);
            continue;
        }
    }
    for (let i = 0; i < taskObj.done.length; i++) {
        if (queryRegex.test(taskObj.done[i])) {
            resultObj.done.push(taskObj.done[i]);
            continue;
        }
    }
    return resultObj;
}

const getDataFromAPI = async () => {
    document.getElementById("loaderD").innerHTML = `<img src="./Images/loading.gif" alt="loader" class="loader" id="loader">`;
    const response = await fetch("https://json-bins.herokuapp.com/bin/614ad65e4021ac0e6c080c06");
    if (!response.ok) {
        alert(response.status);
    }
    const responseObj = await response.json();
    taskObj = responseObj.tasks;
    localStorage.setItem("tasks", JSON.stringify(taskObj));
    document.getElementById("loaderD").innerHTML = ``;
    postTasks();
}

const postDataToAPI = async () => {
    document.getElementById("loaderD").innerHTML = `<img src="./Images/loading.gif" alt="loader" class="loader" id="loader">`;
    const tasksobjtoAPI = { tasks: taskObj };
    const response = await fetch("https://json-bins.herokuapp.com/bin/614ad65e4021ac0e6c080c06", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(tasksobjtoAPI),
    });
    document.getElementById("loaderD").innerHTML = ``;
    if (!response.ok) {
        alert(response.status);
    }
}

const stopDropZone = (e) => {
    e.preventDefault();
}
const addDropZone = (e) => {
    const innerTaskText = e.dataTransfer.getData("titleText");
    e.preventDefault();
    console.log(e)
    if (e.target.id === "doneSection") {
        deleteNAddToOtherTask("done", innerTaskText)
    }
    else if (e.target.id === "ongoingSection") {
        deleteNAddToOtherTask("in-progress", innerTaskText)
    }
    else if (e.target.id === "generalSection") {
        deleteNAddToOtherTask("todo", innerTaskText)
    }
}

document.getElementById("search").addEventListener("keyup", postTasksforquery);
document.getElementById("load-btn").addEventListener("click", getDataFromAPI);
document.getElementById("save-btn").addEventListener("click", postDataToAPI);
document.getElementById("doneSection").addEventListener("drop", addDropZone);
document.getElementById("ongoingSection").addEventListener("drop", addDropZone);
document.getElementById("generalSection").addEventListener("drop", addDropZone);
document.getElementById("doneSection").addEventListener("dragover", stopDropZone);
document.getElementById("ongoingSection").addEventListener("dragover", stopDropZone);
document.getElementById("generalSection").addEventListener("dragover", stopDropZone);

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

{/* <img src="./Images/XRED.ico">
<img src="./Images/XRED.ico">
<img src="./Images/XRED.ico"></img> */}