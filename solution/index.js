let Tasks = {
    'todo': [],
    'in-progress': [],
    'done': []
};

// maping the ul names to make genrated code 
const mapper = {
    '1': 'todo',
    '2': 'in-progress',
    '3': 'done'
}

let mouseHover;
let onAlt = false;
// making on keydown and key up global 
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
// defindeing what happning when you hover with mouse and press alt + number 
window.onkeydown = (e) => {
    if (mouseHover && ['1', '2', '3'].includes(e.key) && onAlt) {
        if (mapper[e.key] === 'to-do') {
            mapper[e.key] = 'todo';
        }
        const currentId = `${mapper[e.key]}-${Tasks[mapper[e.key]].length + 1}`; //preparing new id 
        let prevId = mouseHover.id.substr(0, mouseHover.id.lastIndexOf('-')); //getting id 
        prevId = prevId === 'to-do' ? prevId = 'todo' : prevId; //make sure our function unserstands what place we talking about
        Tasks[prevId].splice(Tasks[prevId].indexOf(mouseHover.textContent), 1); //replacing the new text with the old one 
        Tasks[mapper[e.key]].unshift(mouseHover.textContent); //making the new value first 
        localStorage.tasks = JSON.stringify(Tasks); //entring new value to localstorage

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
// localstorage function here is all the mgaic 
const load = () => {
    if (localStorage.tasks) {
        Tasks = JSON.parse(localStorage.tasks);
        // definding todo or to-do 
        Object.keys(Tasks).forEach((categoryKey) => {
            const updatedCategory = categoryKey === 'todo' ?
                'to-do-tasks' : `${categoryKey}-tasks`;
            const updatedId = categoryKey === 'todo' ?
                'to-do' : categoryKey;
            // setting attributes and events on ul and li 
            Tasks[categoryKey].forEach((currTask, i) => {
                const ul = document.getElementById(updatedCategory);
                const li = document.createElement('li');
                li.setAttribute('id', `${updatedId}-${i + 1}`);
                li.setAttribute('draggable', 'true');
                li.setAttribute('ondragstart', 'drag(event)');
                // li.setAttribute('ondragover', 'allowDrop(event)');
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
// double click function here 
const dblClickFunction = (currTaskId) => {
    document.getElementById(currTaskId).setAttribute('contenteditable', true);
    document.getElementById(currTaskId).focus();
}
// blure function here 
const blurFunction = (currTaskId) => {
    const idForUse = currTaskId.substr(0, currTaskId.lastIndexOf('-')) === 'to-do' ?
        'todo' : currTaskId.substr(0, currTaskId.lastIndexOf('-'))

    const foundId = parseInt(currTaskId.substr(currTaskId.lastIndexOf('-') + 1)) - 1;

    Tasks[idForUse][foundId] = document.getElementById(currTaskId).textContent;
    localStorage.tasks = JSON.stringify(Tasks);


    document.getElementById(currTaskId).setAttribute('contenteditable', false);
}
// add to task element function 
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
    const remover = document.createElement('span');

    idToAdd === 'to-do' ?
        Tasks['todo'].unshift(currValue) :
        Tasks[idToAdd].unshift(currValue);
    localStorage.tasks = JSON.stringify(Tasks);

    // making a unique id 
    const currTaskId = `${idToAdd}-${Tasks[idToAdd === 'to-do' ? 'todo' : idToAdd].length}`;

    Li.setAttribute('id', currTaskId);
    Li.setAttribute('class', 'task');
    Li.setAttribute('draggable', 'true');
    Li.setAttribute('ondragstart', 'drag(event)');

    remover.setAttribute('class', 'removeLi');
    remover.setAttribute('onclick', 'removeLi()');
    remover.setAttribute('style', 'position:absolue !important;right:450px !important;');

    // Li.setAttribute('ondragover', 'allowDrop(event)');


    const ul = document.getElementById(`${idToAdd}-tasks`);

    Li.textContent = currValue;

    ul.insertBefore(Li, ul.firstChild);
    ul.insertBefore(remover, ul.firstChild);


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
// search function 
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
// drag and drop 
const allowDrop = (ev) => {
    ev.preventDefault();
}
const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

const drop = (ev) => {
    ev.preventDefault();
    let ul = ev.path[0];
    let findClass = ul.getAttribute('class').substr(0, ul.getAttribute('class').lastIndexOf('-'));
    var data = ev.dataTransfer.getData("text");
    findClass = findClass === 'to-do' ? 'todo' : findClass;
    ul.insertBefore(document.getElementById(data), ul.firstChild);
    let lastPlaceID = document.getElementById(data).getAttribute('id')
    Tasks[findClass].unshift(document.getElementById(data).innerHTML); //pushing to Tasks
    let getOldplace = lastPlaceID.slice(0, -2);
    getOldplace = getOldplace === 'to-do' ? 'todo' : getOldplace;
    Tasks[getOldplace].splice(document.getElementById(lastPlaceID).innerHTML, 1); // removing from old place
    localStorage.tasks = JSON.stringify(Tasks);
}

// Localstorage function 
load();