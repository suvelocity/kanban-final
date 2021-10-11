// Dnd

function dragStart(event) {
    // function that handles the dragstart event
    draggedItem = event.target;
    event.target.style.opacity = '1';
    const oldUl = event.target.closest('ul');
    passedUlId = oldUl.id;
  }
  
  function allowDrop(event) {
    // prevents default behavior
    event.preventDefault();
  }
  function drop(event) {
    // function that deletes the task from the oldul and generate a clone in the newul, same principal in the localStorge data.
    draggedItemContent = draggedItem.textContent;
    const newUL = event.target.closest('ul');
    const li = generateListItems(draggedItemContent, {
      dragstart: dragStart,
      dblclick: editTask,
      blur: addChangedTask,
      mouseover: mouseoverFunc,
      mouseout,
    });
    li.setAttribute('draggable', 'true');
    newUL.prepend(li);
    draggedItem.remove();
    dropLocalStorageChange(draggedItemContent, newUL);
  }
  function dropLocalStorageChange(draggedItemContent, newUL) {
    const index = tasks[passedUlId].indexOf(draggedItemContent);
    tasks[passedUlId].splice(index, 1);
    tasks[newUL.id].unshift(draggedItemContent);
    localStorageData();
  }
  