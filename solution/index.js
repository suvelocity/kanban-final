


//function that adds a task to the addTasks section
function addTask(text){
const list=document.getElementsByClassName("to-do-tasks")
const li=createLiElement(text)
list[0].appendChild(li)
document.getElementById("add-to-do-task").value=""
// arrayOfToDoTasks.unshift(text)
localStorage.setItem("todo",JSON.stringify(text))
}

//function that adds a task to the addTasks section
function addInProgress(text){
    const list=document.getElementsByClassName("in-progress-tasks")
    const li=createLiElement(text)
    list[0].appendChild(li)
    document.getElementById("add-in-progress-task").value=""
    // const lijs=JSON.stringify({"text":li.value})    
    // arrayOfToDoTasks.unshift(text)
    localStorage.setItem("InProgress",text)
    }

//function the adds a task to done tasks section 
    function addDoneTasks(text){
        const list=document.getElementsByClassName("done-tasks")
        const li=createLiElement(text)
        list[0].appendChild(li)
        document.getElementById("add-done-task").value=""
        localStorage.setItem("doneTasks",text)
        }



    function createLiElement(text){
        const li=document.createElement("li")
    li.setAttribute("class","task")
    li.append(text)
    return li
    }

function addTaskEvent(){
const text=document.getElementById("add-to-do-task").value
if(text==="")alert("cannot add empty task")
else
addTask(text)
}


function inProgressEvent(){
    const text=document.getElementById("add-in-progress-task").value
    if(text==="")alert("cannot add empty task")
    else
    addInProgress(text)
    } 

    function doneTasksEvent(){
        const text=document.getElementById("add-done-task").value
        if(text==="")alert("cannot add empty task")
        else
        addDoneTasks(text)
        }



document.getElementById("submit-add-to-do").addEventListener("click",addTaskEvent)
document.getElementById("submit-add-in-progress").addEventListener("click",inProgressEvent)
document.getElementById("submit-add-done").addEventListener("click",doneTasksEvent)



