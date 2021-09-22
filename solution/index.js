// ============================
// ======== Consts ============
// ============================
const KEY_1 = 49;
const KEY_2 = 50;
const KEY_3 = 51;

// ============================
// ====== Main run ============
// ============================
document.addEventListener('click', onClickHandler);
let searchInput = document.querySelector("#search")
searchInput.addEventListener('keyup', onKeyUpSearchInput);
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
            case "search":
                // Do search, will build it later                        
        }
        loadTasksToPage("");   
    }    
}  

function onKeyUpSearchInput(){   
    let searchQuery = document.getElementById("search").value    
    loadTasksToPage(searchQuery);
}


/* 
*   ===> Adding task to LocalStorage <===
*   taskName: String
*   Section: String, where to add (to-do, prograss, done);
*/
function AddToSection(taskName, key){
    const taskManagerDataString = localStorage.getItem('tasks');
    const taskManagerDataJSON = JSON.parse(taskManagerDataString);
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
    const taskManagerDataString = localStorage.getItem('tasks');
    const taskManagerDataJSON = JSON.parse(taskManagerDataString);
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
    const taskManagerDataString = localStorage.getItem('tasks');
    const taskManagerDataJSON = JSON.parse(taskManagerDataString);
    let liArray = [];
    for(let task of taskManagerDataJSON[key]){ 
        let taskLowCased = task.toLowerCase();
        let queryLowCased =  query.toLowerCase();      
        if(taskLowCased.includes(queryLowCased)){
            liArray.push(createElement("li", [task], ["task"]));
        }        
    }
    let ul = createElement("ul", liArray, [...classes]);  
    return ul; 
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

    for (const listener in eventListeners){        
        const functionArray = eventListeners[listener];                
        myElement.addEventListener(listener, functionArray);
    }

    return myElement;    

}