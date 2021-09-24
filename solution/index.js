// global variables 
let tasks
let hoverdElement=null;
let passedUlId = null;
let altpressed = false;
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
    section.querySelector(".add-input").value="";
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
        const existTask = generateListItems(tasks.todo[i],{"dblclick":editTask ,"blur":addChangedTask,"mouseover":mouseoverFunc , "mouseout": mouseout});
        const liDiv =document.createElement("div");
        const todoSectionUl=document.getElementById("todo");
        // liDiv.append(existTask);
        todoSectionUl.append(existTask);
        
    }
    for(let i = 0 ; i<tasks["in-progress"].length ; i++){
        const existTask = generateListItems(tasks["in-progress"][i],{"dblclick":editTask ,"blur":addChangedTask ,"mouseover":mouseoverFunc ,"mouseout": mouseout });
        const liDiv =document.createElement("div");
        const inProgSectionUl=document.getElementById("in-progress");
        // liDiv.append(existTask);
        inProgSectionUl.append(existTask);
        
    }
    for(let i = 0 ; i<tasks.done.length ; i++){
        const existTask = generateListItems(tasks.done[i],{"dblclick":editTask ,"blur":addChangedTask, "mouseover":mouseoverFunc , "mouseout": mouseout});
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
    let li = document.getElementsByTagName('li');
    let filterArr=filter.split()
    for (var i = 0; i < li.length; i++) {
        var name = li[i].innerHTML;
        // (name.toUpperCase().includes(indexOf(filter)))
        if (name.toUpperCase().includes(filter)) {
            li[i].style.display = 'list-item';
        }else{
            li[i].style.display = 'none';
        }
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


// functions to mangae the moving task between ul functionality.(until 258);
document.addEventListener("keydown",event => altkeyPreesed(event));
document.addEventListener("keyup",event => moveTaskUl(event));
document.addEventListener("keydown", event => taskChangeUl(event));

function altkeyPreesed(event){
    if(event.keyCode===18){
        altpressed=true;
    }
}
function moveTaskUl(event){
    altpressed=false;
}

function taskChangeUl(event){
    if(altpressed&& event.key ==="1"){
        changeUL("todo");

    }
    if(altpressed&& event.key ==="2"){
        changeUL("in-progress");
    }
    if(altpressed&& event.key ==="3"){
        changeUL("done");
    }
    
}
function changeUL(newUlId){
    
    const newUl = document.getElementById(newUlId);
    passedUlId = hoverdElement.closest("ul").id;
    if(hoverdElement===null){
        alert("null");
    }else{
        const newLi = generateListItems(hoverdElement.textContent,{"dblclick":editTask ,"blur":addChangedTask, "mouseover":mouseoverFunc , "mouseout": mouseout})
        newLi.textContent=hoverdElement.textContent;
        newUl.prepend(newLi);
        hoverdElement.remove()
        changeULLocalStorage(newUlId);  
    }
}
function changeULLocalStorage(newUlId){
    const liContent =hoverdElement.textContent
    const newUl = document.getElementById(newUlId);
    const oldUl = document.getElementById(passedUlId)
    const oldUlId = oldUl.id;
    
    if(oldUlId === "todo"){
        // tasks.todo = tasks.todo.filter(x => x !== liContent)
        let toAdd = liContent
        let index=tasks.todo.indexOf(liContent);
        tasks.todo.splice(index,1);
        tasks[newUlId].unshift(toAdd);
        localStorageData();

        
    }
    if(oldUlId ==="in-progress"){
        let toAdd = liContent
        let index=tasks["in-progress"].indexOf(liContent);
        tasks["in-progress"].splice(index,1);
        tasks[newUlId].unshift(toAdd);
        localStorageData();

    }
    if(oldUlId === "done"){
        let toAdd = liContent
        let index=tasks.done.indexOf(liContent);
        tasks.done.splice(index,1);
        tasks[newUlId].unshift(toAdd);
        localStorageData();
   }
}

function mouseoverFunc(event){
    hoverdElement=event.target;
} 

function mouseout(event){
    if(event.target.className="task"){
        hoverdElement=null;
    }
}
const loadButton =document.getElementById("loadBT")
 loadButton.onclick = async function(){
    let localtasks = localStorage.getItem("tasks");
    // adding loader
    const rightDiv = document.getElementById("rightDiv");
    const loader = document.createElement("div");
    loader.classList.add("loader"); 
    rightDiv.append(loader);
    try {
        const response = await fetch("https://json-bins.herokuapp.com/bin/614aeca14021ac0e6c080c6d", {
            method:"GET",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
        },)
    } catch (error) {
        console.log("ERROR : Incorrect text type");
        loader.hidden=true;
    alert("ERROR : something went wrong");
    }
 }

//  save button
const saveButton =document.getElementById("saveBT")
 saveButton.onclick = async function(){
     const tasks = localSave;
     const response = fetch("https://json-bins.herokuapp.com/bin/614aeca14021ac0e6c080c6d" ,
     {
        method:"PUT",
        mode:"cors",
            headers:
            {
                "Content-Type": "application/json"
            },  
            body:JSON.stringify({tasks}),  

     }).then(response=> response.json())
       .then(data =>console.log(data))
    
 }
    
