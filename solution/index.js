 /*
 localStorage.setItem('tasks', JSON.stringify({
    "todo": [],
    "in-progress": [],
    "done": []
      })
    ); */
   //localStorage.clear();
    console.log(JSON.parse(localStorage.tasks).todo);
//localstorage loading function
function addTaskByLocalStorage(listValue){
    let newTaskInnerItem = createElement('input', children = [], classes = ['taskItemInner'], attributes = {value: `${listValue}`, 'disabled' :''});
    let newTask = createElement('li',children = [newTaskInnerItem], classes = ['taskItem'], attributes = {});
    
    newTaskInnerItem.addEventListener('blur', saveValueBlur);
    newTask.addEventListener('dblclick', gainFocus);
    newTask.addEventListener('mouseenter', hoverReplace);
    
    return newTask;

}
//load local storage

let localStorageElements = JSON.parse(localStorage.tasks);
console.log(localStorageElements.todo);
for(let element of localStorageElements.todo){
    document.getElementsByClassName('to-do-tasks')[0].append(addTaskByLocalStorage(element));
}
for(let element of localStorageElements['in-progress']){
    document.getElementsByClassName('in-progress-tasks')[0].append(addTaskByLocalStorage(element));
}
for(let element of localStorageElements.done){
    document.getElementsByClassName('done-tasks')[0].append(addTaskByLocalStorage(element));
}



//setting variables for the document elements
let taskDiv = document.getElementById('tasks-div')
let taskSectionsArray = Array.from(document.querySelectorAll('.task-section'));
 let toDoTasksUl = document.getElementsByClassName('to-do-tasks')[0];
 let inProgressTasksUl = document.getElementsByClassName('in-progress-tasks')[0];
 let doneTasksUl = document.getElementsByClassName('done-tasks')[0];
 let submitButtonArray = Array.from(document.getElementsByClassName('add-task'));
 let localStorageTasksObjectForUpdate = JSON.parse(localStorage.tasks);
//adding a list item functionality
function addTask(e){
    let target = e.target;
    let currentSection = target.parentElement;
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

            console.log(`${target.previousElementSibling.value}`);
            //local storage insertion
            if(currentSection.id === 'to-do-section'){
                localStorageTasksObjectForUpdate.todo.push(`${target.previousElementSibling.value}`);
               console.log(localStorageTasksObjectForUpdate.todo);
            }else if(currentSection.id === 'in-progress-section'){
                localStorageTasksObjectForUpdate['in-progress'].push(`${target.previousElementSibling.value}`);
            }else if(currentSection.id === 'done-section'){
                localStorageTasksObjectForUpdate.done.push(`${target.previousElementSibling.value}`)
            }
                console.log(JSON.stringify(localStorageTasksObjectForUpdate));
            localStorage.setItem('tasks', JSON.stringify(localStorageTasksObjectForUpdate));
            // end of local storage insertion
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




  