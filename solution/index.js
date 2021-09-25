// ============================
// ======== Consts ============
// ============================
const KEY_1 = 49;
const KEY_2 = 50;
const KEY_3 = 51;
const URL_API = "https://json-bins.herokuapp.com/bin/614af3924021ac0e6c080cb3";

//==========================
// ===== Global Vars =======
//==========================

let editTextValue = "";
let searchInput = document.querySelector("#search");
let pressed = new Set();
let errorLabel = document.querySelector("#error-label");
let contextMenu = document.querySelector("#context-menu");
let SelectedTask;
let SelectedTaskName;
let draggedTask;

let addToDoButton = document.querySelector("#submit-add-to-do", );
let addInProgressButton = document.querySelector("#submit-add-in-progress");
let addDoneButton = document.querySelector("#submit-add-done");
let saveButton = document.querySelector("#save-btn");
let loadButton = document.querySelector("#load-btn");

// ============================
// ====== Main run ============
// ============================

addToDoButton.addEventListener('click', onAddClickHandler);
addInProgressButton.addEventListener('click', onAddClickHandler);
addDoneButton.addEventListener('click', onAddClickHandler);
saveButton.addEventListener('click', onSaveClickHandler);
loadButton.addEventListener('click', onLoadClickHandler);
searchInput.addEventListener('keyup', onKeyUpHandler);

document.addEventListener('click', onScreenClick);
document.addEventListener('drop', onTaskDrop);
document.addEventListener("dragover", onTaskDragOver);

// LoadPageFromServer();

// async function LoadPageFromServer() {
//     await getServerTasks();
//     reloadTasksPage(searchInput.value);  
// } 

if(localStorage.getItem('tasks') === null){
    const tasks = {
        "todo": [],
        "in-progress": [],
        "done": [],
        //"Importent": []
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));        
}
reloadTasksPage(searchInput.value); 

// ==================================
// ====== Event Function ============
// ==================================

// Click handler of document - if not on element, remove mark
function onScreenClick(event){
    if(event.target != SelectedTask){
        changeSelectedTask("");
    }
}

function onAddClickHandler(event){
    const target = event.target;   
    switch (target.id){
        case "submit-add-to-do":
            inputValue = getTextFromInputId("add-to-do-task");            
            AddToSection(inputValue, "todo");    
            break;
        case "submit-add-in-progress":
            inputValue = getTextFromInputId("add-in-progress-task");
            AddToSection(inputValue, "in-progress"); 
            break;
        case "submit-add-done":
            inputValue = getTextFromInputId("add-done-task");
            AddToSection(inputValue, "done");  
            break;  
    }   
    reloadTasksPage(searchInput.value);
}

function onSaveClickHandler(){ 
    onSaveClick(); 
    reloadTasksPage(searchInput.value);  
}

async function onLoadClickHandler(){   
    await onLoadClick();
    reloadTasksPage(searchInput.value); 
}

function onKeyUpHandler(event){       
    if (event.target.id === "search"){
        let searchQuery = document.getElementById("search").value    
        reloadTasksPage(searchQuery);
    }    
}    

function onTaskKeyDownHandler(event){        
    pressed.add(event.keyCode);
    let arrayOfKeys = [KEY_1, KEY_2, KEY_3];    
    if(event === undefined){
        return;
    }
    // Check key down
    for (let key = 0; key < arrayOfKeys.length; key++) {
        if(event.altKey && pressed.has(arrayOfKeys[key])){
            event.preventDefault();

            let target = event.target;             
            const taskManagerDataJSON = getLocalStorageTasks(); 
            const sectionArray = taskManagerDataJSON[target.dataset.section];
            let index = sectionArray.indexOf(target.textContent);

            //Deletes selected task and update
            sectionArray.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));
            //Add to the selected section
            if(arrayOfKeys[key] === KEY_1){
                AddToSection(target.textContent, 'todo'); 
            }
            else if(arrayOfKeys[key] === KEY_2){
                AddToSection(target.textContent, 'in-progress'); 
            }
            else if(arrayOfKeys[key] === KEY_3){
                AddToSection(target.textContent, 'done'); 
            }  
            reloadTasksPage(searchInput.textContent);                      
        }
        
    }    
    pressed.clear();
}

function onTaskClickHandler(event){    
    changeSelectedTask(event.target);    
}

function onTaskDBClickHandler(event){
    let target = event.target;

    changeSelectedTask(event.target);    
    
    event.preventDefault();
    
    target.contentEditable = true;
    editTextValue = target.textContent;                                                
    target.addEventListener("blur", onTaskBlur, true);  
    target.focus();                         
}

// ===> after edit - save changes <===
function onTaskBlur(event){   

    let target = event.target;
    let textAfterEdit = target.textContent;

    displayError(false);
   
    if(textAfterEdit === ""){
        displayError(true, "Error: Empty task is not valid");    
        target.textContent = SelectedTaskName;
        return;
    }

    if (textAfterEdit != SelectedTaskName) {
        const tasksObject = getLocalStorageTasks();
        const arrayOfSection = tasksObject[SelectedTask.dataset.section];
        
        let taskBeforeEditIndex = arrayOfSection.indexOf(SelectedTaskName);
        arrayOfSection[taskBeforeEditIndex] = textAfterEdit; 
        SelectedTaskName = textAfterEdit;        
        localStorage.setItem('tasks', JSON.stringify(tasksObject));    
        reloadTasksPage(searchInput.textContent);
    }
}

function contextMenuTask(event){
    event.preventDefault();          

    changeSelectedTask(event.target);
    
    const { clientX: mouseX, clientY: mouseY } = event;
    
    contextMenu.style.top = `${mouseY}px`;
    contextMenu.style.left = `${mouseX}px`;
    
    contextMenu.classList.add("visible");

    document.addEventListener("click", clickOnContextMenu);

}

function clickOnContextMenu(event){
    const tasksObject = getLocalStorageTasks();
    if (event.target.offsetParent == contextMenu){ 
        if (event.target.dataset.type === "Delete" ){                        
            if(confirm("Are you sure you want to delete " + SelectedTaskName + " task?")){
                deleteTask();
                reloadTasksPage(searchInput.value);  
            }                  
        }               
    }
    contextMenu.classList.remove("visible");
    document.removeEventListener("click", clickOnContextMenu);    
}

function onTaskDragStart(event){
    //event.preventDefault();
    changeSelectedTask(event.target);
    
    event.target.style.opacity = .8;    
}

function onTaskDrop(event){
    event.preventDefault();
    let target = event.target  
    console.log(target);
    if(target.hasAttribute("data-section")){
        if(target.dataset.section === "todo"){            
            if(SelectedTask.dataset.section !== "todo"){
                const taskManagerDataJSON = getLocalStorageTasks(); 
                const sectionArray = taskManagerDataJSON[SelectedTask.dataset.section];
                let index = sectionArray.indexOf(SelectedTaskName);

                sectionArray.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));
                AddToSection(SelectedTaskName, 'todo');                 
            }             
        }           
        if(target.dataset.section === "in-progress"){
            if(SelectedTask.dataset.section !== "in-progress"){
                const taskManagerDataJSON = getLocalStorageTasks(); 
                const sectionArray = taskManagerDataJSON[SelectedTask.dataset.section];
                let index = sectionArray.indexOf(SelectedTaskName);

                sectionArray.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));
                AddToSection(SelectedTaskName, 'in-progress');                 
            }            
        }
        if(target.dataset.section === "done") {
            if(SelectedTask.dataset.section !== "done"){
                const taskManagerDataJSON = getLocalStorageTasks(); 
                const sectionArray = taskManagerDataJSON[SelectedTask.dataset.section];
                let index = sectionArray.indexOf(SelectedTaskName);

                sectionArray.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));
                AddToSection(SelectedTaskName, 'done'); 
                
            }
        }
    }
    reloadTasksPage(searchInput.textContent);         
}

function onTaskDragEnd(event){
    event.target.style.opacity = "";
}

function onTaskDragOver(event){
    event.preventDefault();
}

// ==================================
// ====== Server Function ============
// ==================================
async function onSaveClick(){
    const taskManagerDataString = localStorage.getItem('tasks');   
    //console.log(getTasksJSON());          
    const respons = await fetch("https://json-bins.herokuapp.com/bin/614af3924021ac0e6c080cb3", {
        method: "PUT", 
        headers: {        
            "Accept": "application/json",
            "Content-Type": "application/json",
        },        
        body: JSON.stringify({"tasks": taskManagerDataString}),
    })
    if(!respons.ok){
        alert("Server Error: " + respons.status + " " + respons.statusText);   
    }
    else{
        alert("Tasks information was saved successfully!");
    }
    
}

async function onLoadClick(){ 
    let response;    
    loaderDisplay(true); 

    setTimeout(loaderDisplay(false), 250);

    response = await fetch( "https://json-bins.herokuapp.com/bin/614af3924021ac0e6c080cb3", {
        method: "GET",
        headers: {            
            "Accept": "application/json",
            "Content-Type": "application/json",
        },                
    });    
    if(!response.ok){
        let errorString = "Load Error! => " + response.status + " " + response.statusText;
        displayError(true, "error");
    }
    else{
        //recieve tasks from server, update local storage   
        let tasksData = await response.json();          
        localStorage.clear();
        localStorage.setItem("tasks", tasksData.tasks); 
        displayError(true, "Tasks Loaded Succesfully","notification");

    }    
}


// ==================================
// ======  Functions ============
// ==================================

function loaderDisplay(display){
    //<div class="loader"><div></div><div></div><div></div><div></div></div>
    if(display){
        let body = document.querySelector("body");
        let divArray = []; 
        for (let i = 0; i < 4; i++) {
            divArray.push(createElement("div"));   
        }
        let loaderDiv = createElement("div", divArray, ["loader"]);
        body.append(loaderDiv);
    }
    else{
        let loader = document.querySelector(".loader");
        loader.remove();        
    }
    
}

/* 
*   ===> Adding task to LocalStorage <===
*   taskName: String
*   key: String, where to add (to-do, in-prograss, done);
*/

function AddToSection(taskName, key){
    const tasksObject = getLocalStorageTasks();    
    const pSectionTasksArray = tasksObject[key];    
    if(taskName === ""){
        displayError(true, "Add failed, task is empty.");    
        return;
    }
    
    //pass input validation tests
    //update tasks and store in local storage
    pSectionTasksArray.unshift(taskName);    
    localStorage.setItem('tasks', JSON.stringify(tasksObject)); 
    displayError(false);    
}

// ===> gets id of input - return its value (as string) <===
function getTextFromInputId(id){
    let input = document.querySelector("#" + id);         
    let inputValue = input.value;
    // Erase input value
    input.value = "";
    return inputValue;
}

// refresh page according to local storage filtered by the query (search) text
function reloadTasksPage(query){    
    let todoDiv = document.querySelector("#div-to-do-tasks");
    todoDiv.innerHTML = "";     
    let todo_Ul = createTaskList(query, "todo", ["to-do-tasks"]);
    todoDiv.append(todo_Ul);

    let inProgressDiv = document.querySelector("#div-in-progress-tasks");
    inProgressDiv.innerHTML = "";
    let inProgress_Ul = createTaskList(query, "in-progress", ["in-progress-tasks"]);
    inProgressDiv.append(inProgress_Ul);

    let doneDiv = document.querySelector("#div-done-tasks");
    doneDiv.innerHTML = "";
    let done_Ul = createTaskList(query, "done", ["done-tasks"]);
    doneDiv.append(done_Ul);
    
}

// ===> Creating UL element from key in "task" <===
//filter case insensative
function createTaskList(filter, key, css_classes){
    const tasksObject = getLocalStorageTasks();
    let li_Array = [];     
    let tabindex = 0;
    //let taskImportantFlag = false;
    let classImportance = "regular-task"; 
    for(let task of tasksObject[key]){         
        let taskLowerCase = task.toLowerCase();
        let filterLowerCase =  filter.toLowerCase();
        if(taskLowerCase.includes(filterLowerCase)){  
            //task matched filter add to list
            // let importentTask = tasksObject["Importent"].indexOf(task); 
            // if(importentTask !== -1){
            //     classImportance = "important-task";
            //     taskImportantFlag = true;
            // }                   
            let attributs = {
                "data-section": key, 
                //"data-importent": taskImportantFlag,
                'tabIndex': tabindex,
                'draggable': true                
            }  
            let listeners = {
                'keydown': (event) => {onTaskKeyDownHandler(event)},
                'contextmenu': (event) => {contextMenuTask(event)},
                'click': (event) => {onTaskClickHandler(event)},
                'dblclick': (event) => {onTaskDBClickHandler(event)},
                'dragstart': (event) => {onTaskDragStart(event)},
                'dragend': (event) => {onTaskDragEnd(event)}                
            } 
                                              
            li_Array.push(createElement("li", [task], [classImportance, "task"], attributs, listeners));
            //reset before next Items
            tabindex++; 
            //taskImportantFlag = false; 
            classImportance =  "regular-task";                        
        }        
    }
    
    return createElement("ul", li_Array, [...css_classes], {"data-section": key});  
}

// ===> returns JSON of tasks <===
function getLocalStorageTasks(){
    return JSON.parse(localStorage.getItem('tasks'));
}


// Display an error on screen
function displayError(visible, text = "", type = "error"){
    //check current state
    errorLabel.textContent = text;

    if(errorLabel.classList.contains("error")){
        if(type != "error"){
            errorLabel.classList.remove("error");
            errorLabel.classList.add("notification");
        }    
    }
    else {
        if(type == "error"){
            errorLabel.classList.remove("notification");
            errorLabel.classList.add("error");
        }    
    }        
    if(errorLabel.classList.contains("hidden")){
        if(visible){
            errorLabel.classList.remove("hidden");
            errorLabel.classList.add("visible");
        }    
    }
    else {
        if(!visible){
            errorLabel.classList.remove("visible");
            errorLabel.classList.add("hidden");
        }    
    }    
}

// Deletes selected task from tasks
function deleteTask(){
    const tasksObject = getLocalStorageTasks();
        
    let taskIndex = tasksObject[SelectedTask.dataset.section].indexOf(SelectedTaskName);  
    if(taskIndex !== -1){
        tasksObject[SelectedTask.dataset.section].splice(taskIndex, 1);
    }              
    localStorage.setItem('tasks', JSON.stringify(tasksObject));   
}

function createElement(tagName, children = [], classes = [], attributes = {}, eventListeners = {}) {

    const myElement = document.createElement(tagName);

    for(const child of children){
        myElement.append(child);
    }

    for(const cls of classes){
        myElement.classList.add(cls);
    }

    for (const attr in attributes) {
        myElement.setAttribute(attr, attributes[attr]);
    }

    for (const [listener, handler] of Object.entries(eventListeners)){                                     
        myElement.addEventListener(listener, handler, true);
    }

    return myElement;    

}

function changeSelectedTask(target){
    if(target !== ""){
        if ( SelectedTask != undefined) {
            if (SelectedTask.classList.contains("selected")) {
                SelectedTask.classList.remove("selected");
            }
        }    
        SelectedTask = target;
        SelectedTaskName = SelectedTask.textContent;
        if (!SelectedTask.classList.contains("selected")) {
            SelectedTask.classList.add("selected");
        }
    }
    else{
        if (SelectedTask.classList.contains("selected")) {
            SelectedTask.classList.remove("selected");
        }
    }

}
