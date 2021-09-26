let tasks = window.localStorage.getItem("tasks")
let localSave;
if (!tasks)
{
    alert("s")
    tasks = {
        "todo": [],
        "in-progress": [],
        "done": []
    }
    window.localStorage.setItem("tasks" , JSON.stringify(tasks))
}
else
{
    localSave = JSON.parse(tasks);
    for (let key in localSave)
    {
        for(let task of localSave[key])
        {
            const li = createElement("li", [task] , ["task"] , {draggable: "true"})
            document.getElementById(key).prepend(li)
        }
    }
}
localSave = JSON.parse(window.localStorage.getItem("tasks"))


function createElement(tagName, children = [], classes = [], attributes = {}) 
{
    let el = document.createElement(tagName);

    for (let child of children)
    {
        el.append(child)
    }

    for (let cls of classes)
    {
        el.classList.add(cls)
    }

    for (let attr in attributes)
    {
        el.setAttribute(attr , attributes[attr])
    }
    return el
}

function editTask (e)
{
    if (e.target.tag = "li")
    {
       const changeTask = document.createElement("input")
       changeTask.innerHTML = e.target.innerHTML
       e.parentNode.replaceChild(changeTask, e.target);
    }
}

function enterButton(e)
{
    if (e.target.classList.contains("submit"))
    {
       const inputTag = document.getElementById(e.target.id.split("submit-")[1]+ "-task")
       const taskInput = inputTag.value
       const ul = document.querySelector("." + inputTag.id.split("add-")[1] + "s")
       console.log(ul)
       const li = createElement("li", [] , [] , {draggable: "true"})
       li.addEventListener("dblclick" , function(e) {editTask(e)})
       li.classList.add("task")
       li.append(taskInput)
       if (taskInput === "")
       {
           alert("You cant add an empty input as a task")
       }
       else
       {
        ul.prepend(li)
        localSave[ul.id].push(taskInput)
        localStorage.setItem("tasks" , JSON.stringify(localSave))
        //localStorage.getItem("tasks").push(taskInput)
       }
       
    }
}


document.addEventListener("click" ,  function(e){enterButton(e)})