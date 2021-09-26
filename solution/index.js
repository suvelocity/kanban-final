// global variables 
let tasks//in line 9 or 12 we define this variable
let hoverdElement=null;//in use to define the element we want to move using alt+1-3.
let passedUlId = null;//in use to define the ul that we took and element from
let altpressed = false;//in use to know if the altkey is pressed(cause we need to press alt and then another key).
let draggedItem   //in use to define the task we want to drag to another place
let localSave = localStorage.getItem("tasks")
if (localSave!=undefined){//if localSave is not undefine , tasks equals local storage object
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

// to do section           // adding click events to the add buttons
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
        const li= document.createElement("li");//defining the new task and adding events and attr to it
        li.addEventListener("dblclick" , editTask);
        li.addEventListener("blur" , addChangedTask)
        li.textContent=inputToDo;
        li.classList.add("task")
        li.setAttribute("draggable", "true")
        ulToAdd.prepend(li);//enters the li we entered to the top of the ul coloumn.
        newTaskData(target,inputToDo);
        localStorageData();
    }
    section.querySelector(".add-input").value="";
}
function newTaskData(target ,task){ //helping function to addLiGeneric that decide which ul adds the task
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
function publishExistingLi(){ //function that updates the dom with all the tasks the localStorage has
    for(let i = 0 ; i<tasks.todo.length ; i++){ 
        const existTask = generateListItems(tasks.todo[i],{"dblclick":editTask ,"blur":addChangedTask,"mouseover":mouseoverFunc , "mouseout": mouseout});
        const liDiv =document.createElement("div");
        const todoSectionUl=document.getElementById("todo");
        existTask.setAttribute("draggable", "true")
        existTask.ondragstart=dragStart;
        todoSectionUl.append(existTask);
    }
    for(let i = 0 ; i<tasks["in-progress"].length ; i++){
        const existTask = generateListItems(tasks["in-progress"][i],{"dblclick":editTask ,"blur":addChangedTask ,"mouseover":mouseoverFunc ,"mouseout": mouseout });
        const liDiv =document.createElement("div");
        const inProgSectionUl=document.getElementById("in-progress");
        existTask.setAttribute("draggable", "true")
        existTask.ondragstart=dragStart;
        inProgSectionUl.append(existTask);
    }
    for(let i = 0 ; i<tasks.done.length ; i++){
        const existTask = generateListItems(tasks.done[i],{"dblclick":editTask ,"blur":addChangedTask, "mouseover":mouseoverFunc , "mouseout": mouseout});
        const liDiv =document.createElement("div");
        const doneSectionUl=document.getElementById("done");
        existTask.setAttribute("draggable", "true")
        existTask.ondragstart=dragStart;
        doneSectionUl.append(existTask);
    }
}
function generateListItems(text , eventListeners ={}){ //helping function i use alot to generate new list items
    const listItem = document.createElement("li");
    listItem.setAttribute("class","task");
    listItem.setAttribute("draggable", "true")
    listItem.append(text);
    listItem.ondragstart=dragStart;
    const events =Object.keys(eventListeners);
    for(let i = 0 ; i<events.length ; i++){
        listItem.addEventListener(events[i],eventListeners[events[i]])
    }
    return listItem;
}
//  function that filters the li according to the value of the search input
const input = document.getElementById('search');
input.onkeyup = function searchFilter () {
    let filter = input.value.toUpperCase();
    let li = document.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        var name = li[i].innerHTML;
        if (name.toUpperCase().includes(filter)) {
            li[i].style.display = 'list-item';
        }else{
            li[i].style.display = 'none';
        }
    }
}                          //two functions below deal with dblclick event
function editTask(event){ //function that change the value of the specific index in localStorage , and make the task Editable.
    const oldTask = event.target;
    oldTaskText = oldTask.textContent;
    const localSavedTasks = tasks[oldTask.closest("ul").id]
    oldTask.contentEditable="true"
    oldTask.style.color = "red"
    localSavedTasks[localSavedTasks.indexOf(oldTaskText)]="edit";
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addChangedTask(event){//function that adds the new changed task to the localStorage
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
// events that call functions to mangae the moving task between ul functionality.(until 214);
document.addEventListener("keydown",event => altkeyPreesed(event));
document.addEventListener("keyup",event => moveTaskUl(event));
document.addEventListener("keydown", event => taskChangeUl(event));

function altkeyPreesed(event){//if the key that is pressed is alt the global var altpreesed changes to true
    if(event.keyCode===18){
        altpressed=true;
    }
}
function moveTaskUl(event){//when the altkey is no longer pressed the value returns to false
    altpressed=false;
}
function taskChangeUl(event){//function that calls the changeUl func with the needed arguement
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
function changeUL(newUlId){//function that delets the task from the old ul and generate a duplicate in the new ul.
    const newUl = document.getElementById(newUlId);
    passedUlId = hoverdElement.closest("ul").id;
    if(hoverdElement===null){
        alert("hoverd element is not defined");
    }else{
        const newLi = generateListItems(hoverdElement.textContent,{"dblclick":editTask ,"blur":addChangedTask, "mouseover":mouseoverFunc , "mouseout": mouseout})
        newLi.setAttribute("draggable", "true");
        newLi.textContent=hoverdElement.textContent;
        newUl.prepend(newLi);
        hoverdElement.remove()
        changeULLocalStorage(newUlId);  
    }
}
function changeULLocalStorage(newUlId){//function that delets the task from the old localStorage array and generate a duplicate in the new localStorage array.
    const liContent =hoverdElement.textContent
    const newUl = document.getElementById(newUlId);
    const oldUl = document.getElementById(passedUlId)
    const oldUlId = oldUl.id;
    
    if(oldUlId === "todo"){
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
function mouseoverFunc(event){//definig what is the hoverdElement global var.
    hoverdElement=event.target;
} 
function mouseout(event){//returns hoverdElement value to null when the mouse leaves the task.
    if(event.target.className="task"){
        hoverdElement=null;
    }
}
// load button
const loadButton =document.getElementById("load-btn")//load button functions update the data in dom and localStorage according to the api
 loadButton.onclick =async function loadApi(){
    const rightDiv = document.getElementById("rightDiv");
    const loader1 = document.createElement("div");
    loader1.classList.add("loader"); 
    rightDiv.append(loader1);
    
    const response = await fetch("https://json-bins.herokuapp.com/bin/614aeca14021ac0e6c080c6d",{
        method:"GET",
        mode: "cors",
            headers:{
            "Content-Type": "application/json"
             },
    },)
    if (response.ok){
        const data = await response.json()
        const lastTasks = data.tasks 
        document.getElementById("todo").textContent = ""
        document.getElementById("in-progress").textContent = ""
        document.getElementById("done").textContent = ""
            
            
        localSave = JSON.parse(JSON.stringify(lastTasks))
    
        for (let key in localSave){
            for(let task of localSave[key]) {
                const li = generateListItems([task],{"dragstart": dragStart,"dblclick":editTask ,"blur":addChangedTask, "mouseover":mouseoverFunc , "mouseout": mouseout})
                li.setAttribute("draggable", "true")
                li.ondragstart=dragStart;
                document.getElementById(key).append(li)
            }
        }
        localStorage.setItem("tasks" , JSON.stringify(localSave))
        tasks=lastTasks;
        loader1.remove();
    }else {
        alert("Error : something went wrong ☹")
    }
}
//  save button
const saveButton =document.getElementById("save-btn")//update the data in the api according to the data in the localStorage.
saveButton.onclick = async function(){
    if(localSave !== null){
         tasks = JSON.parse(localSave);
    }else{
         tasks = JSON.parse('{"todo":[],"in-progress":[],"done":[]}')
    }
     const rightDiv = document.getElementById("rightDiv");
    const loader1 = document.createElement("div");
    loader1.classList.add("loader"); 
    rightDiv.append(loader1);
    
     const response = await fetch("https://json-bins.herokuapp.com/bin/614aeca14021ac0e6c080c6d" ,{
        method:"PUT",
        mode:"cors",
            headers:{
                "Content-Type": "application/json"
            },  
            body:JSON.stringify({tasks}),  
     },)
    if(response.ok){
        const data =  await response.json()
        const lastTasks = JSON.stringify(data.tasks)
        localStorage.setItem("tasks" , lastTasks)
    }else{
        alert("Error : something went wrong ☹");
    }
    loader1.remove();
 }
function dragStart(event){//function that handles the dragstart event
    draggedItem = event.target;
    event.target.style.opacity = "1";
    const oldUl = event.target.closest("ul");
    passedUlId=oldUl.id;
}
const ul1 = document.getElementById("todo");
    const ul2 = document.getElementById("in-progress");
    const ul3 = document.getElementById("done");
    ul1.addEventListener("dragover",allowDrop);//adding dragover and drop listeners to all three ul's
    ul2.addEventListener("dragover",allowDrop);
    ul3.addEventListener("dragover",allowDrop);
    ul1.addEventListener("drop",drop);
    ul2.addEventListener("drop",drop);
    ul3.addEventListener("drop",drop);
    
function allowDrop(event){//prevents default behavior
    event.preventDefault();
}
function drop(event) {//function that deletes the task from the oldul and generate a clone in the newul, same principal in the localStorge data.
    draggedItemContent =draggedItem.textContent
    const newUL= event.target.closest("ul")
    const newULid= newUL.id;
    const li =generateListItems(draggedItemContent,{"dragstart": dragStart,"dblclick":editTask ,"blur":addChangedTask, "mouseover":mouseoverFunc , "mouseout": mouseout})
    li.setAttribute("draggable", "true");
    newUL.prepend(li);
    draggedItem.remove();
    let index=tasks[passedUlId].indexOf(draggedItemContent);
        tasks[passedUlId].splice(index,1);
        tasks[newULid].unshift(draggedItemContent);
        localStorageData();
  }
// adding eventlistener to the trash image in order to intialize the trash function
// this is an extra functionality of drag n drop tasks to the trashImg , when we drop the task to the image the task is deleted
const trashImg = document.getElementById("trashImg");
trashImg.addEventListener("dragover",allowDrop)
trashImg.addEventListener("drop",trash);

function trash(event){
    draggedItemContent =draggedItem.textContent;
    draggedItem.remove();
    let index=tasks[passedUlId].indexOf(draggedItemContent);
        tasks[passedUlId].splice(index,1);
        localStorageData();
}