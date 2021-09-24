'use strict'


//---------------------------------------------------------VARIABLES---------------------------------------------------------------------//

const toDoInput = document.getElementById('add-to-do-task'); //Access to to do task user input element
const inProgressInput = document.getElementById('add-in-progress-task'); //Access to in progress task user input element
const doneInput = document.getElementById('add-done-task'); //Access to done task user input element

const addToDoButton = document.getElementById('submit-add-to-do'); //Access to to do task submit button element
const addInProgressButton = document.getElementById('submit-add-in-progress'); //Access to to do task submit button element
const addDoneButton = document.getElementById('submit-add-done'); //Access to to do task submit button element

const toDoTasksList = Array.from(document.getElementsByClassName('to-do-tasks'));
const inProgressTasksList = Array.from(document.getElementsByClassName('in-progress-tasks'));
const DoneTasksList = Array.from(document.getElementsByClassName('done-tasks'));

const search = document.getElementById('search'); //search bar input section holder


//---------------------------------------------------------EVENT LISTENERS---------------------------------------------------------------------//

 
// add to do task content to matchin list/s  & saving in local storage //
addToDoButton.addEventListener('click', () => {

    liGenerator( toDoInput, toDoTasksList );
       
    
}, { passive: true });

toDoInput.addEventListener('keydown' , (e) => {

    if(e.key === "Enter") liGenerator( toDoInput, toDoTasksList );     
    
}, { passive: true });





// add in progress task content to matchin list/s  & saving in local storage //
addInProgressButton.addEventListener('click', () => {

    liGenerator( inProgressInput, inProgressTasksList );
});

inProgressInput.addEventListener('keydown' , (e) => {

    if(e.key === "Enter") liGenerator( inProgressInput, inProgressTasksList );     
    
}, { passive: true });





// add done task cntent to matchin list/s & saving in local storage //
addDoneButton.addEventListener('click' , () => {

    liGenerator( doneInput, DoneTasksList );     
    
}, { passive: true });

doneInput.addEventListener('keydown' , (e) => {

    if(e.key === "Enter") liGenerator( doneInput, DoneTasksList );     
    
}, { passive: true });


// try
// {
    var UserContentInputArray = []; //public array of user inputs li
    const listItems = document.querySelectorAll('ul'); //selecting lists
    var isHover = false;

    const observer = new MutationObserver( (mutations) => { //observing for changes in the list
        
         mutations.forEach( function (mutation){

            

            if(mutation.addedNodes.length) //if list item got added === true
            {                
                    const liTask = mutation.addedNodes[0].childNodes[0];

                    //!!~~**DONT FORGET TO UPDATE WHEN ITEM DELETED**~~!!//
                    UserContentInputArray.push(liTask); //pushin newcontent to array to store its value

                    console.log(UserContentInputArray)
                    liTask.addEventListener('click', (e) => { //event when user click 4 times in a row it removes the specific list item from the specific lsit
                        if(e.detail === 4)
                        {
                          e.target.parentElement.remove() //removing its whole from list
                          UserContentInputArray.splice(UserContentInputArray.indexOf(e.target),1) //removing it from the user input array as well
                          console.log(UserContentInputArray)
                        }
                    }, { passive: true });

                    liTask.addEventListener( 'dblclick', () => { //add event listener to the first child every time 

                        liTask.setAttribute("contenteditable", true); //make it editable
                        liTask.classList.remove('hover') // remove element  hovering effect when doublclicked 
                        liTask.classList.add('no_selection') // remove element selection backgroun color when doublclicked 
                        liTask.nextSibling.classList.add('no_selection')
    
                          liTask.addEventListener( 'keydown', (e) => { //when Enter hit prevent its default
                                if(e.key === "Enter") 
                                {
                                   e.preventDefault()
                                }
                            }); 
                    }); 


                    liTask.addEventListener( 'blur', () => { //vent when user loses focus off the editable field
                        liTask.setAttribute("contenteditable", false); //return it to its initial state
                        liTask.classList.add('hover');
                        liTask.classList.remove('no_selection')
                        liTask.nextSibling.classList.remove('no_selection')
                        isHover = false;
                    }, { passive: true });

    
                    liTask.addEventListener('keyup', (e) => { // detectin keyboard events are only on input type elements so i detect it through window object
                        console.log(isHover)
                        if((e.altKey || e.getModifierState('AltGraph')) )
                        {
                            console.log('lol')
                        }
                    });
    
                    liTask.addEventListener('mouseover', (e) => {
                        isHover = true;
                        //liTask.matches(':hover')
                    });                   
            }
        });       
            
    });
        
        
    listItems.forEach((list) => { //observing changes for every list
     observer.observe( list, {childList: true }); // observing for list items which being added
    });



//Search bar event//
search.addEventListener('keydown', e => {


    if(e.key !== "Enter"){
        if(isElementEmpty(search)){
           //checking if field empty and assignin error class style if it is.
        } else {
          [search, inProgressInput, toDoInput, doneInput].forEach(el => el.classList.remove("error")); //removing error style class. if its not empty and doesnt have the error attached to it it will just keep going cuz no error cass in it
        }
    }

    let searchInput = search.value.toLowerCase().split(' ');
    if(e.key === "Escape" && searchInput[0] != '') 
    {
        console.log( searchInput[searchInput.length - 1].pop() );
    }

    //if(search.value = /a-z/) //regex check for valid input
    if(searchInput[0] != '') 
    {
        console.log(searchInput);
        //console.log(UserContentInputArray);
    }

    //else

    //console.log(UserContentInputArray)

    UserContentInputArray.forEach(() => {
        searchInput
    });
    
}, { passive: true })

//---------------------------------------------------------FREE AREA---------------------------------------------------------------------//

 



//---------------------------------------------------------FUNCTIONS---------------------------------------------------------------------//

//----------------------GENERIC FUNCTIONS----------------------//

//function checking if **INPUT ELEMENT** is empty attach error class style to it etc//
function isElementEmpty(el)
{
    if(el.value === '')
    {
      el.classList.add('error');
      return true;
    }
    return false;    
}

//function gets an input element and sets an li element to the coresponsing section of the task//
function liGenerator( inputElement, arrayOfListElementsByClass )
{
    const inputsArray = [toDoInput, doneInput, inProgressInput, search]; //input fields arrays

    if ( isElementEmpty(inputElement) || arrayOfListElementsByClass.length === 0 ) 
    {
        setTimeout(() => {
             alert("Please Enter a value inside the input box, BOX CANT BE EMPTY!"); //gettin the value of current state and checkinif empty : error!   
        }, 150);
    }
    else
    {
      inputsArray.forEach( inputField => inputField.classList.remove('error'));  // if not empty (& and submitted one form) remove error style attribute to all input fieldds 

      const userInputSection = elCreator('span', [inputElement.value], ['li-task', 'hover']); //section of user input only creator
      const liEl = elCreator( 'li', [userInputSection], ['list'], {} ); //creating and inserting li el to list from user input

      
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
      
      arrayOfListElementsByClass.forEach( listElement => {

            if(listElement.firstElementChild === 'null') //if it doesnt have a  child, append it.
            {
                eleDOMAppender( listElement , liEl ); //sets the value of the input to the currrent state of it
            }
            else{ //if it does  have a child insert the generated li from user to the top of the ul
               listElement.insertBefore(liEl, listElement.firstChild);
            }

        });

      inputElement.value = ''; //resetin the value of input field after submittion
    } 
} 


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


//Element DOM appendor function. gets: where you want to apppend it to, and what you wanna append, which element (which already been made). sets: appending element/s in DOM//
function eleDOMAppender( destintionEle, currentEle ){ 
    try{
        destintionEle.append(currentEle);
    }
    catch(err)
    {
        throw(`there was an error with your element. please make sure it's not Null!`);
    }
}


//----------------------SPECIFIC FUNCTIONS----------------------//




//---------------------------------------------------------WEB API(S)---------------------------------------------------------------------//

