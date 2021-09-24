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
        "done": []
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
    await fetch("https://json-bins.herokuapp.com/bin/614af3924021ac0e6c080cb3", {
        method: "PUT", 
        headers: {        
            "Accept": "application/json",
            "Content-Type": "application/json",
        },        
        body: JSON.stringify({"tasks": taskManagerDataString}),
    })
    console.log("Saved");
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
        //Error
    }

    let tasksData = await response.json();
    console.log(tasksData.tasks);
    localStorage.clear();
    localStorage.setItem("tasks", tasksData.tasks);
    loadTasksToPage('');
    console.log("Load");
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
    let taskBeforeEditIndex = arrayOfSection.indexOf(editTextValue);
    arrayOfSection[taskBeforeEditIndex] = textAfterEdit;    
    localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));    
    loadTasksToPage(searchInput.textContent);
}

/* 
*   ===> Adding task to LocalStorage <===
*   taskName: String
*   key: String, where to add (to-do, in-prograss, done);
*/
function AddToSection(taskName, key){
    const taskManagerDataJSON = getTasksJSON();    
    const arrayOfSection = taskManagerDataJSON[key];    
    arrayOfSection.unshift(taskName);    
    localStorage.setItem('tasks', JSON.stringify(taskManagerDataJSON));         
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
        if(taskLowCased.includes(queryLowCased)){                      
            //let deleteButton = createElement("button", ["❌"], ["delete-button"]); 
            liArray.push(createElement("li", [task], ["task"], {"data-section": key, 'tabIndex': '0'}, {'keydown': (event) => {onKeyPressLiHandler(event)}}));                                 
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