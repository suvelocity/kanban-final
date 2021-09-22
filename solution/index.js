//setting variables for the document elements
let taskDiv = document.getElementById('tasks-div')
let taskSectionsArray = Array.from(document.querySelectorAll('.task-section'));
//an array that holds each section's list items
 let toDoChidrenArray = [];
 let inProgressChildrenArray = [];
 let doneChildrenArray = [];

//adding a list item functionality
function addTask(e){
    let target = e.target;
    if(target.className === 'add-task'){
        let inputText = target.previousElementSibling.value;
       if(inputText === ''){
            alert("You haven't entered any text");
       }else{
            let newTaskInnerItem = createElement('input', children = [], classes = ['taskItemInner'], attributes = {value: `${target.previousElementSibling.value}`, 'disabled' :''});
            let newTask = createElement('li',children = [newTaskInnerItem], classes = ['taskItem'], attributes = {});
            newTaskInnerItem.addEventListener('blur', saveValueBlur);
            newTask.addEventListener('dblclick', gainFocus);
            target.nextElementSibling.insertBefore(newTask, target.nextElementSibling.firstChild);
            target.previousElementSibling.value = '';
            
       }
    }
}
taskDiv.addEventListener('click', addTask)

// double click functionality

//gaining focus function
 function gainFocus(e){
     let target = e.target;
     if(target.className === 'taskItemInner'){
         target.removeAttribute('disabled');
     }
 };

 // getting out of focus after blur
 function saveValueBlur(e){
    e.target.setAttribute('disabled', '');
 }














//create Element function
function createElement(tagName, children = [], classes = [], attributes = {}) {
    let newEl = document.createElement(tagName);
    for(let child of children){
        if(typeof(child) === "string"){
            child = document.createTextNode(child);
        }
         newEl.append(child);
    }
    for(let cls of classes){
        newEl.classList.add(cls);
    }
    for(let attr in attributes){
        newEl.setAttribute(attr, attributes[attr]);
    }
  
    return newEl
  }