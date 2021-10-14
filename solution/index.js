import style from './styles.css';
import {
  deleteAll, loadLocalStorageAtBeginning, loadLocalStorageToDom, toDoTasksUl, inProgressTasksUl,
  doneTasksUl, deletedTasksUl, localStorageSave
} from './localStorage';
import {
  gainFocus, dragItem, endDrag, saveValueBlur, addHoverReplace
} from './tasks event listeners';
import { searchTask } from './searchbar functionality';
import {
  taskDiv, searchBar, saveButton, loadButton, showRecycleBin,
  recycleBin, toDoContainer, inProgressContainer, doneContainer
} from './global variables for index';
import listCounter from './list counter for index';
import createElement from './create element function';
import { saveApi, loadApi } from './Api functions';
/* local storage  */

// initilizes the local storage object
loadLocalStorageAtBeginning();
// object for saving to local storage

/* dom manipulation */

// setting global variables for the document elements

// localstorage loading after refresh
loadLocalStorageToDom();
// sets the lists objects for updating
toDoTasksUl[0] = toDoContainer.firstChild;
inProgressTasksUl[0] = inProgressContainer.firstChild;
doneTasksUl[0] = doneContainer.firstChild;
deletedTasksUl[0] = recycleBin.firstChild;

/** event listeners**/

/* tasks */

// double click functionality

// gaining focus function

// hover + alt + 1/2/3 functionality

// dragItem function

// adding event listeners for dragNdrop
Array.from(document.querySelectorAll('.task')).forEach((li) => {
  li.addEventListener('dragstart', dragItem);
  li.addEventListener('dragend', endDrag);
});

// adding the drop event to the sections
const sections = Array.from(document.querySelectorAll('section'));
sections.forEach((section) => {
  section.addEventListener('dragover', (e) => {
    const afterElement = elementAfterDragging(section, e.clientY);
    if (afterElement == null) {
      section.lastElementChild.firstElementChild.appendChild(document.querySelector('.dragging'));
    } else {
      section.lastElementChild.firstElementChild.insertBefore(document.querySelector('.dragging'), afterElement);
    }
  });
});
// controls what li to switch
function elementAfterDragging (container, y) {
  const draggableElements = [...container.querySelectorAll('[draggable = true]:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/* lists */

// adding event listeners to the body
document.body.addEventListener('mouseover', addHoverReplace);
document.body.addEventListener('dblclick', gainFocus);
document.body.addEventListener('focusout', saveValueBlur);
document.body.addEventListener('contextmenu', removeLi);
document.addEventListener('click', sortAz);
document.body.addEventListener('click', deleteAll);

// total list item counter function

// adding a list item functionality

// inner add task function
function innerAddTaskToul (targetPr) {
  const target = targetPr;
  const newTask = createElement('li', [`${target.previousElementSibling.value}`], ['task'], { draggable: 'true' });
  const inseter = target.nextElementSibling.firstChild.firstChild;
  target.nextElementSibling.firstChild.insertBefore(newTask, inseter);
  // local storage insertion
  localStorageSave();
  // individual eventListeners for drag and Drop
  newTask.addEventListener('dragstart', dragItem);
  newTask.addEventListener('dragend', endDrag);
  target.previousElementSibling.value = '';
  listCounter();
}
// add task function
function addTask (e) {
  const { target } = e;
  if (target.className === 'add-task') {
    const inputText = target.previousElementSibling.value;
    if (inputText === '') {
      // eslint-disable-next-line no-alert
      alert("You haven't entered any text");
    } else {
      innerAddTaskToul(target);
    }
  }
}
taskDiv.addEventListener('click', addTask);
/*
// create Element function

/* search bar */

// search bar functions

// search bar animations
//
searchBar.addEventListener('keyup', searchTask);

// game trigger event
let asCounter = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    asCounter += 1;
    if (asCounter === 100) {
      window.location.href = './htmlgame.html';
    }
  }
});

// change theme event
const themeButton = document.getElementById('new-theme-btn');
const cssLink = document.head.querySelector('link');
themeButton.addEventListener('click', (e) => {
  if (cssLink.href === 'http://127.0.0.1:5500/solution/styles.css' || cssLink.href === './styles.css') {
    cssLink.setAttribute('href', './cssFornewTheme.css');
  } else {
    cssLink.setAttribute('href', './styles.css');
  }
});

// right click for erasing li function
function removeLi (e) {
  if (e.target.tagName === 'LI') {
    e.preventDefault();
    deletedTasksUl[0].appendChild(e.target);
    localStorageSave();
    listCounter();
  }
}
// recycle bin button event listener
showRecycleBin.addEventListener('click', (e) => {
  recycleBin.hidden = !recycleBin.hidden;
});

// sort LI alphabetically
let azCounter = 1;

function sortAzUp (target) {
  Array.from(target.parentElement.lastElementChild.firstElementChild.children).sort((a, b) => {
    if (a.textContent > b.textContent) {
      target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
      return 1;
    }
    if (b.textContent < a.textContent) {
      target.parentElement.insertBefor(b, a);
      return -1;
    }
    target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
    return 0;
  });
}
function sortAzDown (target) {
  Array.from(target.parentElement.lastElementChild.firstElementChild.children).sort((a, b) => {
    if (a.textContent < b.textContent) {
      target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
      return 1;
    }
    if (b.textContent > a.textContent) {
      target.parentElement.insertBefor(b, a);
      return -1;
    }
    target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
    return 0;
  });
}

function innerSortAz (counter, target) {
  if (counter % 2 === 0) {
    sortAzUp(target);
  } else {
    sortAzDown(target);
  }
}

function sortAz (e) {
  const { target } = e;
  if (target.className !== 'sort-az') {
    return;
  }
  innerSortAz(azCounter, target);
  azCounter += 1;
}

// adding the event listeners to the load and save buttons
saveButton.addEventListener('click', saveApi);
loadButton.addEventListener('click', loadApi);
//
