// ////////////// network

// load button
const loadButton = document.getElementById('load-btn'); // load button functions update the data in dom and localStorage according to the api
loadButton.onclick = async function loadApi() {
  const rightDiv = document.getElementById('rightDiv');
  const loader1 = document.createElement('div');
  loader1.classList.add('loader');
  rightDiv.append(loader1);

  const response = await fetch(
    'https://json-bins.herokuapp.com/bin/614aeca14021ac0e6c080c6d',
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    const lastTasks = data.tasks;
    document.getElementById('todo').textContent = '';
    document.getElementById('in-progress').textContent = '';
    document.getElementById('done').textContent = '';

    localSave = JSON.parse(JSON.stringify(lastTasks));

    for (const key in localSave) {
      for (const task of localSave[key]) {
        const li = generateListItems([task], {
          dragstart: dragStart,
          dblclick: editTask,
          blur: addChangedTask,
          mouseover: mouseoverFunc,
          mouseout,
        });
        li.setAttribute('draggable', 'true');
        li.ondragstart = dragStart;
        document.getElementById(key).append(li);
      }
    }
    localStorage.setItem('tasks', JSON.stringify(localSave));
    tasks = lastTasks;
    loader1.remove();
  } else {
    alert('Error : something went wrong ☹');
  }
};
//  save button
const saveButton = document.getElementById('save-btn'); // update the data in the api according to the data in the localStorage.
saveButton.onclick = async function () {
  if (localSave !== null) {
    tasks = JSON.parse(localSave);
  } else {
    tasks = JSON.parse('{"todo":[],"in-progress":[],"done":[]}');
  }
  const rightDiv = document.getElementById('rightDiv');
  const loader1 = document.createElement('div');
  loader1.classList.add('loader');
  rightDiv.append(loader1);
  request('PUT', JSON.stringify({ tasks }), loader1);
  //  const response = await fetch("https://json-bins.herokuapp.com/bin/614aeca14021ac0e6c080c6d" ,{
  //     method:"PUT",
  //     mode:"cors",
  //         headers:{
  //             "Content-Type": "application/json"
  //         },
  //         body:JSON.stringify({tasks}),
  //  },)
  async function endOfRequest(response, loader1) {}
  async function request(method, body, loader1) {
    const response = await fetch(
      'https://json-bins.herokuapp.com/bin/614aeca14021ac0e6c080c6d',
      {
        method,
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }
    );
    if (response.ok) {
      const data = await response.json();
      const lastTasks = JSON.stringify(data.tasks);
      localStorage.setItem('tasks', lastTasks);
    } else {
      alert('Error : something went wrong ☹');
    }
    loader1.remove();
  }
};
