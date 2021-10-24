import {
  toDoTasksUl, inProgressTasksUl, doneTasksUl, localStorageSave
} from './localStorage';
import {
  toDoContainer, inProgressContainer, doneContainer, loader
} from './global variables for index';
import listCounter from './list counter for index';
import { dragItem, endDrag } from './tasks event listeners';
/* Api Functions */

// API functions
export async function saveApi () {
  loader.classList.add('loader');
  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15', {
    method: 'PUT',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    // body: JSON.stringify({'tasks':{'todo':[], 'in-progress': [], 'done' : []} // resets the API
    body: JSON.stringify({ tasks: { todo: [toDoTasksUl[0].outerHTML], 'in-progress': [inProgressTasksUl[0].outerHTML], done: [doneTasksUl[0].outerHTML] } })
  // eslint-disable-next-line no-alert
  }).then((response) => { if (response.status > 400) { alert("i'm a teapot"); } });
  loader.classList.remove('loader');
}

// load API function
export async function loadApi () {
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

      toDoTasksUl[0] = toDoContainer.firstChild;
      inProgressTasksUl[0] = inProgressContainer.firstChild;
      doneTasksUl[0] = doneContainer.firstChild;
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
