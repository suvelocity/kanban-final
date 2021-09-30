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


const search = document.getElementById('search'); //search bar input section holder









function elcreaterAppenderToList(listEl,task,date,time) //from data to ul in the DOM
{
    const liElFirst = elCreator( 'span', [task], ['li-task', 'hover', 'draggable'], {draggable:"true"} ); //creating and inserting li el to list from user input
    const liEl = elCreator( 'li', [liElFirst], ['list', 'draggable'], {draggable:"true"} ); 
    
    //Full Date Structure!
            const fulldateEl = elCreator('span', [
                ' { ',
                date,
                time,
                ' }'
            ], ['full-date']);
        try{
            eleDOMAppender(liEl, fulldateEl); //apending full date to the task list
            if(listEl.firstChild === undefined) //if it doesnt have a  child, append it.
            {
                eleDOMAppender( listEl , liEl ); //sets the value of the input to the currrent state of it
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
                listEl.insertBefore(liEl, listEl.firstChild);
            }
        }
        catch(err)
        {
            console.error(err);
        }
    
}



let data ;
//let UserContentInputArray; //public array of user inputs li
if(!JSON.parse(localStorage.getItem("tasks")))
{
    localStorage.setItem("tasks", JSON.stringify({todo: [], inProgress: [], done: []}) );
    dataResetter();  
}
else 
{
    data =  JSON.parse(localStorage.getItem("tasks")); //initialize data to beggining state if not exist.
}


//resets data to initial state data.
function dataResetter()
{
    data = {todo: [], "inProgress": [], done: []};
}

function setDataToLocalStorage()
{
    localStorage.setItem("tasks", JSON.stringify(data));
}


function localStorageLoader()
{
    for(const listName in data)
    {
       for(const elData of data[`${listName}`])
        {   
            elcreaterAppenderToList( document.getElementById(`${listName === "inProgress" ? "in-progress" : listName}-tasks`), elData.task, elData.date, elData.time);
        }  
   }

}
localStorageLoader();


    //function gets an input element and sets an li element to the corresponding section of the task//
    function liGenerator( inputElement, listElement )
    {
        const inputsArray = [todo, done, inProgress, search]; //input fields arrays

        if (isElementEmpty(inputElement)) 
        {
            if(parseInt(inputElement.value) !== 'NaN' && parseInt(inputElement.value)) 
            {
                setTimeout(() => {
                    alert("Please Enter text , BOX CANT INCLUDE NUMBERS ONLY!"); //gettin the value of current state and checkinif empty : error!   
                }, 150);
            }
            else{
                setTimeout(() => {
                    alert("Please Enter a value inside the input box, BOX CANT BE EMPTY!"); //gettin the value of current state and checkinif empty : error!   
                }, 150);
            }
            
        }
        else
        {
            inputsArray.forEach( inputField => inputField.classList.remove('error'));  // if not empty (& and submitted one form) remove error style attribute to all input fieldds 
    
            const userInputSection = elCreator('span', [inputElement.value.trim()], ['li-task', 'hover', 'draggable'], {draggable:"true"}); //section of user input only creator
            const liEl = elCreator( 'li', [userInputSection], ['list', 'draggable'], {draggable:"true"} ); //creating and inserting li el to list from user input
    
             
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
    
                    if(listElement.firstElementChild === undefined) //if it doesnt have a  child, append it.
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




//function checking if **INPUT ELEMENT** is empty(including spaces) attach error class style to it etc//

function isElementEmpty(el)
{
   
   if(el.value === '' || (el.value.toLowerCase() === el.value.toUpperCase())) //checing if field empty or only has spaces in it
   {
       el.classList.add('error');
       return true;
   }
   return false;    
}




// add to do task content to matchin list/s  & saving in local storage //
todoBtn.addEventListener('click', (e) => {
    
        liGenerator( todo, todoList ); 
        search.value = '';  // reseting search input value if there is...

        data["todo"].push({
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
        search.value = '';  // reseting search input value if there is...
        
        data["todo"].push({
            task: todoList.firstChild.firstChild.textContent,
            date: todoList.firstChild.childNodes[1].childNodes[1].textContent,
            time: todoList.firstChild.childNodes[1].childNodes[2].textContent
        });
        setDataToLocalStorage();
    }
    
}, { passive: true });



// add in progress task content to matchin list/s  & saving in local storage //
inProgressBtn.addEventListener('click', () => {

    liGenerator( inProgress, inProgressList );
    search.value = '';  // reseting search input value if there is...

    data["inProgress"].push({
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
        search.value = '';  // reseting search input value if there is...
        
        data["inProgress"].push({
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
    search.value = '';  // reseting search input value if there is...

    data["done"].push({
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
        search.value = '';  // reseting search input value if there is...

        data["done"].push({
            task: doneList.firstChild.firstChild.textContent,
            date: doneList.firstChild.childNodes[1].childNodes[1].textContent,
            time: doneList.firstChild.childNodes[1].childNodes[2].textContent
        });
        setDataToLocalStorage();
    }
    
}, { passive: true });



//delete all tasks button
deleteAllTasksButton.addEventListener('click', () => {

    if(document.querySelectorAll('li').length > 0)
    {
        if(confirm("Are you sure you want to delete all buttons in your lists!? THIS ACTION CANNOT BE REVERSED!")) //ask user if he sure he want delete
        {
                dataResetter();
                setDataToLocalStorage() //removes it from local storage
                document.querySelectorAll('li').forEach(liTask => {liTask.remove()}); // removes all elements
            
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
    
    const listItems = document.querySelectorAll('ul'); //selecting lists
    const liTasks =  document.querySelectorAll('li');
    let isHover = false;
    let currentHoveredEl; // pulic var to store & access the var that being hovered at the moment
    let textContentSaver; //saving text content of the current dblclicked li before canges been made to it


    // const observer = new MutationObserver( (mutations) => { //observing for changes in the list
        
    //         mutations.forEach( function (mutation){

            

    //         if(mutation.addedNodes.length) //if list item got added === true
    //         {                
    //                 const liTask = mutation.addedNodes[0];
                    
                    //!!~~**DONT FORGET TO UPDATE WHEN ITEM DELETED**~~!!//
                    //UserContentInputArray.push(liTask); //pushin newcontent to array to store its value
function eventListeners() {
    
}
                    liTasks.forEach(liTask => {

                        liTask.addEventListener('click', (e) => { //event when user click 4 times in a row it removes the specific list item from the specific lsit
                            if(e.detail === 4)
                            {
                                const parentEl =  e.target.parentElement;
                                localStorageTaskRemover(parentEl);
                                parentEl.remove() //removing its whole from list
                                //UserContentInputArray.splice(UserContentInputArray.indexOf(e.target),1) //removing it from the user input array as well
                            }
                        }, { passive: true });
    
                        
                        liTask.addEventListener( 'dblclick', () => { //add event listener to the first child every time 
    
                            textContentSaver = liTask.firstChild.textContent;
                            liTask.firstChild.setAttribute("contenteditable", true); //excluding date
                            liTask.classList.remove('hover') // remove element  hovering effect when doublclicked 
                            liTask.classList.add('no_selection') // remove element selection backgroun color when doublclicked 
                            liTask.firstChild.classList.add('no_selection')
                            liTask.firstChild.nextSibling.classList.add('no_selection')
                            
                            setDataToLocalStorage();
    
                              liTask.addEventListener( 'keydown', (e) => { //when Enter hit prevent its default
                                    if(e.key === "Enter") 
                                    {
                                        e.preventDefault()
                                    }
                                }); 
                        }); 
    
                        liTask.addEventListener("keydown", (e) => { //if user edited and kept empty content and try to update... revoke changes.
                            if(e.key === "Enter")
                            {
                                if(liTask.firstChild.textContent.length === 0 || liTask.firstChild.textContent[0] === ' ')
                                { 
                                    liTask.firstChild.textContent = textContentSaver;
                                }
                            }
                        });
    
    
                        liTask.firstChild.addEventListener( 'blur', () => { //revert when user loses focus off the editable field
    
                            if(liTask.firstChild.textContent.length === 0 || liTask.firstChild.textContent[0] === ' ')
                            { 
                                liTask.firstChild.textContent = textContentSaver; //dont let it save if empty field
                            }
                            else{
                                liTask.firstChild.setAttribute("contenteditable", false); //return it to its initial state
                                liTask.firstChild.classList.add('hover');
                                liTask.classList.remove('no_selection');
                                localstorageScannerUpdater(liTask); //update data and localstorage with new value.
                                liTask.firstChild.classList.remove('no_selection');
                                liTask.firstChild.nextSibling.classList.remove('no_selection');
                            }
    
                        }, { passive: true });
    

        
                        liTask.addEventListener('mouseover', (e) => {//checking if user hoverin the list item then flag changes to true
                            isHover = true;
                            currentHoveredEl = liTask;
                            //liTask.matches(':hover')
                        }, { passive: true });
                        
                        liTask.addEventListener('mouseout', () =>{ //checking if user not hoverin the list item then flag changes to false
                            isHover = false;
                        }, { passive: true });
    
                        
        //         }
                    });
                   
    //     });
            
    // });


function localstorageScannerUpdater(liTask) //if there is data exist. add it to localstorage.
{
   
        for(const listName in data)
        {
           for(const elData of data[`${listName}`])
            {   
                    if( elData.task === textContentSaver
                        && elData.date === liTask.childNodes[1].childNodes[1].textContent 
                        && elData.time === liTask.childNodes[1].childNodes[2].textContent  ) 
                        { 
                                elData.task = liTask.firstChild.textContent; //addin updated task to data
                                setDataToLocalStorage(); //update localstorage as well
                        }
            }  
       }
}



function localStorageTaskRemover(liTask) //get a task and removes it from the localstorage **and the data object!** && from UserContentInputArray
{

    //remove to do tasks from data collectors
    if(liTask.parentElement.id === "todo-tasks"){
        //delete todo task from data object
        data["todo"].forEach( (taskObj, i) => taskObj.task === liTask.firstChild.textContent
                                                                    && taskObj.date === liTask.childNodes[1].childNodes[1].textContent 
                                                                    && taskObj.time === liTask.childNodes[1].childNodes[2].textContent
                                                                    ?  data["todo"].splice(i,1)
                                                                    :  console.log(taskObj) ); 
    }
    

    //remove in-progress tasks from data collectors
    if(liTask.parentElement.id === "in-progress-tasks") {
        //delete in-progress task from data object
        data["inProgress"].forEach( (taskObj, i) => taskObj.task === liTask.firstChild.textContent 
                                                                    && taskObj.date === liTask.childNodes[1].childNodes[1].textContent
                                                                    && taskObj.time === liTask.childNodes[1].childNodes[2].textContent
                                                                    ?  data["inProgress"].splice(i,1) 
                                                                    :  console.log(taskObj));
    }
    

    //remove done tasks from data collectors
    if(liTask.parentElement.id === "done-tasks"){
        //delete done task from data object
        data["done"].forEach( (taskObj, i) => taskObj.task === liTask.firstChild.textContent
                                                                    && taskObj.date === liTask.childNodes[1].childNodes[1].textContent 
                                                                    && taskObj.time === liTask.childNodes[1].childNodes[2].textContent 
                                                                    ?  data["done"].splice(i,1)
                                                                    :  console.log(taskObj) );
    }

     //remove from localstorage todo === add updated data boject
     setDataToLocalStorage();
    

 }
    

    

    



    // listItems.forEach((list) => { //observing the changes for every list
    // observer.observe( list, {childList: true }); // observing for list items which being added
    // });
/** ~~ !!! STOP THE MUTANT WHEN USER NOT MAKING AN EVENT RELATED TO IT!!! ~~ */

document.addEventListener( 'keydown', (e) => { // detectin keyboard events are only on input type elements so i detect it through window object
    
    if( e.altKey || e.altGraphKey )
    {   
        e.preventDefault(); //preventing default so it wont switch to other objects and wont capture the windows events!

        if(isHover && e.key === '1' && currentHoveredEl.parentElement.parentElement.parentElement.id !== "todo-tasks-section")    
        {
            localStorageTaskRemover(currentHoveredEl);//remove fro local storage
            data["todo"].unshift({task: currentHoveredEl.firstChild.textContent, date:currentHoveredEl.childNodes[1].childNodes[1].textContent  , time:currentHoveredEl.childNodes[1].childNodes[2].textContent}) //update data in the new current thing of list
            setDataToLocalStorage();//update local storage
            if(todoList.firstElementChild === undefined) //if it doesnt have a  child, append it.
            {
                eleDOMAppender(todoList,currentHoveredEl.parentElement);  //if current task is hovered and not in the same list of the destination list then pass it over.. 
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
                todoList.insertBefore(currentHoveredEl, todoList.firstChild);
            }
            
        }
        
        if(isHover && e.key === '2' &&  currentHoveredEl.parentElement.parentElement.parentElement.id !== `in-progress-tasks-section`)    
        {
            localStorageTaskRemover(currentHoveredEl);//remove fro local storage
            data["inProgress"].unshift({task: currentHoveredEl.firstChild.textContent, date:currentHoveredEl.childNodes[1].childNodes[1].textContent  , time:currentHoveredEl.childNodes[1].childNodes[2].textContent}) //update data in the new current thing of list
            setDataToLocalStorage(); //update local storage
            if(inProgressList.firstElementChild === undefined) //if it doesnt have a  child, append it.
            {
                eleDOMAppender(inProgressList,currentHoveredEl.parentElement); //if current task is hovered and not in the same list of the destination list then pass it over.. 
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
                inProgressList.insertBefore(currentHoveredEl, inProgressList.firstChild);
            }
            
        }

        if(isHover && e.key === '3' && currentHoveredEl.parentElement.parentElement.parentElement.id !== "done-tasks-section")    
        {
            localStorageTaskRemover(currentHoveredEl); //remove fro local storage
            data["done"].unshift({task: currentHoveredEl.firstChild.textContent, date:currentHoveredEl.childNodes[1].childNodes[1].textContent  , time:currentHoveredEl.childNodes[1].childNodes[2].textContent}) //update data in the new current thing of list
            setDataToLocalStorage(); //update local storage
            if(doneList.firstElementChild === undefined) //if it doesnt have a  child, append it.
            {
                eleDOMAppender(doneList,currentHoveredEl.parentElement); //if current task is hovered and not in the same list of the destination list then pass it over..
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
                doneList.insertBefore(currentHoveredEl, doneList.firstChild);
            }
        }      
    }
});



//Search bar event//
search.addEventListener('keyup', e => {
    
        if(isElementEmpty(search)){
           //checking if field empty and assignin error class style if it is.
        } else {
          [search, inProgress, todo, done].forEach(el => el.classList.remove("error")); //removing error style class. if its not empty and doesnt have the error attached to it it will just keep going cuz no error cass in it
        }

    const searchQuery = e.target.value;
        document.querySelectorAll('li').forEach( (listTask) =>{
            if(searchQuery.length > 0)
            {
                if(!listTask.firstChild.textContent.toLowerCase().includes(searchQuery.toLowerCase())) listTask.classList.add('hidden');
                else listTask.classList.remove('hidden');
                console.log((listTask))
            }
            else listTask.classList.remove('hidden'); 
            
        }); 
    
}, { passive: true })


let dragStartIndex;


function dragStart()
{
    console.log('sexfdgfdfy1')
   // dragStartIndex =  +this.closest('li').getAttribute('data-index');
    draggable.classList.add('over');
}


function dragOver(e)
{
    e.preventDefault();
    const draggable = document.querySelector('.over')
    list.appendChild(draggable)

    const afterElement =  getDragAfterElement(list, e.client.y)

    if(afterElement === null)
    {
        list.appendChild(draggable);
    }
    else{
        list.insertBefore(draggable, afterElement);
    }
}


// function dragDrop(e)
// {   
    // e.preventDefault();

    //const dragEndIndex = +this.getAttribute('data-index');
    // swapItems(dragStartIndex, dragEndIndex)

   // this.classList.remove('over');
//}

// function swapItems(fromIndex, toIndex)
// {
        
// }

// function dragEnter()
// {
//     // this.classList.add('over');

// }

function dragEnd()
{
    this.classList.remove('over');
}

function getDragAfterElement(container, y)
{
   const draggableElements =  [...list.querySelectorAll('.draggable:not(.over)')];

   return draggableElements.reduce((closest, child) =>{
        const box =child.getBoundingclientRect();
        const offset =  y -box.top - box.height / 2;
        if(offser < 0 && offset > closest.offset)
        {
            return { offset: offset, element:child};
        }
        else{
            return closest;
        }
   }, { offset: Number.NEGATIVE_INFINITY } ).element
}




function addEventListener() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);

        draggable.addEventListener('dragend', dragEnd);
    });

    dragListItems.forEach(list => {
        list.addEventListener('dragover', dragOver);
        
        
        // list.addEventListener('drop', dragDrop);  
        // list.addEventListener('dragenter', dragEnter);
    });
    
}



// //WEB API(S) 
// const loadButton = document.getElementById('load');

// loadButton.addEventListener('click', () => {
// async function fetchTasks() {
//     const res = await fetch(API);
//     data = await res.json();
  
//     //localStorage.setItem("tasks", JSON.stringify(data));
//     ["todo", "inProgress", "done"].forEach(listName => {
//       data[listName].forEach(task => {
//           const li = document.createElement('li');
//           li.innerText = task;
//           console.log(li.innerText)
//           if (listName === 'todo') todoList.append(li);
//           if (listName === 'inProgress') inProgressList.append(li);
//           if (listName === 'done') doneList.append(li);
//       });
//     })
  
//   }
//   fetchTasks();
  
//   async function addTask(type) {
//       const li = document.createElement('li');
//       if (type === 'todo') {
//           if (!todo.value) return;
//           data.todo.push(todo.value);
//           li.innerText = todo.value;
//           todoList.append(li);
//           todo.value = '';
//       } else if (type === 'inProgress') {
//           if (!inProgress.value) return;
//           data['inProgress'].push(inProgress.value);
//           li.innerText = inProgress.value;
//           inProgressList.append(li);
//           inProgress.value = '';
//       } else {
//           if (!done.value) return;
//           data.done.push(done.value);
//           li.innerText = done.value;
//           doneList.append(li);
//           done.value = '';
//       }
  
//       try {
//           const res = await fetch(API, {
//               method: "PUT",
//               headers: {
//                   "Content-type": "application/json; charset=UTF-8",
//               },
//               body: JSON.stringify(data),
//           });
//           if (res.status >= 400) throw new Error('Something went wrong');
//       } catch (error) {
//           console.log(error);
//       }
//       localStorage.setItem('tasks', JSON.stringify(data));
//   }
// });
  

  
