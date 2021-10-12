import style from './styles.css';
import { deleteAll } from './localStorage';
/* local storage  */
// initilizes the local storage object
if (!localStorage.tasks || localStorage.tasks.length === 0) {
  localStorage.setItem('tasks', JSON.stringify({
    todo: [],
    'in-progress': [],
    done: [],
    deleted: []
  }));
}
const localStorageObjectForUpdate = JSON.parse(localStorage.tasks);
// local storage clear button lisener
/*
function deleteAll (e) {
  const { target } = e;
  if (target.className === 'delete-button') {
    localStorage.setItem('tasks', JSON.stringify({
      todo: [],
      'in-progress': [],
      done: [],
      deleted: []
    }));
    window.location.reload();
  }
}
*/
// local storage save function

function innerLocalStorageSave (listName, ul) {
  localStorageObjectForUpdate[listName][0] = ul.outerHTML;
}

function localStorageSave () {
  innerLocalStorageSave('todo', toDoTasksUl);
  innerLocalStorageSave('in-progress', inProgressTasksUl);
  innerLocalStorageSave('done', doneTasksUl);
  innerLocalStorageSave('deleted', deletedTasksUl);
  localStorage.setItem('tasks', JSON.stringify(localStorageObjectForUpdate));
}

/* dom manipulation */

// setting global variables for the document elements
const taskDiv = document.getElementById('tasks-div');
const searchBar = document.getElementById('search');
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');
const showRecycleBin = document.getElementById('show-recycle');
const loader = document.querySelector('.api-buttons').lastElementChild;
const recycleBin = document.querySelector('.recycle-bin');
const toDoContainer = document.getElementById('to-do-container');
const inProgressContainer = document.getElementById('in-progress-container');
const doneContainer = document.getElementById('done-container');
const taskEnumeratorArray = Array.from(document.getElementsByClassName('task-enumerator'));

// localstorage loading after refresh
function appendToContainer (containerPr, ul) {
  const container = containerPr;
  if (localStorageObjectForUpdate[ul][0] == null) {
    container.innerHTML = '';
  } else {
    const currentUl = localStorageObjectForUpdate[ul][0];
    container.innerHTML = currentUl;
  }
}
if (localStorageObjectForUpdate.todo[0] != null || localStorageObjectForUpdate['in-progress'][0] != null || localStorageObjectForUpdate.done[0] != null || localStorageObjectForUpdate.deleted[0] != null) {
  appendToContainer(toDoContainer, 'todo');
  appendToContainer(inProgressContainer, 'in-progress');
  appendToContainer(doneContainer, 'done');
  appendToContainer(recycleBin, 'deleted');
  listCounter();
} else {
  const toDoTasksUl = createElement('ul', [], ['to-do-tasks'], {});
  const inProgressTasksUl = createElement('ul', [], ['in-progress-tasks'], {});
  const doneTasksUl = createElement('ul', [], ['done-tasks'], {});
  const deletedTasksUl = createElement('ul', [], ['recycle-Ul'], {});
  toDoContainer.appendChild(toDoTasksUl);
  inProgressContainer.appendChild(inProgressTasksUl);
  doneContainer.appendChild(doneTasksUl);
  recycleBin.appendChild(deletedTasksUl);
  listCounter();
}

let toDoTasksUl = toDoContainer.firstChild;
let inProgressTasksUl = inProgressContainer.firstChild;
let doneTasksUl = doneContainer.firstChild;
let deletedTasksUl = recycleBin.firstChild;

/** event listeners**/

/* tasks */

// double click functionality

// gaining focus function
function gainFocus (e) {
  const { target } = e;
  if (target.tagName === 'LI') {
    target.setAttribute('contenteditable', 'true');
    target.style.backgroundColor = 'rgba(50,50,200,0.5)';
  }
}

// getting out of focus after blur
function saveValueBlur (e) {
  const { target } = e;
  if (target.tagName !== 'LI') {
    return;
  }
  target.setAttribute('contenteditable', 'false');
  target.style.backgroundColor = 'rgba(0,0,0,0)';
  localStorageSave();
  listCounter();
}
//

// hover + alt + 1/2/3 functionality
function checkListAtAlt (eventKey, target, keyNum, ulToInsert) {
  if (eventKey === keyNum) {
    ulToInsert.insertBefore(target, ulToInsert.firstChild);
  }
}
function hoverReplace (e) {
  const { target } = e;
  function innerKeyReplace (ev) {
    if (ev.altKey) {
      checkListAtAlt(ev.key, target, 1, toDoTasksUl);
      checkListAtAlt(ev.key, target, 2, inProgressTasksUl);
      checkListAtAlt(ev.key, target, 3, doneTasksUl);
    }
    // local storage insertion
    localStorageSave();
    listCounter();
  }
  target.addEventListener('mouseleave', () => {
    window.removeEventListener('keydown', innerKeyReplace);
  });
  window.addEventListener('keydown', innerKeyReplace);
}
// add addHoverReplace
function addHoverReplace (e) {
  if (e.target.tagName !== 'LI') {
    return;
  }
  e.target.addEventListener('mouseenter', hoverReplace);
}

// dragItem function
function dragItem (e) {
  e.target.classList.add('dragging');
}

function endDrag (e) {
  e.target.classList.remove('dragging');
  localStorageSave();
  listCounter();
}
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
function listCounter () {
  taskEnumeratorArray.forEach((taskEnumerator) => {
    const taskEnum = taskEnumerator;
    const listofEnumerator = taskEnum.parentElement.lastElementChild.firstElementChild.children;
    const totalTasks = Array.from(listofEnumerator).length;
    taskEnum.textContent = `total: ${totalTasks}`;
  });
}

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
      alert("You haven't entered any text");
    } else {
      innerAddTaskToul(target);
    }
  }
}
taskDiv.addEventListener('click', addTask);

// create Element function
function createElement (tagName, children = [], classes = [], attributes = {}) {
  const newEl = document.createElement(tagName);
  children.forEach((kid) => {
    let child = kid;
    if (typeof (child) === 'string') {
      child = document.createTextNode(child);
    }
    newEl.append(child);
  });
  classes.forEach((cls) => {
    newEl.classList.add(cls);
  });
  Object.entries(attributes).forEach((attr) => {
    newEl.setAttribute(attr[0], attr[1]);
  });
  /*
  for (const attr in attributes) {
    newEl.setAttribute(attr, attributes[attr]);
  }
  */
  return newEl;
}

/* search bar */

// search bar functions
function hideTask (tasksList, value) {
  tasksList.forEach((liPr) => {
    const li = liPr;
    li.hidden = false;
    if (!li.textContent.toLowerCase().includes(value.toLowerCase())) {
      li.hidden = true;
    }
  });
  /*
  for (const li of tasksList) {
    li.hidden = false;
    if (!li.textContent.toLowerCase().includes(value.toLowerCase())) {
      li.hidden = true;
    }
  }
  */
}
function searchTask (e) {
  const { value } = e.target;
  const taskArray = Array.from(document.getElementsByTagName('li'));
  hideTask(taskArray, value);
}
// search bar animations
searchBar.addEventListener('focus', () => {
  const placeholder = document.querySelector('.placeholder');
  const label = document.querySelector('.placeholder-label');
  placeholder.style = 'transform: translateY(-150%); color:blue; font-size:12px';
  label.style = 'border-bottom: solid 3px blue;';
});
searchBar.addEventListener('blur', () => {
  if (searchBar.value === '') {
    const placeholder = document.querySelector('.placeholder');
    const label = document.querySelector('.placeholder-label');
    placeholder.style = 'transform: translateY(0%); color:black; font-size:16px';
    label.style = 'border-bottom: solid 1px black;';
  }
});
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
    deletedTasksUl.appendChild(e.target);
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

/* Api Functions */

// API functions
async function saveApi () {
  loader.classList.add('loader');
  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15', {
    method: 'PUT',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    // body: JSON.stringify({'tasks':{'todo':[], 'in-progress': [], 'done' : []} // resets the API
    body: JSON.stringify({ tasks: { todo: [toDoTasksUl.outerHTML], 'in-progress': [inProgressTasksUl.outerHTML], done: [doneTasksUl.outerHTML] } })
  }).then((response) => { if (response.status > 400) { alert("i'm a teapot"); } });
  loader.classList.remove('loader');
}

// load API function
async function loadApi () {
  loader.classList.add('loader');
  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15').then(response => response.json())
    .then((data) => {
      loader.classList.remove('loader');
      const toDoTasksUlAPI = data.tasks.todo[0];
      const inProgressTasksUlAPI = data.tasks['in-progress'][0];
      const doneTasksUlAPI = data.tasks.done[0];

      function loadTasksFromApi (taskList, sectionPr) {
        const section = sectionPr;
        if (taskList === undefined) {
          section.innerHTML = '';
        } else {
          section.innerHTML = taskList;
        }
      }
      loadTasksFromApi(toDoTasksUlAPI, toDoContainer);
      loadTasksFromApi(inProgressTasksUlAPI, inProgressContainer);
      loadTasksFromApi(doneTasksUlAPI, doneContainer);

      toDoTasksUl = toDoContainer.firstChild;
      inProgressTasksUl = inProgressContainer.firstChild;
      doneTasksUl = doneContainer.firstChild;
      // saving changes to local storage
      localStorageSave();
      listCounter();

      // resetting the individual dargNdrop eventListeners
      Array.from(document.querySelectorAll('.task')).forEach((li) => {
        li.addEventListener('dragstart', dragItem);
        li.addEventListener('dragend', endDrag);
      });
    });
}
// adding the event listeners to the load and save buttons
saveButton.addEventListener('click', saveApi);
loadButton.addEventListener('click', loadApi);
//
