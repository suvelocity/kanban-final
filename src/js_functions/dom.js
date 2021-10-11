// ////////////////// dom
function addLiGeneric(event) {
    // A generic function to generate and add new tasks to the localStorage and then updates the dom (li's).
    const section = event.target.closest('section');
    const inputToDo = section.querySelector('.add-input').value;
    const ulToAdd = section.querySelector('.anyUL');
    if (inputToDo.length < 1) {
      alert('Cant assign an empty task ☹');
    } else {
      const li = document.createElement('li'); // defining the new task and adding events and attr to it
      li.addEventListener('dblclick', editTask);
      li.addEventListener('blur', addChangedTask);
      li.textContent = inputToDo;
      li.classList.add('task');
      li.setAttribute('draggable', 'true');
  
      newTaskData(event.target, inputToDo);
      localStorageData();
      ulToAdd.prepend(li); // enters the li we entered to the top of the ul coloumn.
    }
    section.querySelector('.add-input').value = '';
  }
  function newTaskData(target, task) {
    // helping function to addLiGeneric that decide which ul adds the task
    if (target.id === 'submit-add-to-do') {
      tasks.todo.unshift(task);
    }
    if (target.id === 'submit-add-in-progress') {
      tasks['in-progress'].unshift(task);
    }
    if (target.id === 'submit-add-done') {
      tasks.done.unshift(task);
    }
  }
  function generateListItems(text, eventListeners = {}) {
    // helping function i use alot to generate new list items
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'task');
    listItem.setAttribute('draggable', 'true');
    listItem.ondragstart = dragStart;
    listItem.append(text);
  
    const events = Object.keys(eventListeners);
    for (let i = 0; i < events.length; i++) {
      listItem.addEventListener(events[i], eventListeners[events[i]]);
    }
    return listItem;
  }
  