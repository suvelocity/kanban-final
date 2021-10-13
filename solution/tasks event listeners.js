import { localStorageSave } from './localStorage';
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
