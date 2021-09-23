'use strict'
let taskObj, resultObj;
const spaceAtEndRegex = /[\s]*$/g;
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
                let newinnerTaskText = element.getElementsByClassName("TaskTitle")[0].innerText.replace(spaceAtEndRegex, '');
                deleteNChangeTask(oldinnerTaskText, newinnerTaskText);
                localStorage.setItem("tasks", JSON.stringify(taskObj));
            }
        })
        element.addEventListener("click", function () {
            try { document.querySelector("#selectedTask").id = ""; }
            catch { element.id = "selectedTask"; }
            element.id = "selectedTask";
            window.addEventListener("keydown", function presskey (e) {
                if (e.key === "Alt") {
                    window.addEventListener("keydown", function preesnumber (e) {
                        if (e.key === "1") {
                            window.removeEventListener("keydown",preesnumber);
                            window.removeEventListener("keydown",presskey);
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("todo", innerTaskText);
                        }
                        else if (e.key === "2") {
                            window.removeEventListener("keydown",preesnumber);
                            window.removeEventListener("keydown",presskey);
                            let innerTaskText = element.innerText;
                            deleteNAddToOtherTask("in-progress", innerTaskText);
                        }
                        else if (e.key === "3") {
                            window.removeEventListener("keydown",preesnumber);
                            window.removeEventListener("keydown",presskey);
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
    const taskValue = document.getElementById(id).value.replace(spaceAtEndRegex, '');
    if (!document.getElementById(id).value.replace(/\s/g, '')) { return alert('enter Valid Task') }
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

const postTasksforquery = () => {
    let query = document.getElementById("search").value;
    searchByQuery(query);
    let generalString = ``, ongoingString = ``, finishedString = ``;
    for (let key of resultObj.todo) {
        generalString += `<li class="task"><span class="TaskTitle">${key}</span><button class="deleteButton"><img src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("general-task-table").innerHTML = generalString;

    for (let key of resultObj["in-progress"]) {
        ongoingString += `<li class="task"><span class="TaskTitle">${key}</span><button class="deleteButton"><img src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("ongoing-task-table").innerHTML = ongoingString;

    for (let key of resultObj.done) {
        finishedString += `<li class="task"><span class="TaskTitle">${key}</span><button class="deleteButton"><img src="./Images/XRED.ico"></button></li>`
    }
    document.getElementById("finished-task-table").innerHTML = finishedString;
    addEventListenerToTasks();
    addEventListenerToDeleteButton();
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
                localStorage.setItem("tasks", JSON.stringify(taskObj));
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
    if(!response.ok){
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
    const tasksobjtoAPI  = {tasks: taskObj} ;
    const response = await fetch("https://json-bins.herokuapp.com/bin/614ad65e4021ac0e6c080c06", {
        method: "PUT",
        headers: {
        //     "Access-Control-Allow-Origin": "origin-list",
            "Content-Type": "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify(tasksobjtoAPI),
    });
    document.getElementById("loaderD").innerHTML = ``;
    if(!response.ok){
        alert(response.status);
    }
}

document.getElementById("search").addEventListener("keyup", postTasksforquery);
document.getElementById("load-btn").addEventListener("click", getDataFromAPI);
document.getElementById("save-btn").addEventListener("click", postDataToAPI);
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