//function that adds a task 
function addToDoTask(text){
const li=document.createElement("li")
li.setAttribute("class","task")
li.append(text)
const list=document.querySelector("#main > section > div > ul")
list.appendChild(li)
document.getElementById("add-to-do-tasks").value=""
}
addToDoTask("boogabooga")

function addTaskEvent(event){
const text=document.getElementById("add-to-do-tasks").value
if(text==="")alert("cannot add empty task")
else
addToDoTask(text)
}
document.getElementById("submit-add-to-do").addEventListener("click",addTaskEvent)
// function createElement(tagname){

// }