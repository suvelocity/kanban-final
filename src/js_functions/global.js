// ////////////////// global variables
let tasks; // in line 9 or 12 we define this variable
let hoverdElement = null; // in use to define the element we want to move using alt+1-3.
let passedUlId = null; // in use to define the ul that we took and element from
let altpressed = false; // in use to know if the altkey is pressed(cause we need to press alt and then another key).
let draggedItem; // in use to define the task we want to drag to another place
let localSave = localStorage.getItem('tasks');