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
let SelectedTaskName;
let SelectedTaskSection;
let SelectedTaskImportance;

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
document.addEventListener("dblclick", onDoubleClick);
searchInput.addEventListener('keyup', onKeyUpHandler);

LoadPageFromServer();

async function LoadPageFromServer() {
    await getServerTasks();
    reloadTasksPage(searchInput.value);  
} 


if(localStorage.getItem('tasks') === null){
    const tasks = {
        "todo": [],
        "in-progress": [],
        "done": [],
        "Importent": []
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));        
}

// ==================================
// ====== Event Function ============
// ==================================

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
    putServerTasks(); 
    reloadTasksPage(searchInput.value);  
}

async function onLoadClickHandler(){   
    await getServerTasks();
    reloadTasksPage(searchInput.value); 
}

function onKeyUpHandler(event){       
    if (event.target.id === "search"){
        let searchQuery = document.getElementById("search").value    
        reloadTasksPage(searchQuery);
    }    
}    

function onTaskKeyDownHandler(event){    
    console.log("down");
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

// ===> double click on task event <===
function onDoubleClick(event){
    event.preventDefault();
    let target = event.target;
    target.contentEditable = true;
    if(target.tagName === "LI"){              
        editTextValue = target.textContent;                                                
        target.addEventListener("blur", blurEditTask, true);  
        target.focus();                         
    }
}

// ===> after edit - save changes <===
function blurEditTask(event){   

    const taskManagerDataJSON = getLocalStorageTasks();
    let textAfterEdit = event.target.textContent;
    let target = event.target;

    // gets dataset (key in tasks)
    let key = target.dataset.section;
    const arrayOfSection = taskManagerDataJSON[key];
    if(textAfterEdit === ""){
        displayError(true, "Cant edit, the task is empty!");    
        reloadTasksPage(searchInput.textContent);
    }
    
    else{
        let taskBeforeEditIndex = arrayOfSection.indexOf(editTextValue);
        arrayOfSection[taskBeforeEditIndex] = textAfterEdit; 
        let importentTaskIndex = taskManagerDataJSON["Importent"].indexOf(editTextValue);
        if(importentTaskIndex !== -1){
            taskManagerDataJSON["Importent"].splice(importentTaskIndex, 1);
            taskManagerDataJSON["Importent"].unshift(textAfterEdit);
        }
        localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));    
        reloadTasksPage(searchInput.textContent);
        displayError(false);
    }
    
}

function contextMenuTask(event){
    event.preventDefault();          
    SelectedTaskName = event.target.textContent;  
    SelectedTaskSection = event.target.dataset.section;
    SelectedTaskImportance = event.target.dataset.importent;
    
    const { clientX: mouseX, clientY: mouseY } = event;
    
    contextMenu.style.top = `${mouseY}px`;
    contextMenu.style.left = `${mouseX}px`;
    
    contextMenu.classList.add("visible");

    document.addEventListener("click", clickOnContextMenu);

}

function clickOnContextMenu(event){
    const tasksObject = getLocalStorageTasks();
    if (event.target.offsetParent == contextMenu){ 
        switch(event.target.dataset.type  ){
            case "Importent": {
                if(SelectedTaskImportance == false){
                    tasksObject["Importent"].unshift(SelectedTaskName);
                    localStorage.setItem('tasks', JSON.stringify(tasksObject));
                    reloadTasksPage(searchInput.value);  
                }         
            }
            case "Regular": {
                if(SelectedTaskImportance == true){
                    tasksObject["Importent"].splice(importentTaskIndex, 1);
                    localStorage.setItem('tasks', JSON.stringify(tasksObject));
                    reloadTasksPage(searchInput.value);  
                }     
            }
            case "Delete": {
                if(confirm("Are you sure you want to delete " + SelectedTaskName + " task?")){
                    deleteTask();
                    reloadTasksPage(searchInput.value);  
                }      
            }
        }               
    }
    contextMenu.classList.remove("visible");
    document.removeEventListener("click", clickOnContextMenu);    
}

// ==================================
// ====== Server Function ============
// ==================================
async function putServerTasks(){
    const taskManagerDataString = localStorage.getItem('tasks');   
    //console.log(getTasksJSON());          
    const respons = await fetch(URL_API, {
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

async function getServerTasks(){
    const response = await fetch( URL_API, {
        headers: {            
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",        
    });
    if(!response.ok){
        alert("Load Error! => " + response.status + " " + response.statusText)
    }
    else{
        //recieve tasks from server, update local storage   
        let tasksData = await response.json();        
        localStorage.clear();
        localStorage.setItem("tasks", tasksData.tasks);                
    }    
}


// ==================================
// ======  Functions ============
// ==================================

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
    let taskImportantFlag = false;
    let classImportance = "regular-task"; 
    for(let task of tasksObject[key]){         
        let taskLowerCase = task.toLowerCase();
        let filterLowerCase =  filter.toLowerCase();
        if(taskLowerCase.includes(filterLowerCase)){  
            //task matched filter add to list
            let importentTask = tasksObject["Importent"].indexOf(task); 
            if(importentTask !== -1){
                classImportance = "important-task";
                taskImportantFlag = true;
            }                   
            let attributs = {
                "data-section": key, 
                "data-importent": taskImportantFlag,
                'tabIndex': tabindex
            }  
            let listeners = {
                'keydown': (event) => {onTaskKeyDownHandler(event)},
                'contextmenu': (event) => {contextMenuTask(event)},
                'click': (event) => {onTaskClickHandler(event)},
                'dblclick': (event) => {onTaskDBClickHandler(event)},
            } 
                                              
            li_Array.push(createElement("li", [task], [classImportance, "task"], attributs, listeners));
            //reset before next Items
            tabindex++; 
            taskImportantFlag = false; 
            classImportance =  "regular-task";                        
        }        
    }
    
    return createElement("ul", li_Array, [...css_classes]);  
}
function onTaskClickHandler(event){
    return;

}
function onTaskDBClickHandler(event){
    return;

}

// ===> returns JSON of tasks <===
function getLocalStorageTasks(){
    return JSON.parse(localStorage.getItem('tasks'));
}


// Display an error on screen
function displayError(visible, text = ""){
    //check current state
    errorLabel.textContent = text;
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
        
    let taskIndex = tasksObject[SelectedTaskSection].indexOf(SelectedTaskName);  
    if(taskIndex !== -1){
        tasksObject[SelectedTaskSection].splice(taskIndex, 1);
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