// //////// eventListeners

// to do section           // adding click events to the add buttons
const buttonToDo = document.getElementById('submit-add-to-do');
buttonToDo.addEventListener('click', addLiGeneric);
//  in-progress
const buttonInProgress = document.getElementById('submit-add-in-progress');
buttonInProgress.addEventListener('click', addLiGeneric);
//  done
const buttonDone = document.getElementById('submit-add-done');
buttonDone.addEventListener('click', addLiGeneric);

// listener for the search filter
const input = document.getElementById('search');
input.onkeyup = searchFilter;

// events that call functions to mangae the moving task between ul functionality.(until 214);
document.addEventListener('keydown', (event) => altkeyPreesed(event));
document.addEventListener('keyup', (event) => moveTaskUl(event));
document.addEventListener('keydown', (event) => taskChangeUl(event));

// events for dran and drop
const ul1 = document.getElementById('todo');
const ul2 = document.getElementById('in-progress');
const ul3 = document.getElementById('done');
ul1.addEventListener('dragover', allowDrop); // adding dragover and drop listeners to all three ul's
ul2.addEventListener('dragover', allowDrop);
ul3.addEventListener('dragover', allowDrop);
ul1.addEventListener('drop', drop);
ul2.addEventListener('drop', drop);
ul3.addEventListener('drop', drop);
