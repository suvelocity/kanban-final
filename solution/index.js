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

let mouseHover;
let onAlt = false;

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
        let prevId = mouseHover.id.substr(0, mouseHover.id.lastIndexOf('-'));
        prevId = prevId === 'to-do' ? prevId = 'todo' : prevId;
        Tasks[prevId].splice(Tasks[prevId].indexOf(mouseHover.textContent), 1);
        Tasks[mapper[e.key]].unshift(mouseHover.textContent);
        localStorage.tasks = JSON.stringify(Tasks);

        mouseHover.setAttribute('id', currentId);

        if (mapper[e.key] === 'todo') {
            mapper[e.key] = 'to-do';
        }

        document.getElementById(`${mapper[e.key]}-tasks`).insertBefore(mouseHover, document.getElementById(`${mapper[e.key]}-tasks`).firstChild);

        mouseHover.removeEventListener('dblclick', () => dblClickFunction(currentId));
        mouseHover.addEventListener('dblclick', () => dblClickFunction(currentId));

        mouseHover.removeEventListener('blur', () => blurFunction(currentId));
        mouseHover.addEventListener('blur', () => blurFunction(currentId));

    
    }
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
                li.addEventListener('blur', () => blurFunction(`${updatedId}-${i + 1}`));

                li.addEventListener("mouseover", () => {
                    mouseHover = li;
                });
                li.addEventListener("mouseleave", () => {
                    mouseHover = undefined;
                });
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

    const foundId = parseInt(currTaskId.substr(currTaskId.lastIndexOf('-') + 1)) - 1;

    Tasks[idForUse][foundId] = document.getElementById(currTaskId).textContent;
    localStorage.tasks = JSON.stringify(Tasks);


    document.getElementById(currTaskId).setAttribute('contenteditable', false);
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
        Tasks['todo'].unshift(currValue) :
        Tasks[idToAdd].unshift(currValue);
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

    ul.insertBefore(Li, ul.firstChild);
    // ul.appendChild(inputLi);

    Li.addEventListener('dblclick', () => dblClickFunction(currTaskId));

    ///when blur
    Li.addEventListener('blur', () => blurFunction(currTaskId));

    // makes values go from done to todo if you mouseOver + press "ALT" + 1,2,3

    Li.addEventListener("mouseover", () => {
        mouseHover = Li;
    });
    Li.addEventListener("mouseleave", () => {
        mouseHover = undefined;
    });
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
    ev.target.prepend(document.getElementById(data));
}
// Localstorage function 
load();