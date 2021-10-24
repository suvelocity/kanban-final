import { searchBar } from './global variables for index';
/* search bar */

// search bar functions
export function hideTask (tasksList, value) {
  tasksList.forEach((liPr) => {
    const li = liPr;
    li.hidden = false;
    if (!li.textContent.toLowerCase().includes(value.toLowerCase())) {
      li.hidden = true;
    }
  });
}

export function searchTask (e) {
  const { value } = e.target;
  const taskArray = Array.from(document.getElementsByTagName('li'));
  hideTask(taskArray, value);
}

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
