// ///////////directives

//  function that filters the li according to the value of the search input
function filterFunc(filter, li) {
    for (let i = 0; i < li.length; i++) {
      const name = li[i].innerHTML;
      if (name.toUpperCase().includes(filter)) {
        li[i].style.display = 'list-item';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
  
  function searchFilter() {
    const filter = input.value.toUpperCase();
    const li = document.getElementsByTagName('li');
    filterFunc(filter, li);
  }
  
  // two functions below deal with dblclick event
  function editTask(event) {
    // function that change the value of the specific index in localStorage , and make the task Editable.
    const oldTask = event.target;
    oldTaskText = oldTask.textContent;
    const localSavedTasks = tasks[oldTask.closest('ul').id];
    editStyleAndSet(oldTask, localSavedTasks);
  }
  function editStyleAndSet(oldTask, localSavedTasks) {
    oldTask.contentEditable = 'true';
    oldTask.style.color = 'red';
    localSavedTasks[localSavedTasks.indexOf(oldTaskText)] = 'edit';
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function addChangedTask(event) {
    // function that adds the new changed task to the localStorage
    const newTask = event.target;
    const localSavedTasks = tasks[newTask.closest('ul').id];
    changeEditedTask(newTask, localSavedTasks);
  }
  function changeEditedTask(newTask, localSavedTasks) {
    newTask.contentEditable = 'false';
    newTask.style.color = 'black';
    editTaskOptions(newTask, localSavedTasks);
  }
  function editTaskOptions(newTask, localSavedTasks) {
    if (newTask.textContent.length > 1) {
      // if its not en empty str we replace the old task in local storage with edited one
      localSavedTasks[localSavedTasks.indexOf('edit')] = newTask.textContent;
    } else {
      // if the edited string is empty we define it to be the way it was before the change
      localSavedTasks[localSavedTasks.indexOf('edit')] = oldTaskText;
      newTask.textContent = oldTaskText;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function altkeyPreesed(event) {
    // if the key that is pressed is alt the global var altpreesed changes to true
    if (event.keyCode === 18) {
      altpressed = true;
    }
  }
  function moveTaskUl(event) {
    // when the altkey is no longer pressed the value returns to false
    altpressed = false;
  }
  function taskChangeUl(event) {
    // function that calls the changeUl func with the needed arguement
    if (altpressed && event.key === '1') {
      changeUL('todo');
    }
    if (altpressed && event.key === '2') {
      changeUL('in-progress');
    }
    if (altpressed && event.key === '3') {
      changeUL('done');
    }
  }
  function changeUL(newUlId) {
    // function that delets the task from the old ul and generate a duplicate in the new ul.
    const newUl = document.getElementById(newUlId);
    passedUlId = hoverdElement.closest('ul').id;
    if (hoverdElement === null) {
      alert('hoverd element is not defined');
    } else {
      const newLi = generateListItems(hoverdElement.textContent, {
        dblclick: editTask,
        blur: addChangedTask,
        mouseover: mouseoverFunc,
        mouseout,
      });
      newLi.setAttribute('draggable', 'true');
      newLi.textContent = hoverdElement.textContent;
      newUl.prepend(newLi);
      hoverdElement.remove();
      changeULLocalStorage(newUlId);
    }
  }
  function changeULLocalStorage(newUlId) {
    // function that delets the task from the old localStorage array and generate a duplicate in the new localStorage array.
    const liContent = hoverdElement.textContent;
    const oldUl = document.getElementById(passedUlId);
  
    if (oldUl.id === 'todo') {
      const toAdd = liContent;
      const index = tasks.todo.indexOf(liContent);
      tasks.todo.splice(index, 1);
      tasks[newUlId].unshift(toAdd);
      localStorageData();
    }
    if (oldUl.id === 'in-progress') {
      const toAdd = liContent;
      const index = tasks['in-progress'].indexOf(liContent);
      tasks['in-progress'].splice(index, 1);
      tasks[newUlId].unshift(toAdd);
      localStorageData();
    }
    if (oldUl.id === 'done') {
      const toAdd = liContent;
      const index = tasks.done.indexOf(liContent);
      tasks.done.splice(index, 1);
      tasks[newUlId].unshift(toAdd);
      localStorageData();
    }
  }
  function mouseoverFunc(event) {
    // definig what is the hoverdElement global var.
    hoverdElement = event.target;
  }
  function mouseout(event) {
    // returns hoverdElement value to null when the mouse leaves the task.
    if ((event.target.className = 'task')) {
      hoverdElement = null;
    }
  }
  