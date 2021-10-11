// ////////////////////// storage
if (localSave != undefined) {
    // if localSave is not undefine , tasks equals local storage object
    tasks = JSON.parse(localSave);
    publishExistingLi();
  } else {
    // defining the local storage if empty.
    tasks = {
      todo: [],
      'in-progress': [],
      done: [],
    };
  }
  function localStorageData() {
    // updates the local storage
    localSave = JSON.stringify(tasks);
    localStorage.setItem('tasks', localSave);
  }
  
  function publishExistingLi() {
    // function that updates the dom with all the tasks the localStorage has
    for (let i = 0; i < tasks.todo.length; i++) {
      const existTask = generateListItems(tasks.todo[i], {
        dblclick: editTask,
        blur: addChangedTask,
        mouseover: mouseoverFunc,
        mouseout,
      });
      
      const todoSectionUl = document.getElementById('todo');
      existTask.setAttribute('draggable', 'true');
      existTask.ondragstart = dragStart;
      todoSectionUl.append(existTask);
    }
    for (let i = 0; i < tasks['in-progress'].length; i++) {
      const existTask = generateListItems(tasks['in-progress'][i], {
        dblclick: editTask,
        blur: addChangedTask,
        mouseover: mouseoverFunc,
        mouseout,
      });
      
      const inProgSectionUl = document.getElementById('in-progress');
      existTask.setAttribute('draggable', 'true');
      existTask.ondragstart = dragStart;
      inProgSectionUl.append(existTask);
    }
    for (let i = 0; i < tasks.done.length; i++) {
      const existTask = generateListItems(tasks.done[i], {
        dblclick: editTask,
        blur: addChangedTask,
        mouseover: mouseoverFunc,
        mouseout,
      });
      
      const doneSectionUl = document.getElementById('done');
      existTask.setAttribute('draggable', 'true');
      existTask.ondragstart = dragStart;
      doneSectionUl.append(existTask);
    }
  }