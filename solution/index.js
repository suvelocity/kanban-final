
let tasks
let localSave = localStorage.getItem("tasks")
if (localSave!=undefined){
    tasks = JSON.parse(localSave);
}else {
    tasks = {
     "todo": [],
     "in-progress": [],
     "done": []
    }
}
function localStorageData (){
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
        li.classList.add("li-task")
        liDiv.append(li);
        ulToAdd.prepend(liDiv);//appened the text we entered to the top of the ul coloumn.
        
        newTaskData(target,inputToDo);
        localStorageData();
    }
}

function newTaskData(target ,task){
    if(target.id==="submit-add-to-do"){
        tasks.todo.push(task)
    }
    if(target.id==="submit-add-in-progress"){
        tasks["in-progress"].push(task)
    }
    if(target.id==="submit-add-done"){
        tasks.done.push(task)
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
const ul1 =document.getElementById("ul1");
ul1.addEventListener("dblclick", editTask);
const ul2 =document.getElementById("ul2");
ul2.addEventListener("dblclick", editTask);
const ul3 =document.getElementById("ul3");
ul3.addEventListener("dblclick", editTask);
 function editTask(event){
     if(event.target.className==="li-task"){
        const currentLi = event.target.closest("li");
      currentLi.setAttribute("contenteditable","true");
      if(currentLi.blur){
        currentLi.removeAttribute("contenteditable","true");
      }
     }else{

     }
      
 }
//  function that filters the li according to the value of the search input
 const input = document.getElementById('search');
input.onkeyup = function () {
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

