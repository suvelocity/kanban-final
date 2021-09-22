//setting variables for the document elements
let taskDiv = document.getElementById('tasks-div')
let taskSectionsArray = Array.from(document.querySelectorAll('.task-section'));

//adding a list item functionality

function addTask(e){
    let target = e.target;
    if(target.className === 'add-task'){
        let newTaskInnerItem = createElement('input', children = [], classes = ['taskItemInner'], attributes = {value: `${target.previousElementSibling.value}`, 'disabled' :' disabled'});
        let newTask = createElement('li',children = [newTaskInnerItem], classes = ['taskItem'], attributes = {});
        console.log(newTask + 'new task element');
        target.nextElementSibling.append(newTask);
    }
}
taskDiv.addEventListener('click', addTask)














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