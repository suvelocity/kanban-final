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
let taskNameToManipulateContextmenu;

// ============================
// ====== Main run ============
// ============================

document.addEventListener('click', onClickHandler);
document.addEventListener("dblclick", onDoubleClick);
document.addEventListener('keyup', onKeyUpHandler);
//localStorage.clear();
if(localStorage.getItem('tasks') === null){
    const tasks = {
        "todo": [],
        "in-progress": [],
        "done": [],
        "Importent": []
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));        
}
loadTasksToPage("");


// ============================
// ====== Function ============
// ============================
function onClickHandler(event){
    const target = event.target;    
    let inputValue;    
    if(target.tagName === "HTML"){
        return;
    }
    if(target.tagName === "BUTTON"){             
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
            case "save-btn":
                saveTasksOnApi();
                break;
            case "load-btn":
                loadTasksFromApi();
                break;                                
        }   
        // if(target.dataset.important === 'false'){
        //     const tasksJSON = getTasksJSON();
        //     for(let task of tasksJSON[target.parentNode.dataset.section]){
        //         if(task === target.parentNode.innerText){
        //             task.important = true;
        //         }
        //     }
        //     localStorage.setItem('tasks', JSON.stringify(tasksJSON));  
        // }                     
        // else if(target.dataset.important === 'true'){
        //     const tasksJSON = getTasksJSON();
        //     for(let task of tasksJSON[target.parentNode.dataset.section]){
        //         if(task === target.parentNode.innerText){
        //             task.important = false;
        //         }
        //     }
        //     localStorage.setItem('tasks', JSON.stringify(tasksJSON));  
        // }
        
        
        loadTasksToPage(searchInput.value);   
    }    
}  

async function saveTasksOnApi(){
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
        alert("Save Error! => " + respons.status + " " + respons.statusText)    
    }
    else{
        alert("saved!");
    }
    
}

async function loadTasksFromApi(){
    const response = await fetch( URL_API, {
        headers: {            
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",        
    });
    if(!response.ok){
        alert("Load Error! => " + respons.status + " " + respons.statusText)
    }
    else{
        let tasksData = await response.json();
        console.log(tasksData.tasks);
        localStorage.clear();
        localStorage.setItem("tasks", tasksData.tasks);
        loadTasksToPage('');
        alert("loaded");
    }    
}

function onKeyPressLiHandler(event){    
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
            const taskManagerDataJSON = getTasksJSON(); 
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
            loadTasksToPage(searchInput.textContent);                      
        }
        
    }    
    pressed.clear();
}

function onKeyUpHandler(event){       
    if (event.target.id === "search"){
        let searchQuery = document.getElementById("search").value    
        loadTasksToPage(searchQuery);
    }    
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

    const taskManagerDataJSON = getTasksJSON();
    let textAfterEdit = event.target.textContent;
    let target = event.target;

    // gets dataset (key in tasks)
    let key = target.dataset.section;
    const arrayOfSection = taskManagerDataJSON[key];
    if(textAfterEdit === ""){
        errorLabelDisplay(true, "Cant edit, the task is empty!");    
        loadTasksToPage(searchInput.textContent);
    }
    else if(checkDuplicateTask(textAfterEdit)){
        errorLabelDisplay(true, "Cant edit, task is already exsits!"); 
        loadTasksToPage(searchInput.textContent);
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
        loadTasksToPage(searchInput.textContent);
        errorLabelDisplay(false);
    }
    
}

function contextMenuTask(event){
    event.preventDefault();          
    taskNameToManipulateContextmenu = event.target.textContent;     
    
    const { clientX: mouseX, clientY: mouseY } = event;
    
    contextMenu.style.top = `${mouseY}px`;
    contextMenu.style.left = `${mouseX}px`;
    
    contextMenu.classList.add("visible");

    document.addEventListener("click", clickOnContextMenu);

}

function clickOnContextMenu(event, taskName){
    if(event.target.offsetParent != contextMenu){
        contextMenu.classList.remove("visible");
    }
    else if(event.target.dataset.type === "Importent"){
        const taskManagerDataJSON = getTasksJSON();
        let importentTaskIndex = taskManagerDataJSON["Importent"].indexOf(taskNameToManipulateContextmenu);
        // Dont add 2 importent tasks with the same name
        if(importentTaskIndex === -1){
            taskManagerDataJSON["Importent"].unshift(taskNameToManipulateContextmenu);
            localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));
            loadTasksToPage(searchInput.value);  
        }   
        contextMenu.classList.remove("visible"); 
        document.removeEventListener("click", clickOnContextMenu);   
    }
    else if(event.target.dataset.type === "Regular"){
        const taskManagerDataJSON = getTasksJSON();
        let importentTaskIndex = taskManagerDataJSON["Importent"].indexOf(taskNameToManipulateContextmenu);
        if(importentTaskIndex !== -1){
            taskManagerDataJSON["Importent"].splice(importentTaskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));
            loadTasksToPage(searchInput.value);  
        }
        contextMenu.classList.remove("visible");
        document.removeEventListener("click", clickOnContextMenu);  
    }
    else if(event.target.dataset.type === "Delete"){
        console.log("del");
    }    
}

/* 
*   ===> Adding task to LocalStorage <===
*   taskName: String
*   key: String, where to add (to-do, in-prograss, done);
*/
function AddToSection(taskName, key){
    const taskManagerDataJSON = getTasksJSON();    
    const arrayOfSection = taskManagerDataJSON[key];    
    if(taskName === ""){
        errorLabelDisplay(true, "Cant add, the task is empty!");    
    }
    else if(checkDuplicateTask(taskName)){
        errorLabelDisplay(true, "Cant add, task is already exsits!"); 
    }
    else{
        arrayOfSection.unshift(taskName);    
        localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON)); 
        errorLabelDisplay(false);
    }         
}

// ===> gets id of input - return its value (as string) <===
function getTextFromInputId(id){
    let input = document.querySelector("#" + id);         
    let inputValue = input.value;
    // Erase input value
    input.value = "";
    return inputValue;
}

function loadTasksToPage(query){    
    let todoDiv = document.querySelector("#div-to-do-tasks");
    todoDiv.innerHTML = "";     
    let todo_Ul = createTaskUl(query, "todo", ["to-do-tasks"]);
    todoDiv.append(todo_Ul);

    let inProgressDiv = document.querySelector("#div-in-progress-tasks");
    inProgressDiv.innerHTML = "";
    let inProgress_Ul = createTaskUl(query, "in-progress", ["in-progress-tasks"]);
    inProgressDiv.append(inProgress_Ul);

    let doneDiv = document.querySelector("#div-done-tasks");
    doneDiv.innerHTML = "";
    let done_Ul = createTaskUl(query, "done", ["done-tasks"]);
    doneDiv.append(done_Ul);
    
}

// ===> Creating UL element from key in "task" <===
function createTaskUl(query, key, classes){
    const taskManagerDataJSON = getTasksJSON();
    let liArray = [];     
    for(let task of taskManagerDataJSON[key]){         
        let taskLowCased = task.toLowerCase();
        let queryLowCased =  query.toLowerCase();
        let classImportance = "regular-task"; 
        if(taskLowCased.includes(queryLowCased)){             
            let importentTask = taskManagerDataJSON["Importent"].indexOf(task);            
            let attributs = {
                "data-section": key, 
                'tabIndex': '0'
            }  
            let listeners = {
                'keydown': (event) => {onKeyPressLiHandler(event)},
                'contextmenu': (event) => {contextMenuTask(event)},
            } 
            if(importentTask !== -1){
                classImportance = "important-task";
            }                                          
            liArray.push(createElement("li", [task], [classImportance, "task"], attributs, listeners));  
            classImportance =  "regular-task";                        
        }        
    }
    let ul = createElement("ul", liArray, [...classes]);  
    return ul; 
}

// ===> returns JSON of tasks <===
function getTasksJSON(){
    const taskManagerDataString = localStorage.getItem('tasks');
    return JSON.parse(taskManagerDataString);
}

// ===> get task - return true if task exists already <===
function checkDuplicateTask(taskToCheck){
    const taskManagerDataJSON = getTasksJSON();
    let tasksArray = Object.values(taskManagerDataJSON);    
    let duplicateTask = tasksArray.flat().find((task) => task === taskToCheck);    
    if(duplicateTask === undefined){
        return false;
    }
    else{
        // Exsits
        return true;
    }
}

function errorLabelDisplay(visible, text = ""){
    if(errorLabel.classList.contains("hidden")){
        errorLabel.classList.remove("hidden");
    }
    else if(errorLabel.classList.contains("visible")){
        errorLabel.classList.remove("visible");
    }    
    if(visible){
        errorLabel.classList.add("visible");
        errorLabel.textContent = text;
    }
    else{
        errorLabel.classList.add("hidden");
        errorLabel.textContent = "";
    }
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