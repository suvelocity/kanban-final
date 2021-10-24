import {
  localStorageSave, toDoTasksUl, inProgressTasksUl, doneTasksUl
} from './localStorage';
import listCounter from './list counter for index';

// gaining focus function
export function gainFocus (e) {
  const { target } = e;
  if (target.tagName === 'LI') {
    target.setAttribute('contenteditable', 'true');
    target.style.backgroundColor = 'rgba(50,50,200,0.5)';
  }
}

// dragItem function
export function dragItem (e) {
  e.target.classList.add('dragging');
}

export function checkListAtAlt (eventKey, target, keyNum, ulToInsert) {
  if (eventKey.toString() === keyNum.toString()) {
    ulToInsert.insertBefore(target, ulToInsert.firstChild);
  }
}

export function endDrag (e) {
  e.target.classList.remove('dragging');
  localStorageSave();
  listCounter();
}

export function saveValueBlur (e) {
  const { target } = e;
  if (target.tagName !== 'LI') {
    return;
  }
  target.setAttribute('contenteditable', 'false');
  target.style.backgroundColor = 'rgba(0,0,0,0)';
  localStorageSave();
  listCounter();
}

function hoverReplace (e) {
  const { target } = e;
  function innerKeyReplace (ev) {
    if (ev.altKey) {
      checkListAtAlt(ev.key, target, 1, toDoTasksUl[0]);
      checkListAtAlt(ev.key, target, 2, inProgressTasksUl[0]);
      checkListAtAlt(ev.key, target, 3, doneTasksUl[0]);
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

export function addHoverReplace (e) {
  if (e.target.tagName !== 'LI') {
    return;
  }
  e.target.addEventListener('mouseenter', hoverReplace);
}
