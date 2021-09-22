 /*
 localStorage.setItem('tasks', JSON.stringify({
    "todo": [],
    "in-progress": [],
    "done": []
      })
    ); 
    */
   //localStorage.clear();
    console.log(JSON.parse(localStorage.tasks).todo);
    let localStorageObjectForUpdate = JSON.parse(localStorage.tasks);


document.body.addEventListener('mouseover' ,addHoverReplace);
document.body.addEventListener('dblclick',gainFocus);
document.body.addEventListener('focusout', saveValueBlur);



//setting variables for the document elements
let taskDiv = document.getElementById('tasks-div')
let taskSectionsArray = Array.from(document.querySelectorAll('.task-section'));
 let submitButtonArray = Array.from(document.getElementsByClassName('add-task'));
 
 //localstorage loading function
 if(localStorageObjectForUpdate.todo.length > 0 || localStorageObjectForUpdate['in-progress'].length > 0 || localStorageObjectForUpdate.done.length > 0){
    let toDoSection = document.getElementById('to-do-container');
    let inProgressContainer = document.getElementById('in-progress-container');
    let donContainer = document.getElementById('done-container');
    toDoSection.innerHTML = localStorageObjectForUpdate.todo[0];
    inProgressContainer.innerHTML = localStorageObjectForUpdate['in-progress'][0];
    donContainer.innerHTML = localStorageObjectForUpdate.done[0];

    var toDoTasksUl = toDoSection.firstChild;
    var inProgressTasksUl = inProgressContainer.firstChild;
    var doneTasksUl = donContainer.firstChild;

 }else{
    var toDoTasksUl = createElement('ul', children = [], classes = ['to-do-tasks'], attributes = {})
    var inProgressTasksUl = createElement('ul', children = [], classes = ['in-progress-tasks'], attributes = {})
    var doneTasksUl = createElement('ul', children = [], classes = ['done-tasks'], attributes = {})

    document.getElementById('to-do-section').appendChild(toDoTasksUl);
    document.getElementById('in-progress-section').appendChild(inProgressTasksUl);
    document.getElementById('done-section').appendChild(doneTasksUl);
 }
//load local storage

 //adding the section lists to the DOM

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
            console.log(target.nextElementSibling.firstChild);
            target.nextElementSibling.firstChild.insertBefore(newTask, target.nextElementSibling.firstChild.firstChild);

              //local storage insertion
              localStorageObjectForUpdate.todo[0] = toDoTasksUl.outerHTML;
              localStorageObjectForUpdate['in-progress'][0] = inProgressTasksUl.outerHTML;
              localStorageObjectForUpdate.done[0] = doneTasksUl.outerHTML;
              console.log(localStorageObjectForUpdate);
              localStorage.setItem('tasks',JSON.stringify(localStorageObjectForUpdate));
              // end of local storage insertion

            target.previousElementSibling.value = '';
             
            console.log(toDoTasksUl);
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
    let target = e.target;
     if(target.className != 'taskItemInner'){
        return;
     }
     console.log(e.target.tagName + 'blurred');
    e.target.setAttribute('disabled', '');
 }
 //

 // hover + alt + 1/2/3 functionality
 function hoverReplace(e){
     let target = e.target;
  
      console.log(target + 'hovered');
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
                 //local storage insertion
                 localStorageObjectForUpdate.todo[0] = toDoTasksUl.outerHTML;
                 localStorageObjectForUpdate['in-progress'][0] = inProgressTasksUl.outerHTML;
                 localStorageObjectForUpdate.done[0] = doneTasksUl.outerHTML;
                 console.log(localStorageObjectForUpdate);
                 localStorage.setItem('tasks',JSON.stringify(localStorageObjectForUpdate));
                 // end of local storage insertion
       }

       console.log(target.parentElement.parentElement);
       target.addEventListener('mouseleave', () => {
            window.removeEventListener('keydown',innerKeyReplace);
        }); 

        window.addEventListener('keydown',innerKeyReplace);
 }
//add addHoverReplace
function addHoverReplace(e){
    if (e.target.tagName != 'LI'){
        return
    };
    e.target.addEventListener('mouseenter', hoverReplace);
    console.log('added hover replace')
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




  