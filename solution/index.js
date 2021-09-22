//setting variables for the document elements
let taskDiv = document.getElementById('tasks-div')
let taskSectionsArray = Array.from(document.querySelectorAll('.task-section'));
 let toDoTasksUl = document.getElementsByClassName('to-do-tasks')[0];
 let inProgressTasksUl = document.getElementsByClassName('in-progress-tasks')[0];
 let doneTasksUl = document.getElementsByClassName('done-tasks')[0];
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
            newTask.addEventListener('mouseenter', hoverReplace);
            /*
            newTask.addEventListener('mouseleave', () => {
                window.removeEventListener('keydown',innerKeyReplace);
            }); */

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
 //

 // hover + alt + 1/2/3 functionality
 function hoverReplace(e){
     let target = e.target;

     function innerKeyReplace(e){
        console.log(e.altKey)
        if(e.altKey ){
            console.log(e.key)
            if(e.key == 1){
                toDoTasksUl.append(target);
            }else if(e.key == 2){
               inProgressTasksUl.append(target);
            }else if(e.key == 3){
                doneTasksUl.append(target);
            }
       }
     } 
     target.addEventListener('mouseleave', () => {
        window.removeEventListener('keydown',innerKeyReplace);
    });
           
      if(target.tagName === 'LI'){
        console.log(e.target);
          window.addEventListener('keydown',innerKeyReplace);
      }
 }
 
 /*
 function innerKeyReplace(e){
     console.log(e.target);
    //console.log(e.altKey)
    if(e.altKey ){
        console.log(e.key)
        if(e.key == 1){
            toDoTasksUl.append(e.target);
        }else if(e.key == 2){
           inProgressTasksUl.append(e.target);
        }else if(e.key == 3){
            doneTasksUl.append(e.target);
        }
   }
 }
 */













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