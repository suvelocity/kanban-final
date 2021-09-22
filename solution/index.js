//function that check the user's name
function checkName()
{
    let name=localStorage.getItem("name");
    if(name===null)
    {
        localStorage.setItem("todo",[]);
        localStorage.setItem("in-progress",[]);
        localStorage.setItem("done",[]);
        name=prompt("What is your name?");
        localStorage.setItem("name",name);
        document.getElementById("page-title").innerText=name+"'s kanban";

    }
    else{
        document.getElementById("page-title").innerText=name+"'s kanban";
        let todo=localStorage.getItem("todo");
        todo.forEach(task => {
            console.log("x")
            document.getElementsByClassName("to-do-tasks")[0].append(task);
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

function createTask(event)
{
    let task =createElement("li",[],["list-group-item"]);
    let section=event.target.parentElement.id;
    let ul,text;
    switch(section)
    {
        case "1":
            text=document.getElementById("add-to-do-task").value;
            task.innerText=text;
            ul=document.getElementsByClassName("to-do-tasks");
            ul[0].append(task);
            break;
        case "2":
            text=document.getElementById("add-in-progress-task").value;
            task.innerText=text;
            ul=document.getElementsByClassName("in-progress-tasks");
            ul[0].append(task);
            break;
        case "3":
            text=document.getElementById("add-done-task").value;
            task.innerText=text;
            ul=document.getElementsByClassName("done-tasks");
            ul[0].append(task);
            break;
        default:
            console.log("deafault")
    }
    document.getElementById("add-to-do-task").value="";
}
