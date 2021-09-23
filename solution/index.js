
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



// to do section
const buttonToDo = document.getElementById("submit-add-to-do");
 buttonToDo.addEventListener("click",addLiGeneric);
 const buttonInProgress = document.getElementById("submit-add-in-progress");
 buttonInProgress.addEventListener("click",addLiGeneric);
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
        const liDiv =document.createElement("div");
        const li= document.createElement("li");
        li.textContent=inputToDo;
        li.classList.add("task")
        // liDiv.append(li);
        ulToAdd.prepend(li);//appened the text we entered to the top of the ul coloumn.
        
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
// const ul1 =document.getElementById("ul1");
// ul1.addEventListener("dblclick", editTask);
// const ul2 =document.getElementById("ul2");
// ul2.addEventListener("dblclick", editTask);
// const ul3 =document.getElementById("ul3");
// ul3.addEventListener("dblclick", editTask);
//  function editTask(event){
//      if(event.target.className==="task"){
//         const currentLi = event.target.closest("li");
//       currentLi.setAttribute("contenteditable","true");
//       if(currentLi.blur){
//         currentLi.removeAttribute("contenteditable","true");
//       }
//      }else{

//      }
      
//  }
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
// dblclick edit
const wrapper = document.getElementById("wrapper")
console.log(wrapper);
const doc = document.documentElement
console.log(doc);

doc.addEventListener("dblclick" , e =>{
    if(e.target.className === "task"){
        e.target.focus();
        e.target.setAttribute("contenteditable" , "true");
        e.target.addEventListener("blur",blurFunction);
        
    }
});

function blurFunction(e){
    alert("eventListener works");
    e.target.removeAttribute("contenteditable");
    // needs to change the data in the local storage so after a refresh the chang will be saved

}

function publishExistingLi(){
    for(let i = 0 ; i<tasks.todo.length ; i++){
        const existTask = generateListItems(tasks.todo[i],{});
        const liDiv =document.createElement("div");
        const todoSectionUl=document.getElementById("ul1");
        // liDiv.append(existTask);
        todoSectionUl.prepend(existTask);
        
    }
    for(let i = 0 ; i<tasks["in-progress"].length ; i++){
        const existTask = generateListItems(tasks["in-progress"][i],{});
        const liDiv =document.createElement("div");
        const inProgSectionUl=document.getElementById("ul2");
        // liDiv.append(existTask);
        inProgSectionUl.prepend(existTask);
        
    }
    for(let i = 0 ; i<tasks.done.length ; i++){
        const existTask = generateListItems(tasks.done[i],{});
        const liDiv =document.createElement("div");
        const doneSectionUl=document.getElementById("ul3");
        // liDiv.append(existTask);
        doneSectionUl.prepend(existTask);
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

