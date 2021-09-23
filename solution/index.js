
let tasks
let localSave = localStorage.getItem("tasks")
if (localSave!=undefined){
    tasks = JSON.parse(localSave);
    publishExistingLi();
}else {  //defining the local storage if empty.
    tasks = {
     "todo": [],
     "in-progress": [],
     "done": []
    }
}
function localStorageData (){ // updates the local storage
    localSave = JSON.stringify(tasks);
    localStorage.setItem("tasks",localSave);
}


// adding click events to the add buttons
// to do section
const buttonToDo = document.getElementById("submit-add-to-do");
 buttonToDo.addEventListener("click",addLiGeneric);
//  in-progress
 const buttonInProgress = document.getElementById("submit-add-in-progress");
 buttonInProgress.addEventListener("click",addLiGeneric);
//  done
 const buttonDone = document.getElementById("submit-add-done");
 buttonDone.addEventListener("click",addLiGeneric);




function addLiGeneric(event){   //A generic function to generate and add new tasks (li's).
    const target=event.target;
    const section = event.target.closest("section");
    const ulToAdd =section.querySelector(".anyUL");
    const inputToDo = section.querySelector(".add-input").value;
    if(inputToDo.length<1){
        alert("Cant assign an empty task ☹");
    }else{
        const li= document.createElement("li");
        li.addEventListener("dblclick" , editTask);
        li.addEventListener("blur" , addChangedTask)
        li.textContent=inputToDo;
        li.classList.add("task")
        // liDiv.append(li);
        ulToAdd.prepend(li);//enters the li we entered to the top of the ul coloumn.
        
        newTaskData(target,inputToDo);
        localStorageData();
    }
}

function newTaskData(target ,task){
    if(target.id==="submit-add-to-do"){
        tasks.todo.unshift(task)
    }
    if(target.id==="submit-add-in-progress"){
        tasks["in-progress"].unshift(task)
    }
    if(target.id==="submit-add-done"){
        tasks.done.unshift(task)
    }
}
function publishExistingLi(){
    for(let i = 0 ; i<tasks.todo.length ; i++){
        const existTask = generateListItems(tasks.todo[i],{"dblclick":editTask ,"blur":addChangedTask});
        const liDiv =document.createElement("div");
        const todoSectionUl=document.getElementById("todo");
        // liDiv.append(existTask);
        todoSectionUl.append(existTask);
        
    }
    for(let i = 0 ; i<tasks["in-progress"].length ; i++){
        const existTask = generateListItems(tasks["in-progress"][i],{"dblclick":editTask ,"blur":addChangedTask});
        const liDiv =document.createElement("div");
        const inProgSectionUl=document.getElementById("in-progress");
        // liDiv.append(existTask);
        inProgSectionUl.append(existTask);
        
    }
    for(let i = 0 ; i<tasks.done.length ; i++){
        const existTask = generateListItems(tasks.done[i],{"dblclick":editTask ,"blur":addChangedTask});
        const liDiv =document.createElement("div");
        const doneSectionUl=document.getElementById("done");
        // liDiv.append(existTask);
        doneSectionUl.append(existTask);
    }
}
function generateListItems(text , eventListeners ={}){
    const listItem = document.createElement("li");
    listItem.setAttribute("class","task");
    listItem.append(text);
    const events =Object.keys(eventListeners);
    for(let i = 0 ; i<events.length ; i++){
        listItem.addEventListener(events[i],eventListeners[events[i]])
    }
    return listItem;
}



function createElement(tagName, children = [], classes = [], attributes = {}) 
{
    let el = document.createElement(tagName);

    for (let child of children)
    {
        console.log(child)
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

//  function that filters the li according to the value of the search input
const input = document.getElementById('search');
input.onkeyup = function searchFilter () {
    let filter = input.value.toUpperCase();
    let lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].innerHTML;
        if (name.toUpperCase().indexOf(filter) == 0) 
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}


function editTask(event){ 
    const oldTask = event.target;
    oldTaskText = oldTask.textContent;
    const localSavedTasks = tasks[oldTask.closest("ul").id]
    oldTask.contentEditable="true"
    oldTask.style.color = "red"
    localSavedTasks[localSavedTasks.indexOf(oldTaskText)]="edit";
    localStorage.setItem("tasks",JSON.stringify(tasks));
}


function addChangedTask(event){
    const newTask = event.target;
    newTask.contentEditable="false";
    const localSavedTasks = tasks[newTask.closest("ul").id]
    newTask.style.color="black";
    if(newTask.textContent.length>1){ //if its not en empty str we replace the old task in local storage with edited one
        localSavedTasks[localSavedTasks.indexOf("edit")]=newTask.textContent;
    }else{//if the edited string is empty we define it to be the way it was before the change
        localSavedTasks[localSavedTasks.indexOf("edit")]=oldTaskText
        newTask.textContent = oldTaskText;
        
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
