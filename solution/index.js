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




// -------------- DOM -------------- \\
//Elements
const mainContainer = document.getElementById("main-container");
const toDoInput = document.getElementById("add-to-do-task");
const inProgressInput = document.getElementById("add-in-progress-task");
const doneInput = document.getElementById("add-done-task");

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
        //Task element edit     
    }
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
    }
    return targetId;
};

//Random ID generator between 1-100
function randomId(){
    return Math.floor(Math.random() * 101);
  };

//Task identification
function attachId(element){
    let newId = randomId();
    element.id = "task" + newId;
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
    //Clear input
    input.value = "";
    //Create task with a random ID
    let element = createTaskElement(task, siblingId);
    attachId(element);
    //Save to local storage
    
    return element;  
};



