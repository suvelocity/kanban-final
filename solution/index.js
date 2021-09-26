//initilizes the local storage object
if(!localStorage.tasks || localStorage.tasks.length == 0){
    localStorage.setItem('tasks', JSON.stringify({
        "todo": [],
        "in-progress": [],
        "done": [],
        'deleted':[]
          })
        );
}  

document.body.addEventListener('click',(e) => {
    console.log(e.target.id);
    if(e.target.id === 'new-theme-btn'){
        console.log('lll');
    }
})


//localStorage.clear();//clears local storage


    let localStorageObjectForUpdate = JSON.parse(localStorage.tasks);

//adding event listeners to the body
document.body.addEventListener('mouseover' ,addHoverReplace);
document.body.addEventListener('dblclick',gainFocus);
document.body.addEventListener('focusout', saveValueBlur);
document.body.addEventListener('contextmenu', removeLi);
document.addEventListener('click', sortAz);

//local storage save function
function localStorageSave(){
    localStorageObjectForUpdate.todo[0] = toDoTasksUl.outerHTML;
    localStorageObjectForUpdate['in-progress'][0] = inProgressTasksUl.outerHTML;
    localStorageObjectForUpdate.done[0] = doneTasksUl.outerHTML;
    localStorageObjectForUpdate.deleted[0] = deletedTasksUl.outerHTML;
    //console.log(localStorageObjectForUpdate);
    localStorage.setItem('tasks',JSON.stringify(localStorageObjectForUpdate));
}

//setting global variables for the document elements
let taskDiv = document.getElementById('tasks-div')
let taskSectionsArray = Array.from(document.querySelectorAll('.task-section'));
let submitButtonArray = Array.from(document.getElementsByClassName('add-task'));
let searchBar = document.getElementById('search');
let saveButton = document.getElementById('save-button');
let loadButton = document.getElementById('load-button');
let showRecycleBin = document.getElementById('show-recycle');
let loader = document.querySelector('.api-buttons').lastElementChild;
let recycleBin = document.querySelector('.recycle-bin');
let toDoContainer = document.getElementById('to-do-container');
let inProgressContainer = document.getElementById('in-progress-container');
let doneContainer = document.getElementById('done-container');
 
 //localstorage loading function
 if(localStorageObjectForUpdate.todo[0] != null || localStorageObjectForUpdate['in-progress'][0] != null || localStorageObjectForUpdate.done[0] != null || localStorageObjectForUpdate.deleted[0] != null){
   

    
    function appendToContainer(container, ul){
        if(localStorageObjectForUpdate[ul][0] == null){
            container.innerHTML = '';
        }else{
            container.innerHTML = localStorageObjectForUpdate[ul][0];
        }
    }
    appendToContainer(toDoContainer, 'todo');
    appendToContainer(inProgressContainer,'in-progress');
    appendToContainer(doneContainer, 'done');
    appendToContainer(recycleBin, 'deleted');

    
    var toDoTasksUl = toDoContainer.firstChild;
    var inProgressTasksUl = inProgressContainer.firstChild;
    var doneTasksUl = doneContainer.firstChild;
    var deletedTasksUl = recycleBin.firstChild;

 }else{
    var toDoTasksUl = createElement('ul', children = [], classes = ['to-do-tasks'], attributes = {});
    var inProgressTasksUl = createElement('ul', children = [], classes = ['in-progress-tasks'], attributes = {});
    var doneTasksUl = createElement('ul', children = [], classes = ['done-tasks'], attributes = {});
    var deletedTasksUl = createElement('ul', children = [], classes = ['recycle-Ul'], attributes = {});
    toDoContainer.appendChild(toDoTasksUl);
    inProgressContainer.appendChild(inProgressTasksUl);
    doneContainer.appendChild(doneTasksUl);
    recycleBin.appendChild(deletedTasksUl);
 }


//adding a list item functionality
function addTask(e){
    let target = e.target;
    let currentSection = target.parentElement;
    if(target.className === 'add-task'){
        let inputText = target.previousElementSibling.value;
       if(inputText === ''){
            alert("You haven't entered any text");
       }else{
            let newTask = createElement('li',children = [/*newTaskInnerItem */ `${target.previousElementSibling.value}`], classes = ['task'], attributes = {'draggable': 'true'});
            console.log(target.nextElementSibling.firstChild);
            target.nextElementSibling.firstChild.insertBefore(newTask, target.nextElementSibling.firstChild.firstChild);

              //local storage insertion
              localStorageSave();
              // end of local storage insertion

            //individual eventListeners for drag and Drop
              newTask.addEventListener('dragstart', dragItem);
              newTask.addEventListener('dragend', endDrag);

            target.previousElementSibling.value = '';
             
       }
    }
}
taskDiv.addEventListener('click', addTask);

// double click functionality

//gaining focus function
 function gainFocus(e){
     let target = e.target;
     if(target.tagName === 'LI'){
         target.setAttribute('contenteditable' , 'true');
         target.style.backgroundColor = 'rgba(50,50,200,0.5)';
     }
 };

 // getting out of focus after blur
 function saveValueBlur(e){
    let target = e.target;
     if(target.tagName != 'LI'){
        return;
     }
     target.setAttribute('contenteditable', 'false');
     target.style.backgroundColor = 'rgba(0,0,0,0)';
    localStorageSave();
 }
 //

 // hover + alt + 1/2/3 functionality
 function hoverReplace(e){
     let target = e.target;
  
     
      function innerKeyReplace(e){
            if(e.altKey){
                if(e.key == 1){
                    toDoTasksUl.insertBefore(target, toDoTasksUl.firstChild);
                }else if(e.key == 2){
                    inProgressTasksUl.insertBefore(target, inProgressTasksUl.firstChild);
                }else if(e.key == 3){
                    doneTasksUl.insertBefore(target,doneTasksUl.firstChild);
                }
            }
                 //local storage insertion
                 localStorageSave();
                 // end of local storage insertion
       }

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


//search bar functions
function searchTask(e){
  let value = e.target.value;
  let toDoTaskArray = Array.from(document.querySelectorAll('.to-do-tasks > .task'));
  let inProgressTaskArray = Array.from(document.querySelectorAll('.in-progress-tasks > .task'));
  let doneTaskArray = Array.from(document.querySelectorAll('.done-tasks > .task'));
  for(let li of toDoTaskArray){
      li.hidden = false;
      if(!li.textContent.toLowerCase().includes(value.toLowerCase())){
        li.hidden = true;
      }
  }
  for(let li of inProgressTaskArray){
    li.hidden = false;
    if(!li.textContent.toLowerCase().includes(value.toLowerCase())){
        li.hidden = true;
      }
  }
  for(let li of doneTaskArray){
    li.hidden = false;
    if(!li.textContent.toLowerCase().includes(value.toLowerCase())){
        li.hidden = true;
      }
  }
}
//search bar animations
searchBar.addEventListener('focus', () => {
   let placeholder = document.querySelector('.placeholder');
   let label = document.querySelector('.placeholder-label');
   placeholder.style = 'transform: translateY(-150%); color:blue; font-size:12px';
   label.style = 'border-bottom: solid 3px blue;'
})
searchBar.addEventListener('blur', () => {
    if(searchBar.value === ''){
        let placeholder = document.querySelector('.placeholder');
        let label = document.querySelector('.placeholder-label');
        placeholder.style = 'transform: translateY(0%); color:black; font-size:16px';
        label.style = 'border-bottom: solid 1px black;'
    }
})
//
searchBar.addEventListener('keyup', searchTask);
//API functions
async function saveApi(){
    loader.classList.add('loader');
    console.log('save button');
     await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15',{
        method: 'PUT',
        headers :{
            Accept: "application/json", "Content-Type": "application/json",
        },
        //body: JSON.stringify({'tasks':{'todo':[], 'in-progress': [], 'done' : []} // resets the API
        body: JSON.stringify({'tasks':{'todo':[toDoTasksUl.outerHTML], 'in-progress': [inProgressTasksUl.outerHTML], 'done' : [doneTasksUl.outerHTML]}
        }) 
  }).then(response => {if(response.status > 400){alert("i'm a teapot")}})
  loader.classList.remove('loader');
}

//load API function
async function loadApi(){
    loader.classList.add('loader');
   await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15').then(response => response.json())
   .then(data => {
    loader.classList.remove('loader');
    toDoTasksUlAPI = data.tasks.todo[0];
    inProgressTasksUlAPI = data.tasks['in-progress'][0];
    doneTasksUlAPI = data.tasks.done[0];
    //
    let toDoContainer = document.getElementById('to-do-container');
    let inProgressContainer = document.getElementById('in-progress-container');
    let doneContainer = document.getElementById('done-container');
    //

    function loadTasksFromApi(taskList, section){
        if(taskList == undefined){
            section.innerHTML = '';
        }else{
            section.innerHTML = taskList; 
        }
    } 
    loadTasksFromApi(toDoTasksUlAPI, toDoContainer);
    loadTasksFromApi(inProgressTasksUlAPI,  inProgressContainer);
    loadTasksFromApi(doneTasksUlAPI, doneContainer);


    toDoTasksUl = toDoContainer.firstChild;
    inProgressTasksUl = inProgressContainer.firstChild;
    doneTasksUl = doneContainer.firstChild;
    //saving changes to local storage
    localStorageSave();

    //resetting the individual dargNdrop eventListeners
    for(let li of Array.from(document.querySelectorAll('.task'))){
        li.addEventListener('dragstart', dragItem);
        li.addEventListener('dragend', endDrag);
      };
   });
}
//adding the event listeners to the load and save buttons
saveButton.addEventListener('click', saveApi);
loadButton.addEventListener('click', loadApi);
//



//dragItem function
function dragItem(e){
    e.target.classList.add('dragging');
}

function endDrag(e){
   e.target.classList.remove('dragging');
   localStorageSave();
}


//adding event listeners for dragNdrop
for(let li of Array.from(document.querySelectorAll('.task'))){
  li.addEventListener('dragstart', dragItem);
  li.addEventListener('dragend', endDrag);
};
let sections = Array.from(document.querySelectorAll('section'));

sections.forEach((section) => {
  
    section.addEventListener('dragover', (e) => {
        let afterElement = elementAfterDragging(section, e.clientY);
        
        if(afterElement == null){
            section.lastElementChild.firstElementChild.appendChild(document.querySelector('.dragging'));
        }else{
            section.lastElementChild.firstElementChild.insertBefore(document.querySelector('.dragging'), afterElement);
        }
 })
})


function elementAfterDragging(container, y){  
    let draggableElements = [...container.querySelectorAll('[draggable = true]:not(.dragging)')];
    return draggableElements.reduce((closest, child)=>{
        let box = child.getBoundingClientRect();
        let offset = y - box.top - box.height / 2;
        if(offset < 0 && offset > closest.offset){
          return{offset: offset, element: child};
        }else{
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element
}

//game trigger event
let asCounter = 0;
document.addEventListener('keydown', (e) => {
    if(e.key == 'a'){
        asCounter += 1;
        if(asCounter === 100){
            window.location.href =  "./htmlgame.html"
        }
    }

})

//change theme event
let themeButton = document.getElementById('new-theme-btn');
let cssLink = document.head.querySelector('link');
themeButton.addEventListener('click', (e) => {
    if(cssLink.href == 'http://127.0.0.1:5500/solution/styles.css' || cssLink.href == "./styles.css"){
        cssLink.setAttribute('href', './cssFornewTheme.css');
    }else{
        cssLink.setAttribute('href', './styles.css');
    }
})
document.addEventListener('click',(e) => {
    console.log(e.target.id);
    if(e.target.id === 'new-theme-btn'){
        console.log('lll');
    }
})


//right click for erasing li function
function removeLi(e){
    if(e.target.tagName === 'LI'){
        e.preventDefault();
        deletedTasksUl.appendChild(e.target);
        //e.target.remove();
        localStorageSave()
    }
}
//recycle bin button event listener
showRecycleBin.addEventListener('click', (e)=>{
    recycleBin.hidden = !recycleBin.hidden;
})

//sort LI alphabetically
function sortAz(e){
    let target = e.target;
 if(target.className != 'sort-az'){
     return;
 }
  Array.from(target.parentElement.lastElementChild.firstElementChild.children).sort((a,b) => {
    if (a.textContent < b.textContent) {
        target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
        return -1;
      }
      if (b.textContent > a.textContent) {
          target.parentElement.insertBefor(b, a);
        return 1;
      }
      })

}


