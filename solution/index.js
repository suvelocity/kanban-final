//function that check the user's name
function checkName()
{
    let name=localStorage.getItem("name");
    let lists;
    if(name===null)
    {
        lists={
            "todo": [],
            "in-progress": [],
            "done": [],
        };
        name=prompt("What is your name?");
        localStorage.setItem("lists",JSON.stringify(lists));
        localStorage.setItem("name",name);
    }
    document.getElementById("page-title").innerText=name+"'s kanban";
    lists=JSON.parse(localStorage.getItem("lists"));
    for (let list in lists) {
        lists[list].forEach(text => {
            let task=createElement("li",[],["list-group-item"])
            task.innerText=JSON.parse(text);
            document.getElementById(list).append(task);
            task.addEventListener('dblclick', changeTask);
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
    let task =createElement("li",[],["list-group-item"],);
    task.addEventListener('dblclick', changeTask);
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
            ul.append(task); 
            document.getElementById("add-to-do-task").value="";
            list=JSON.parse(localStorage.getItem("lists"));//push the task to local storage
            list["todo"].push(JSON.stringify(text));
            localStorage.setItem("lists",JSON.stringify(list));
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
            ul.append(task);
            document.getElementById("add-in-progress-task").value="";
            list=JSON.parse(localStorage.getItem("lists"));//push the task to local storage
            list["in-progress"].push(JSON.stringify(text));
            localStorage.setItem("lists",JSON.stringify(list));
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
            ul.append(task);
            document.getElementById("add-done-task").value="";
            list=JSON.parse(localStorage.getItem("lists"));//push the task to local storage
            list["done"].push(JSON.stringify(text));
            localStorage.setItem("lists",JSON.stringify(list));
            break;
        default:
            console.log("deafault")
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
//function that start changing task
function changeTask(event)
{
    const task=event.target;
    let list=task.parentElement.id;
    let text=task.innerText;
    list=document.getElementById(list);
    const change=createElement("input",[],["form__input"],{value:text,onfocusout:"changeTaskComplete()"});
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
    let task =createElement("li",[],["list-group-item"],);
    task.addEventListener('dblclick', changeTask);
    task.innerText=newText;
    list.append(task);
    list.replaceChild(task,change);
    list=JSON.parse(localStorage.getItem("lists"));//push the task to local storage
    list[listId].push(JSON.stringify(newText));
    localStorage.setItem("lists",JSON.stringify(list));
}
//function that delete task given by text
function deleteTaskByText(text,listName)
{
    let check=true;
    let listsJson=JSON.parse(localStorage.getItem("lists"));
    let list=listsJson[listName];
    for (let i = 0; i < list.length; i++) {
        if(text==JSON.parse(listsJson[listName][i])&&check)
        {
            listsJson[listName].splice(i,1);
            check=false;
        }
    }
    localStorage.setItem("lists",JSON.stringify(listsJson));
}

function moveTask(event)
{

}
function keyW(e) {
    if(e.keyCode === 87){
       console.log('w');
    };
}
document.onkeydown = keyW;