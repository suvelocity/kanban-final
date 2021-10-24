import { taskEnumeratorArray } from './global variables for index';
// total list item counter function
export default function listCounter () {
  taskEnumeratorArray.forEach((taskEnumerator) => {
    const taskEnum = taskEnumerator;
    const listofEnumerator = taskEnum.parentElement.lastElementChild.firstElementChild.children;
    const totalTasks = Array.from(listofEnumerator).length;
    taskEnum.textContent = `total: ${totalTasks}`;
  });
}
