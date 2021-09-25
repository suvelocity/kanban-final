//function that check the user's name
function checkName()
{
    //let name=localStorage.getItem("name");
    let name=localStorage.getItem("tasks");
    let tasks;
    if(name===null)
    {
        tasks={
            "todo": [],
            "in-progress": [],
            "done": [],
        };
        //name=prompt("What is your name?");
        localStorage.setItem("tasks",JSON.stringify(tasks));
        //localStorage.setItem("name",name);
    }
    //document.getElementById("page-title").innerText=name+"'s kanban";
    tasks=JSON.parse(localStorage.getItem("tasks"));
    for (let list in tasks) {
        tasks[list].forEach(text => {
            let task=createElement("li",[],["list-group-item","task" ])
            task.innerText=text;
            document.getElementById(list).append(task);
            task.addEventListener('dblclick', changeTask);
            task.addEventListener('mouseover', moveTask);
            task.addEventListener('mouseout', moveTaskEnd);


        });
    }
}
//function that creates element
function createElement(tagName ,children = [], classes = [], attributes = {}) {
    const el = document.createElement(tagName);
    // Children
    for(const child of children) {
      el.append(child);
    }
    // Classes
    for(const cls of classes) {
      el.classList.add(cls);
    }
    // Attributes
    for (const attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    return el;
  }
// create a new task and put it in his list 
function createTask(event)
{
    let task =createElement("li",[],["list-group-item","task"],{});
    task.addEventListener('dblclick', changeTask);
    task.addEventListener('mouseover', moveTask);
    task.addEventListener('mouseout', moveTaskEnd);

    let section=event.target.parentElement.id;
    let ul,text;
    switch(section)
    {
        case "1":
            text=document.getElementById("add-to-do-task").value;
            if(checkEmpty(text))
            {
                alert("Task must has info");
                break;
            }
            task.innerText=text;
            ul=document.getElementById("todo");
            ul.insertBefore(task,ul.firstChild); 
            document.getElementById("add-to-do-task").value="";
            list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
            list["todo"].unshift(text);
            localStorage.setItem("tasks",JSON.stringify(list));
            break;
        case "2":
            text=document.getElementById("add-in-progress-task").value;
            if(checkEmpty(text))
            {
                alert("Task must has info");
                break;
            }
            task.innerText=text;
            ul=document.getElementById("in-progress");
            ul.insertBefore(task,ul.firstChild); 
            document.getElementById("add-in-progress-task").value="";
            list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
            list["in-progress"].unshift(text);
            localStorage.setItem("tasks",JSON.stringify(list));
            break;
        case "3":
            text=document.getElementById("add-done-task").value;
            if(checkEmpty(text))
            {
                alert("Task must has info");
                break;
            }
            task.innerText=text;
            ul=document.getElementById("done");
            ul.insertBefore(task,ul.firstChild); 
            document.getElementById("add-done-task").value="";
            list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
            list["done"].unshift(text);
            localStorage.setItem("tasks",JSON.stringify(list));
            break;
    }
}
//function that check if task is empty
function checkEmpty(text)
{
    if (!text.replace(/\s/g, '').length) {
        return true;
    }
    return false;
}
//function that changing task
function changeTask(event)
{
    let task =this;
    listId=task.parentElement.id;
    deleteTaskByText(task.innerText,listId) 
    task.contentEditable=true;
    task.addEventListener('blur',(event)=>{
        task.contentEditable=false;
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list[listId].unshift(task.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    })
}
/* function endChangingTask(event)
{
    let task =this.event.target;
    listId=task.parentElement.id;
    list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
    list[listId].unshift(task.innerText);
    console.log(task.innerText);
    localStorage.setItem("tasks",JSON.stringify(list));
    //task.setAttribute("contenteditable",false);
 
} */
/* function changeTask(event)
{
    const task=event.target;
    let list=task.parentElement.id;
    let text=task.innerText;
    list=document.getElementById(list);
    const change=createElement("input",[],["form__input"],{value:text,onblur:"changeTaskComplete()"});
    list.append(change);
    list.replaceChild(change,task);
    deleteTaskByText(text,list.id);    
}
//complete the change task
function changeTaskComplete(event)
{
    const change=this.event.target;
    let list=change.parentElement.id;
    let listId=list;
    list=document.getElementById(list);
    const newText=this.event.target.value;
    if(checkEmpty(newText))
    {
        alert("Task must has info");
        throw("Task must has info");
    }
    let task =createElement("li",[],["list-group-item","task"],);
    task.addEventListener('dblclick', changeTask);
    task.innerText=newText;
    list.append(task);
    list.replaceChild(task,change);
    list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
    list[listId].unshift(newText);
    localStorage.setItem("tasks",JSON.stringify(list));
} */
//function that delete task given by text
function deleteTaskByText(text,listName)
{
    let check=true;
    let tasksJson=JSON.parse(localStorage.getItem("tasks"));
    let list=tasksJson[listName];
    for (let i = 0; i < list.length; i++) {
        if(text==tasksJson[listName][i]&&check)
        {
            tasksJson[listName].splice(i,1);
            check=false;
        }
    }
    localStorage.setItem("tasks",JSON.stringify(tasksJson));
}



//add and remove key press event
let moveTaskLi;
function moveTask(event)
{
    moveTaskLi=event.target
    document.addEventListener("keydown", moveTaskKeyPress);
}
function moveTaskEnd(event)
{
    document.removeEventListener("keydown", moveTaskKeyPress, false);
}
//check if alt+number was pressed
function moveTaskKeyPress(event)
{
    let list;
    if(event.altKey&&(event.keyCode===49||event.keyCode===50||event.keyCode===51))
    {
        deleteTaskByText(moveTaskLi.innerText,moveTaskLi.parentElement.id)
    }
    if(event.keyCode===49&&event.altKey)
    {
        document.getElementById("todo").append(moveTaskLi);
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list["todo"].unshift(moveTaskLi.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    }
    if(event.keyCode===50&&event.altKey)
    {
        document.getElementById("in-progress").append(moveTaskLi)
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list["in-progress"].unshift(moveTaskLi.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    }
    if(event.keyCode===51&&event.altKey)
    {        
        document.getElementById("done").append(moveTaskLi)
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list["done"].unshift(moveTaskLi.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    }
}
let searchText;
function enterSearch(event)
{
    document.addEventListener("keydown", searchTask);
}
function exitSearch(event)
{
    document.removeEventListener("keydown", searchTask, false);
}
function searchTask(event)
{
    searchText=document.getElementById("search").value+String.fromCharCode(event.keyCode);
    console.log(searchText)
}

