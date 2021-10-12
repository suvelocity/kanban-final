import {
  toDoContainer, inProgressContainer, doneContainer, recycleBin
} from './global variables for index';
import listCounter from './list counter for index';
import createElement from './create element function';
/* local storage  */
// initilizes the local storage object
export function loadLocalStorageAtBeginning () {
  if (!localStorage.tasks || localStorage.tasks.length === 0) {
    localStorage.setItem('tasks', JSON.stringify({
      todo: [],
      'in-progress': [],
      done: [],
      deleted: []
    }));
  }
}
// object for saving to local storage
export const localStorageObjectForUpdate = JSON.parse(localStorage.tasks);
// local storage clear button lisener
export function deleteAll (e) {
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
export default deleteAll;

// localstorage loading after refresh
export function appendToContainer (containerPr, ul) {
  const container = containerPr;
  if (localStorageObjectForUpdate[ul][0] == null) {
    container.innerHTML = '';
  } else {
    const currentUl = localStorageObjectForUpdate[ul][0];
    container.innerHTML = currentUl;
  }
}
// inner local storage save
export function innerLocalStorageSave (listName, ul) {
  localStorageObjectForUpdate[listName][0] = ul.outerHTML;
}

// localstorage loading after refresh

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
