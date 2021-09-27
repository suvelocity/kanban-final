
'use strict'





const dark = document.getElementById("themeSwitch"); //theme saver && reloader
// EVENT LISTENERS
dark.checked = localStorage.getItem("dark") === "true";
dark.addEventListener("click", () => {
  localStorage.setItem("dark", dark.checked);
});

// CONSTANTS
const API = `https://json-bins.herokuapp.com/bin/614ba253815b7dac76e143fc`;
// lists
const todoList = document.getElementById('todo-tasks')
const inProgressList = document.getElementById('in-progress-tasks')
const doneList = document.getElementById('done-tasks')
// buttons
const todoBtn = document.getElementById('submit-add-to-do');
const inProgressBtn = document.getElementById('submit-add-in-progress');
const doneBtn = document.getElementById('submit-add-done');
const deleteAllTasksButton = document.getElementById('delete-all-tasks'); //Access to the delete al tasks button element
// inputs
const todo = document.getElementById('add-to-do-task');
const inProgress = document.getElementById('add-in-progress-task');
const done = document.getElementById('add-done-task');

// event listeners
todoBtn.addEventListener("click", () => addTask('todo'));
inProgressBtn.addEventListener("click", () => addTask('inProgress'));
doneBtn.addEventListener("click", () => addTask('done'));

// WEB API(S) 
async function fetchTasks() {
  const res = await fetch(API);
  const data = await res.json();

  localStorage.setItem("tasks", JSON.stringify(data));
  ['todo', 'in-progress', 'done'].forEach(listName => {
    data.tasks[listName].forEach(task => {
        const li = document.createElement('li');
        li.innerText = task;
        if (listName === 'todo') todoList.append(li);
        if (listName === 'in-progress') inProgressList.append(li);
        if (listName === 'done') doneList.append(li);
    });
  })

}
fetchTasks();

async function addTask(type) {
    const li = document.createElement('li');
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (type === 'todo') {
        if (!todo.value) return;
        data.tasks.todo.push(todo.value);
        li.innerText = todo.value;
        console.log(li.innerText);
        todoList.append(li);
        todo.value = '';
    } else if (type === 'inProgress') {
        if (!inProgress.value) return;
        data.tasks['in-progress'].push(inProgress.value);
        li.innerText = inProgress.value;
        inProgressList.append(li);
        inProgress.value = '';
    } else {
        if (!done.value) return;
        data.tasks.done.push(done.value);
        li.innerText = done.value;
        doneList.append(li);
        done.value = '';
    }

    try {
        const res = await fetch(API, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data),
        });
        if (res.status >= 400) throw new Error('Something went wrong');
    } catch (error) {
        console.log(error);
    }
    localStorage.setItem('tasks', JSON.stringify(data));
}


const search = document.getElementById('search'); //search bar input section holder

let dataStr = localStorage.getItem("tasks");
let data = dataStr
    ? JSON.parse(dataStr) 
    : {
        "todo": [],
        "in-progress": [],
        "done": []
    };



// add to do task content to matchin list/s  & saving in local storage //
todoBtn.addEventListener('click', () => {
    
    liGenerator( todo, todoList ); 

        data["tasks"]["todo"].push({
            task: todoList.firstChild.firstChild.textContent,
            date: todoList.firstChild.childNodes[1].childNodes[1].textContent,
            time: todoList.firstChild.childNodes[1].childNodes[2].textContent
        });
        setDataToLocalStorage();
    
}, { passive: true });

todo.addEventListener('keydown' , (e) => {

    if(e.key === "Enter")
    {
        liGenerator( todo, todoList )
        data["tasks"]["todo"].push({
            task: todoList.firstChild.firstChild.textContent,
            date: todoList.firstChild.childNodes[1].childNodes[1].textContent,
            time: todoList.firstChild.childNodes[1].childNodes[2].textContent
        });
        setDataToLocalStorage();
    }
    
}, { passive: true });

console.log(inProgressList.firstChild)


// add in progress task content to matchin list/s  & saving in local storage //
inProgressBtn.addEventListener('click', () => {

    liGenerator( inProgress, inProgressList );

    data["tasks"]["in-progress"].push({
        task: inProgressList.firstChild.firstChild.textContent,
        date: inProgressList.firstChild.childNodes[1].childNodes[1].textContent,
        time: inProgressList.firstChild.childNodes[1].childNodes[2].textContent
    });
    setDataToLocalStorage();
});

inProgress.addEventListener('keydown' , (e) => {

    if(e.key === "Enter") 
    {
        liGenerator( inProgress, inProgressList )   
        
        data["tasks"]["in-progress"].push({
            task: inProgressList.firstChild.firstChild.textContent,
            date: inProgressList.firstChild.childNodes[1].childNodes[1].textContent,
            time: inProgressList.firstChild.childNodes[1].childNodes[2].textContent
        });
        setDataToLocalStorage();
    }
    
}, { passive: true });




// add done task cntent to matchin list/s & saving in local storage //
doneBtn.addEventListener('click' , () => {

    liGenerator( done, doneList );

    data["tasks"]["done"].push({
        task: doneList.firstChild.firstChild.textContent,
        date: doneList.firstChild.childNodes[1].childNodes[1].textContent,
        time: doneList.firstChild.childNodes[1].childNodes[2].textContent
    });
    setDataToLocalStorage();
        
}, { passive: true });

done.addEventListener('keydown' , (e) => {

    if(e.key === "Enter") 
    {
        liGenerator( done, doneList );
        data["tasks"]["done"].push({
            task: doneList.firstChild.firstChild.textContent,
            date: doneList.firstChild.childNodes[1].childNodes[1].textContent,
            time: doneList.firstChild.childNodes[1].childNodes[2].textContent
        });
        setDataToLocalStorage();
    }
    
}, { passive: true });

function setDataToLocalStorage()
{
    //if(!isDataEmpty(data)) //if data not empty meaning user has inserted tasks. then insert it to local storage
        localStorage.setItem("tasks", JSON.stringify(data));
}



function onLoad() 
{   
    if(data)//if data array not empty.. meaning user has inserted tasks.
    {
        
        for(const listName in data["tasks"])
        {
            for(const elData of data["tasks"][`${listName}`])
            {   
                    const listEl = document.getElementById(`${listName}-tasks`);
                    localStorageLoader(listEl,elData.task,elData.date,elData.time);
            }  
        }
    }  
    else localStorage.insertItem("tasks", {
        'todo': [], 'inprogess': [], 'done': []
    });
}
onLoad();

function localStorageLoader(listEl,task,date,time)
{
    const liEl = elCreator( 'li', [task], ['list'], {} ); //creating and inserting li el to list from user input

    //Full Date Structure!
            const fulldateEl = elCreator('span', [
                ' { ',
                date,
                time,
                ' }'
            ], ['full-date']);
    try{
        eleDOMAppender(liEl, fulldateEl); //apending full date to the task list
        if(listEl.childList === 'undefined') //if it doesnt have a  child, append it.
        {
            eleDOMAppender( listEl , liEl ); //sets the value of the input to the currrent state of it
        }
        else{ //if it does  have a child insert the generated li from user to the top of the ul
            listEl.insertBefore(liEl, listEl.firstChild);
        }
    }
    catch(err)
    {
        console.error(err)
    }
    
}

function isDataEmpty(data)
{
    if(data["tasks"]["todo"].length > 0 && data["tasks"]["in-progress"].length > 0 && data["tasks"]["done"].length > 0) return false;
    return true;
}


//delete all tasks button
deleteAllTasksButton.addEventListener('click', () => {
    if(UserContentInputArray.length > 0) //if lists are not empty.. continue.
    {
        if(confirm("Are you sure you want to delete all buttons in your lists!? THIS ACTION CANNOT BE REVERSED!")) //ask user if he sure he want delete
        {
            UserContentInputArray.forEach(liTask => { //clear lists
                liTask.parentElement.remove();
            });
            localStorage.removeItem("tasks"); //removes it from local storage
        }
    }
});


//element creator function. gets: element children, classes, attributes, sets: existing element (not yet inserted in DOM!)//

function elCreator(el, children = [], classes = [], attributes = {}){ 
    const ele = document.createElement(el);

    //children
    ele.append(...children);

    //classes
    ele.classList.add(...classes);

    //attributes
   for(const attr in attributes)
   {
    ele.setAttribute(attr, attributes[attr]);
   }

   return ele;
} 


//Element DOM appendor function. gets: where you want to ***apppend***(means last in place) it to, and what you wanna append, which element (which already been made). sets: appending element/s in DOM//
function eleDOMAppender( destintionEle, currentEle ){ 
    try{
        destintionEle.append(currentEle);
    }
    catch(err)
    {
        throw(`there was an error with your element. please make sure it's not Null!`);
    }
}

// try
// {
    let UserContentInputArray = []; //public array of user inputs li
    const listItems = document.querySelectorAll('ul'); //selecting lists
    let isHover = false;
    let currentHoveredEl; // pulic var to store & access the var that being hovered at the moment

    const observer = new MutationObserver( (mutations) => { //observing for changes in the list
        
            mutations.forEach( function (mutation){

            

            if(mutation.addedNodes.length) //if list item got added === true
            {                
                    const liTask = mutation.addedNodes[0];

                    //!!~~**DONT FORGET TO UPDATE WHEN ITEM DELETED**~~!!//
                    UserContentInputArray.push(liTask); //pushin newcontent to array to store its value

                    liTask.addEventListener('click', (e) => { //event when user click 4 times in a row it removes the specific list item from the specific lsit
                        if(e.detail === 4)
                        {
                          e.target.parentElement.remove() //removing its whole from list
                          UserContentInputArray.splice(UserContentInputArray.indexOf(e.target),1) //removing it from the user input array as well
                        }
                    }, { passive: true });

                    liTask.addEventListener( 'dblclick', () => { //add event listener to the first child every time 

                        liTask.setAttribute("contenteditable", true); //make it editable
                        liTask.classList.remove('hover') // remove element  hovering effect when doublclicked 
                        liTask.classList.add('no_selection') // remove element selection backgroun color when doublclicked 
                        liTask.nextSibling.classList.add('no_selection')
                        localstorageScanner();
    
                          liTask.addEventListener( 'keydown', (e) => { //when Enter hit prevent its default
                                if(e.key === "Enter") 
                                {
                                    e.preventDefault()
                                }
                            }); 
                    }); 

                    function localstorageScanner()
                    {
                        if(data)
                        {
                            for(const listName in data["tasks"])
                            {
                                for(const elData of data["tasks"][`${listName}`])
                                {   
                                        console.log(elData)
                                        console.log(liTask)
                                        if(elData.task !== liTask.textContent) localStorage.setItem("tasks", elData.task)
                                }  
                            }
                        } 
                    }


                    liTask.addEventListener( 'blur', () => { //vent when user loses focus off the editable field
                        liTask.setAttribute("contenteditable", false); //return it to its initial state
                        liTask.classList.add('hover');
                        liTask.classList.remove('no_selection')
                        localstorageScanner();
                        liTask.nextSibling.classList.remove('no_selection')
                    }, { passive: true });


                    // liTask.parentElement.setAttribute('draggable', true);
                    // liTask.parentElement.setAttribute('onDragStart', onDragStart);
    
                    liTask.addEventListener('mouseover', (e) => {//checking if user hoverin the list item then flag changes to true
                        isHover = true;
                        currentHoveredEl = liTask;
                        //liTask.matches(':hover')
                    }, { passive: true });    
                    
                    liTask.addEventListener('mouseout', () =>{ //checking if user not hoverin the list item then flag changes to false
                        isHover = false;
                    }, { passive: true });
            }
        });       
            
    });

    //function gets an input element and sets an li element to the corresponding section of the task//
function liGenerator( inputElement, listElement )
{
    const inputsArray = [todo, done, inProgress, search]; //input fields arrays

    if (isElementEmpty(inputElement)) 
    {
        setTimeout(() => {
             alert("Please Enter a value inside the input box, BOX CANT BE EMPTY!"); //gettin the value of current state and checkinif empty : error!   
        }, 150);
    }
    else
    {
        inputsArray.forEach( inputField => inputField.classList.remove('error'));  // if not empty (& and submitted one form) remove error style attribute to all input fieldds 
        const userInputSection = elCreator('span', [inputElement.value], ['li-task', 'hover', 'draggable']); //section of user input only creator
        const liEl = elCreator( 'li', [userInputSection], ['list', 'draggable'], {} ); //creating and inserting li el to list from user input

        
        //date elements creation!
        const fullDate = new Date(); //date of submitting indicator
        const date = elCreator( 'span', [ ` ${fullDate.getDate()}/${fullDate.getMonth()+1}/${fullDate.getFullYear()} `], ['date']);
        const time = elCreator('span', [` ${fullDate.getHours()}:${fullDate.getMinutes()}:${fullDate.getSeconds()} `], ['time']);
        
        //Full Date Structure!
        const fulldateEl = elCreator('span', [
            ' { ',
            date,
            time,
            ' }'
        ], ['full-date']);

        //apend FULLDATE to list!
        eleDOMAppender(liEl, fulldateEl); //apending full date to the task list
        
        // listElement.forEach( listElement => {

                if(listElement.firstElementChild === 'null') //if it doesnt have a  child, append it.
                {
                    eleDOMAppender( listElement , liEl ); //sets the value of the input to the currrent state of it
                }
                else{ //if it does  have a child insert the generated li from user to the top of the ul
                    listElement.insertBefore(liEl, listElement.firstChild);
                }   
            // });

        inputElement.value = ''; //resetin the value of input field after submittion
    } 
} 
        
        
    if(UserContentInputArray.length === 0 && localStorage.length === 0)  // set localstorage to initial state if no tasks.
    {
        localStorage.setItem("tasks", JSON.stringify(data));
    }


    listItems.forEach((list) => { //observing the changes for every list
     observer.observe( list, {childList: true }); // observing for list items which being added
    });
/** ~~ !!! STOP THE MUTANT WHEN USER NOT MAKING AN EVENT RELATED TO IT!!! ~~ */

window.addEventListener( 'keydown', (e) => { // detectin keyboard events are only on input type elements so i detect it through window object
                        
    if( e.altKey || e.altGraphKey )
    {   
        e.preventDefault(); //preventing default so it wont switch to other objects and wont capture the windows events!
        
        if(isHover && e.key === '1' && currentHoveredEl.parentElement.parentElement.parentElement.id !== "todo-tasks-section")    
        {
            if(todoList.firstElementChild === 'null') //if it doesnt have a  child, append it.
            {
                eleDOMAppender(todoList,currentHoveredEl.parentElement);  //if current task is hovered and not in the same list of the destination list then pass it over.. 
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
                todoList.insertBefore(currentHoveredEl.parentElement, todoList.firstChild);
            }
        }

        if(isHover && e.key === '2' &&  currentHoveredEl.parentElement.parentElement.parentElement.id !== `in-progress-tasks-section`)    
        {
            if(todoList.firstElementChild === 'null') //if it doesnt have a  child, append it.
            {
                eleDOMAppender(inProgressList,currentHoveredEl.parentElement); //if current task is hovered and not in the same list of the destination list then pass it over.. 
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
                inProgressList.insertBefore(currentHoveredEl.parentElement, inProgressList.firstChild);
            }
        }

        if(isHover && e.key === '3' && currentHoveredEl.parentElement.parentElement.parentElement.id !== "done-tasks-section")    
        {
            if(todoList.firstElementChild === 'null') //if it doesnt have a  child, append it.
            {
            eleDOMAppender(doneList,currentHoveredEl.parentElement); //if current task is hovered and not in the same list of the destination list then pass it over..
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
                doneList.insertBefore(currentHoveredEl.parentElement, doneList.firstChild);
            }
        }      
    }
});


UserContentInputArray.forEach((inList) => { //making input lists lower case behind the scenes ;)
    inList.textContent.toLowerCase();
});


//Search bar event//
search.addEventListener('keyup', e => {

    console.log(search)
    if(e.key !== "Enter"){
        if(isElementEmpty(search)){
           //checking if field empty and assignin error class style if it is.
        } else {
          [search, inProgress, todo, done].forEach(el => el.classList.remove("error")); //removing error style class. if its not empty and doesnt have the error attached to it it will just keep going cuz no error cass in it
        }
    }

    const searchQuery = e.target.value;
        UserContentInputArray.forEach( (listTask) =>{
            if(searchQuery.length > 0)
            {
                if(!listTask.textContent.toLowerCase().includes(searchQuery.toLowerCase())) listTask.parentElement.classList.add('hidden')
                if(listTask.textContent.toLowerCase().includes(searchQuery.toLowerCase()))listTask.parentElement.classList.remove('hidden')     
            }
            else listTask.parentElement.classList.remove('hidden')
        }); 
    
}, { passive: true })


//---------------------------------------------------------FUNCTIONS---------------------------------------------------------------------//

//----------------------GENERIC FUNCTIONS----------------------//

//function checking if **INPUT ELEMENT** is empty(including spaces) attach error class style to it etc//

function isElementEmpty(el)
{
    
    if(el.value === '' || el.value.toLowerCase() === el.value.toUpperCase()) //checing if field empty or only has spaces in it
    {
        el.classList.add('error');
        return true;
    }
    return false;    
}



// function addEventListener() {
//     const draggables = document.querySelectorAll('.draggable');
//     const dragListItems = document.querySelectorAll('.draggable-list li');

//     draggables.forEach(draggable => {
//         draggable.addEventListener('dragstart', dragStart);
//     });

//     dragListItems.forEach(item => {
//         item.addEventListener('dragover', dragOver);
//         item.addEventListener('drop', dragDrop);
//         item.addEventListener('dragenter', dragEnter);
//         item.addEventListener('dragleave', dragLeave);
//     });
    
// }