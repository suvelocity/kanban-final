let Tasks = {
    'todo': [],
    'in-progress': [],
    'done': []
};
const mapper = {
    '1': 'todo',
    '2': 'in-progress',
    '3': 'done'
}

const load = () => {
    if (localStorage.tasks) {
        Tasks = JSON.parse(localStorage.tasks);
        // definding todo or to-do 
        Object.keys(Tasks).forEach((categoryKey) => {
            const updatedCategory = categoryKey === 'todo' ?
                'to-do-tasks' : `${categoryKey}-tasks`;
            const updatedId = categoryKey === 'todo' ?
                'to-do' : categoryKey;

            Tasks[categoryKey].forEach((currTask, i) => {
                const ul = document.getElementById(updatedCategory);
                const li = document.createElement('li');
                li.setAttribute('id', `${updatedId}-${i + 1}`);
                li.setAttribute('draggable', 'true');
                li.setAttribute('ondragstart', 'drag(event)');
                li.setAttribute('class', 'task');
                li.textContent = currTask;

                ul.appendChild(li);

                // double click
                li.addEventListener('dblclick', () => dblClickFunction(`${updatedId}-${i + 1}`));
                ///when blur
                li.addEventListener('blur', () =>  blurFunction(`${updatedId}-${i + 1}`));
            });
        });
    } else {
        localStorage.tasks = JSON.stringify(Tasks);
    }
}

const dblClickFunction = (currTaskId) => {
    document.getElementById(currTaskId).setAttribute('contenteditable', true);
    document.getElementById(currTaskId).focus();
}

const blurFunction = (currTaskId) => {
    const idForUse = currTaskId.substr(0, currTaskId.lastIndexOf('-')) === 'to-do' ?
        'todo' : currTaskId.substr(0, currTaskId.lastIndexOf('-'))

        const foundId = parseInt(currTaskId.substr(currTaskId.lastIndexOf('-') + 1));
        Tasks[idForUse][foundId] = document.getElementById(currTaskId).textContent;
        let remove = foundId-1;
        Tasks[idForUse].splice(Tasks[idForUse][remove],1,Tasks[idForUse][foundId]);
        localStorage.tasks = JSON.stringify(Tasks);
    

    document.getElementById(currTaskId).setAttribute('contenteditable', false);
    // document.getElementById(currTaskId + '-input').style.display = 'none';
}


const add = (idToAdd) => {
    let currValue = document.getElementById(`add-${idToAdd}-task`).value;

    // if input dont have value
    if (currValue === "") {
        return alert("Please enter a value");
    }

    // Reset the input after adding the task
    document.getElementById(`add-${idToAdd}-task`).value = '';

    // creating li and input elments
    const Li = document.createElement("li");
    // const inputLi = document.createElement('input');

    idToAdd === 'to-do' ?
        Tasks['todo'].push(currValue) :
        Tasks[idToAdd].push(currValue);
    localStorage.tasks = JSON.stringify(Tasks);

    // making a unique id 
    const currTaskId = `${idToAdd}-${Tasks[idToAdd === 'to-do' ? 'todo' : idToAdd].length}`;

    Li.setAttribute('id', currTaskId);
    Li.setAttribute('class', 'task');
    // inputLi.setAttribute('id', `${currTaskId}-input`);
    Li.setAttribute('draggable', 'true');
    Li.setAttribute('ondragstart', 'drag(event)');

    const ul = document.getElementById(`${idToAdd}-tasks`);

    Li.textContent = currValue;
    // inputLi.value = currValue;
    // inputLi.style.display = 'none';

    ul.appendChild(Li);
    // ul.appendChild(inputLi);

    Li.addEventListener('dblclick', () => dblClickFunction(currTaskId));

    ///when blur
    Li.addEventListener('blur', () => blurFunction(currTaskId));

    // makes values go from done to todo if you mouseOver + press "ALT" + 1,2,3
    let mouseHover = false;
    let onAlt = false;

    Li.addEventListener("mouseover", () => {
        mouseHover = true;
    });
    Li.addEventListener("mouseleave", () => {
        mouseHover = false;
    });

    document.onkeydown = (e) => {
        if (e.key === 'Alt') {
            onAlt = true;
        }
    }
    document.onkeyup = (e) => {
        if (e.key === 'Alt') {
            onAlt = false;
        }
    }

    window.onkeydown = (e) => {
        if (mouseHover && ['1', '2', '3'].includes(e.key) && onAlt) {
            if (mapper[e.key] === 'to-do') {
                mapper[e.key] = 'todo';
            }
            const currentId = `${mapper[e.key]}-${Tasks[mapper[e.key]].length + 1}`;
            console.log(Tasks[idToAdd]);
            Tasks[idToAdd].splice(Tasks[idToAdd].indexOf(Li.textContent), 1);
            Tasks[mapper[e.key]].push(Li.textContent);

            Li.setAttribute('id', currentId);
            // inputLi.setAttribute("id", `${currentId}-input`);
            console.log(document.getElementById(`${mapper[e.key]}-tasks`));
            if (mapper[e.key] === 'todo') {
                mapper[e.key] = 'to-do';
            }
            document.getElementById(`${mapper[e.key]}-tasks`).append(Li);
            // document.getElementById(`${mapper[e.key]}-tasks`).append(inputLi);

            Li.removeEventListener('dblclick', () => dblClickFunction(currentId));
            Li.addEventListener('dblclick', () => dblClickFunction(currentId));
        }
    }
}
const search = () => {
    let input = document.getElementById('search');
    let filtered = input.value;

    Array.from(document.getElementsByTagName('li')).forEach(currElement => {
        if (currElement.textContent.match(filtered)) {
            currElement.style.display = 'list-item';
        } else {
            currElement.style.display = 'none';
        }
    });
}
const allowDrop = (ev) => {
    ev.preventDefault();
}
const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
// Localstorage function 
load();