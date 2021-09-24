// -------------- Functions -------------- \\
/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"}, {click: (...) => {...}})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */
 function createElement(tagName, children = [], classes = [], attributes = {}, parentId) {
    //Create element
    const el = document.createElement(tagName);
    el
    // Children
    for(const child of children) {
      el.append(child);
    }
  
    // Classes
    for(const cls of classes) {
      el.classList.add(cls);
    }
  
    // Attributes
    for (const attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    
    //Appends as a child to the parent
    const parent = document.getElementById(parentId);
    parent.appendChild(el);
    
    //Placement as first
    parent.insertBefore(el, parent.firstElementChild);
    
    return el;
  }

//Random ID generator between 1-100
function randomId(){
    return Math.floor(Math.random() * 101);
  };
  //ID check
  function idCheck(taskId){
    let indicator = 0;
    for(let task of Tasks.todo){
       if(task.id.slice(4) == taskId){
           indicator++;
       }
    }
    for(let task of Tasks["in-progress"]){
        if(task.id.slice(4) == taskId){
            indicator++;
        }
     }
     for(let task of Tasks.done){
        if(task.id.slice(4) == taskId){
            indicator++;
        }
     }
     if(indicator === 0){
         return true;
     }
     return false;
};

//Task identification
function attachId(element){
    let newId = randomId();
    while(!idCheck(newId)){
        newId = randomId();
    }
    element.id = "task" + newId;
};

//A function that creates a task element (<li>) with "task" class, and places it in the correct tasks-list
function createTaskElement(task, listId){
    return createElement("li", [task], ["task"], {}, listId);
}

/* Add one or more listeners to an element
** @param {DOMElement} element - DOM element to add listeners to
** @param [Array] events - array of event names, e.g. 'click'
** @param {Function} handler - function to attach for each event as a handler
*/
function addMultipleEventListener(element, events, handler) {
    events.forEach(e => element.addEventListener(e, handler))
  };


// -------------- Storage -------------- \\
let Tasks = {
    //To Do Tasks - Array
    "todo": [],
    //In Progress Tasks - Array
    "in-progress": [],
    //Done Tasks - Array
    "done": []
};

//Save to storage
function saveTasksToStorage() {
   const storedTasks = JSON.stringify(Tasks);
   localStorage.setItem("tasks", storedTasks);
};

//Get from storage
function getStoredTasks(){
    let storedTasks = localStorage.getItem("tasks");
    storedTasks = JSON.parse(storedTasks);
    return storedTasks;
};

//Check saved storage if empty save the default Tasks object
function checkTasksStorage(){
   let tasks = getStoredTasks();
   if(tasks === null){
    saveTasksToStorage();
   }
}



// -------------- DOM -------------- \\

//Elements
const mainContainer = document.getElementById("main-container");
const toDoInput = document.getElementById("add-to-do-task");
const inProgressInput = document.getElementById("add-in-progress-task");
const doneInput = document.getElementById("add-done-task");

//Creates a task object
function createTaskObject(taskElementId, task){
    const taskObject = {
        id: taskElementId,
        task: task
    }
    return taskObject;
};

//Creates a task element and places it in the correct list element
function createAndPlace(task, arrayList){
    const parentListId = relevantListElement(arrayList);
    const taskElement = createTaskElement(task.task, parentListId);
    taskElement.id = task.id;
    return taskElement;
};

checkTasksStorage();

//Loads the Tasks object with stored values
Tasks = getStoredTasks();

//Generate Tasks DOM from local storage
function generateTasksDom(){
    for(let task of Tasks.todo){
        createAndPlace(task, "todo");
    }
    for(let task of Tasks["in-progress"]){
        createAndPlace(task, "in-progress");
    }
    for(let task of Tasks.done){
        createAndPlace(task, "done");
    }
};


//Event listeners
addMultipleEventListener(mainContainer, ["click", "dblclick", "mousedown", "mouseup", "blur", "focus", "keydown"], eventHandler);

//The event handler function
function eventHandler(e){
    //Create action code for specific events
    let actionCode = eventType(e.type) + targetTypeId(e.target.id);
    switch(actionCode){

        //Add task : to do 
        case "a1":
            addTask(e, toDoInput);
        break;  
        //Add task : in progress
        case "a2":
            addTask(e, inProgressInput);
        break; 
        //Add task : done 
        case "a3":
            addTask(e, doneInput);
        break;
        //Load DOM from local storage
        case "a4":
            generateTasksDom();
        //Task element edit     
    }
    //console.log(e.target.id);
};

//Event type identifier
function eventType(type){
    switch(type){
        case "click":
            type = "a";
            break;
        case "dblclick":
            type = "b";
            break;
        case "mousedown":
            type = "c";
            break;
        case "mouseup":
            type = "d";
            break;
        case "keydown":
            type = "e";
            break;
        case "blur":
            type = "f";
            break;
        case "focus":
            type = "g";
            break;
    }
    return type;
};

//Target identifier by ID
function targetTypeId(targetId){
    switch(targetId){
        //Add buttons 
        case "submit-add-to-do":
            targetId = 1;
            break;
        case "submit-add-in-progress":
            targetId = 2;
            break;
        case "submit-add-done":
            targetId = 3;
            break;
        case "load-local":
            targetId = 4;
    }
    return targetId;
};

function createTaskObject(taskElementId, task){
    const taskObject = {
        id: taskElementId,
        task: task
    }
    return taskObject;
};

//Find relevant list array in Tasks from list element
function relevantListArray(parentListId){
    let listArray;
    switch(parentListId){
        case "to-do-tasks":
            listArray = "todo";
            break;
        case "in-progress-tasks":
            listArray = "in-progress";
            break;
        case "done-tasks":
            listArray = "done";
            break;
    }
    return listArray;
};

//Find relevant list element from Array in Tasks
function relevantListElement(listArray) {
    let parentListId;
    switch(listArray){
        case "todo":
            parentListId = "to-do-tasks";
            break;
        case "in-progress":
            parentListId = "in-progress-tasks";
            break;
        case "done":
            parentListId = "done-tasks";
            break;
    }
    return parentListId;
};

//Add task
function addTask(e, input){
    //Get the relevant list
    const siblingId = e.target.parentElement.previousElementSibling.id;
    const task = input.value;
    //Empty string input Error
    if(task == ""){ alert("invalid Id");
    throw new Error("Invalid input");
    }
    //Create task with a random ID and place it in the correct list
    const taskElement = createTaskElement(task, siblingId);
    attachId(taskElement);
    //Create object
    const taskObject = createTaskObject(taskElement.id, task);
    //Push to the relevant array in "Tasks" object
    const listArray = relevantListArray(siblingId);
    Tasks[listArray].push(taskObject);
    //Save to local storage
    saveTasksToStorage();
    //Clear input
    input.value = "";
    return taskElement;  
};





