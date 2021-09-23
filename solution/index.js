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


//---------------------------------------------------------EVENT LISTENERS---------------------------------------------------------------------//


 
// add to do task content to matchin list/s  & saving in local storage //
addToDoButton.addEventListener('click', () => {

    liGenerator( toDoInput, toDoTasksList );
       
    
});

// add in progress task content to matchin list/s  & saving in local storage //
addInProgressButton.addEventListener('click', () => {

    liGenerator( inProgressInput, inProgressTasksList );
    localStorage.setItem(`${listElement}, ${inProgressInput}`);
    
});


// add done task cntent to matchin list/s & saving in local storage //
addDoneButton.addEventListener('click', () => {

    liGenerator( doneInput, DoneTasksList );
       
    
});

/** 

[addToDoButton, addInProgressButton, addDoneButton].forEach( addButton =>
    { 
    addButton.addEventListener('click', () => {
    switch(addButton)
    {
        case addToDoButton:
         liGenerator( toDoInput, toDoTasksList );
         break;

        case addInProgressButton:
         liGenerator( inProgressInput, inProgressTasksList );
         break;

        case addDoneButton:
         liGenerator( doneInput, DoneTasksList );
         break;
    }
  })
});

**/

try
{
   const listItems = document.querySelectorAll('.li-task');
   for( const listItem of listItems)
   {
       listItem.addEventListener( 'dblclick', listItem.value )
   }
}
catch(err)
{
    throw(`step up son, you've got another error GOTCH'U 😈`);
}


//---------------------------------------------------------FUNCTIONS---------------------------------------------------------------------//

//----------------------GENERIC FUNCTIONS----------------------//

//function gets an input element and sets an li element to the coresponsing section of the task//
function liGenerator( inputElement, arrayOfListElementsByClass )
{
    if ( inputElement.value === '' || arrayOfListElementsByClass.length === 0 ) 
    {
        inputElement.setAttribute('style', `border: 2px solid red`);

        setTimeout(() => {
             alert("Please Enter a value inside the input box, BOX CANT BE EMPTY!"); //gettin the value of current state and checkinif empty : error!   
        }, 150);
    }
    else
    {
      inputElement.setAttribute('style', ''); // if not empty remove error style attribute
      const userInputSection = elCreator('span', [inputElement.value], ['li-task']); //section of user input only creator
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
      
      arrayOfListElementsByClass.forEach( listElement =>  eleDOMAppender( listElement , liEl )); //sets the value of the input to the currrent state of it
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


