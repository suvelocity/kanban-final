createPage();
let liTarget = undefined;
let sectionid =undefined;
let prevSection =undefined;
document.addEventListener('keyup',hundlekeyUp); 
//checks if local storage has tasks
if(localStorage.getItem('tasks')=== null){
window.localStorage.setItem('tasks', JSON.stringify({
    "todo": [],
    "in-progress": [],
    "done": []
}));}
//initialize dom by local storage
tasks=JSON.parse(localStorage.getItem("tasks"));
    for (let section in tasks) {
        tasks[section].forEach(text => {
            let task=document.createElement("li")
            task.setAttribute("class",'task');
            addDnDHandlers(task);
            task.addEventListener('mouseenter',(event) =>{
                liTarget = event.target;
                prevSection = event.target.parentElement.parentElement;
            });
            task.addEventListener('click',(event) => {
                task.contentEditable = true;
            });
            task.addEventListener('blur',(event) => {
                task.contentEditable = false;

                
                tasksSections = JSON.parse(window.localStorage.getItem('tasks'));
                section = task.parentElement.parentElement;
                secUl= event.target.parentElement;
                secLi = event.target;
                liArr = secUl.children;
                liContentList = [];
                for (let i = 0; i < liArr.length; i++) {
                    const temp = liArr[i];
                    liContentList.push(temp.textContent);
                }
                tasksSections[section.id] = liContentList;
                window.localStorage.setItem('tasks', JSON.stringify(tasksSections));
            });
            task.textContent=text;
            document.getElementById(section).querySelectorAll('ul')[0].append(task);
        });
    }
//function that filter a li element
function search(event){
    let Sections = document.querySelectorAll('section');
    let liArr = [];
    for (let i = 0; i < Sections.length; i++) {
        const section = Sections[i];
        liArr.push(document.getElementById(section.id).querySelectorAll('ul')[0].querySelectorAll('li'));
    }
    liArr.forEach(section => {
        for (let i = 0; i < section.length; i++) {
            const li = section[i];
            li.style.display = 'none';
            if(li.textContent.includes(event.target.value)){
                li.style.display = '';
            }
        }
    });
} // function that build the structure of the site
function createPage(){
    createToDoTask();
    createInProgressTask();
    createDoneTask();
    let obj = JSON.parse(window.localStorage.getItem('tasks'));
    let sectionArr = document.querySelectorAll('section');
    let sectionIdArr = [];
    sectionArr.forEach(section => {
        sectionIdArr.push(section.id)  
    });
    
}//function that build the first section
function createToDoTask(){
    let main = document.createElement("section");
    main.id = "todo";
    const children = [{
        type:'h1',
        title:'ToDo'
    },{
        type:'input',
        id:'input-ToDoTasks',
        class:'add-to-do-task',
        id:'add-to-do-task'   
    },{
        type:"button",
        text:'submit',
        class:"submit-add-to-do",
        id:`submit-add-to-do`

    },{
        type:'ul',
        class:'to-do-tasks',
    }]
    children.forEach(child => {                                 
        t = document.createElement(child.type);
        if(child.type=="h1"){
            t.textContent=child.title;
            main.appendChild(t);}

        if  (child.type=="input"){
            t.setAttribute("class", child.class);
            t.id=child.id;
            main.appendChild(t);}

        if  (child.type=="button"){
            t.setAttribute("class", child.class);
            t.textContent=child.text;
            t.id=child.id;
            t.setAttribute('class' , "btn btn-primary btn-sm");
            t.addEventListener('click',ButtonClick);
            main.appendChild(t);}

        if  (child.type=="ul"){
            t.setAttribute("class", child.class);
            main.appendChild(t);} 
        })
    document.getElementById('allSection').appendChild(main);
}
// function that build the second section
function createInProgressTask(){
            let main = document.createElement("section");
            main.id = "in-progress";
            const children = [{
                type:'h1',
                title:'InProgressTask'
            },{
                type:'input',
                id:'add-in-progress-task',
                class:'add-in-progress-tasks'
            },{
                type:"button",
                text:'submit',
                class:"submit-add-in-progress",
                id:`submit-add-in-progress`
            },{
                type:'ul',
                id:'in-progress-tasks',
                class:'in-progress-tasks'
            }]
            children.forEach(child => {                                 
                t = document.createElement(child.type);
                if  (child.type=="ul"){
                    t.id=child.id;
                    t.setAttribute("class", child.class);
                    main.appendChild(t);}

                if(child.type=="h1"){
                    t.textContent=child.title;
                    main.appendChild(t);}
                        
                if  (child.type=="input"){
                    t.setAttribute("class", child.class);
                    t.id=child.id;
                    main.appendChild(t);}
        
                if  (child.type=="button"){
                    t.setAttribute("class", child.class);
                    t.textContent=child.text;
                    t.id=child.id;
                    t.setAttribute('class' , "btn btn-primary btn-sm");
                    t.addEventListener('click',ButtonClick);
                    main.appendChild(t);}
                })
                document.getElementById('allSection').appendChild(main);

;}
//function that build the third section
function createDoneTask(){
    let main = document.createElement("section");
    main.id = "done";
    const children = [{
       
        type:'h1',
        title:'DoneTask'
    },{
        type:'input',
        id:'add-done-task',
        class:'add-done-tasks'
    },{
        type:"button",
        text:'submit',
        class:"submit-add-done",
        id:`submit-add-done`
    },{
        type:'ul',
        class:'done-tasks',
        id:'done-tasks'
       
    }]
    children.forEach(child => {                                 
        t = document.createElement(child.type);
        if  (child.type=="ul"){
            t.setAttribute("class", child.class);
            t.id=child.id;
            main.appendChild(t);}

        if(child.type=="h1"){
            t.textContent=child.title;
            main.appendChild(t);}

        if  (child.type=="input"){
            t.setAttribute("class", child.class);
            t.id=child.id;
            main.appendChild(t);}

        if  (child.type=="button"){
            t.setAttribute("class", child.class);
            t.textContent=child.text;
            t.id=child.id;
            t.setAttribute('class' , "btn btn-primary btn-sm");
            t.addEventListener('click',ButtonClick);
            main.appendChild(t);}
        })
        document.getElementById('allSection').appendChild(main);
        console.log(document.getElementById('allSection'));

;}
//drag and drop
let dragSrcEl = null;
//^
function handleDragStart(e) {
  // Target (this) element is the source node.
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

  this.classList.add('dragElem');
}
//^
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Allows us to drop.
  }
  this.classList.add('over');

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}
//^
function handleDragEnter(e) {
     //console.log('handleDragEnter');
        e.preventDefault();

  // this / e.target is the current hover target.
}
//^
function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}
//^
function handleDrop(e) {
  // this/e.target is current target element.
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    //alert(this.outerHTML);
    //dragSrcEl.innerHTML = this.innerHTML;
    //this.innerHTML = e.dataTransfer.getData('text/html');
    dragSrcEl.parentNode.removeChild(dragSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    sections = document.querySelectorAll('section');
    tasks = {};
    sections.forEach(section => {
        allLi = document.getElementById(section.id).querySelectorAll('ul')[0].querySelectorAll('li');
        tasks[section.id] = [];
        allLi.forEach(li => {
            tasks[section.id].push(li.textContent);
        });
    });
    console.log(tasks);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  this.classList.remove('over');
  return false;
}
//^
function handleDragEnd(e) {
  // this/e.target is the source node.
  this.classList.remove('over');

  /*[].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });*/
}
//^
function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}
//add li element to the section
function ButtonClick(event){
    
    let sectionid = event.target.parentElement.id;
    let input = document.getElementById(sectionid).querySelectorAll('input')[0];
    let ul = document.getElementById(sectionid).querySelectorAll('ul')[0];
    let li = document.createElement('li');
    li.setAttribute("class",'task');
    addDnDHandlers(li);
    li.addEventListener('mouseenter',(event) =>{
        liTarget = event.target;
        prevSection = liTarget.parentElement.parentElement;
    });
    li.addEventListener('click',(event) => {
        li.contentEditable = true;

    });
    li.addEventListener('blur',(event) => {
        li.contentEditable = false;

        tasksSections = JSON.parse(window.localStorage.getItem('tasks'));
        section = event.target.parentElement.parentElement;
        ulChanged = event.target.parentElement;
        liChanged = event.target;
        liList = ulChanged.children;
        console.log(liList);
        liContentList = [];
        for (let i = 0; i < liList.length; i++) {
            const temp = liList[i];
            liContentList.push(temp.textContent);
        }
        console.log(liContentList)
        tasksSections[section.id] = liContentList;
        window.localStorage.setItem('tasks', JSON.stringify(tasksSections));
    });
    li.textContent = input.value;
    if(input.value=="")
    alert('Error');
    else{
    ul.appendChild(li);}
    let obj = JSON.parse(window.localStorage.getItem('tasks'));
    obj[sectionid].unshift(li.textContent);
    window.localStorage.setItem('tasks', JSON.stringify(obj));   
}
//moves li element between sections using alt +1/2/3
function hundlekeyUp(event){
    if(event.key == '¡' && liTarget != undefined){
        document.getElementById("todo").querySelectorAll('ul')[0].appendChild(liTarget);
        let obj = JSON.parse(window.localStorage.getItem('tasks'));
        obj["todo"].unshift(liTarget.textContent);
        window.localStorage.setItem('tasks', JSON.stringify(obj));
        let index = obj[prevSection.id].indexOf(liTarget.textContent);
        obj[prevSection.id].splice(index, 1);
        window.localStorage.setItem('tasks', JSON.stringify(obj));
        liTarget = undefined;
    }    
    if(event.key=="™" && liTarget != undefined){
        document.getElementById("in-progress").querySelectorAll('ul')[0].appendChild(liTarget);
        let obj = JSON.parse(window.localStorage.getItem('tasks'));
        obj["in-progress"].unshift(liTarget.textContent);
        window.localStorage.setItem('tasks', JSON.stringify(obj));
        let index = obj[prevSection.id].indexOf(liTarget.textContent);
        obj[prevSection.id].splice(index, 1);
        window.localStorage.setItem('tasks', JSON.stringify(obj));
        liTarget = undefined;
    }
    if(event.key=="£" && liTarget != undefined){
        document.getElementById("done").querySelectorAll('ul')[0].appendChild(liTarget);
        let obj = JSON.parse(window.localStorage.getItem('tasks'));
        obj["done"].unshift(liTarget.textContent);
        window.localStorage.setItem('tasks', JSON.stringify(obj));
        let index = obj[prevSection.id].indexOf(liTarget.textContent);
        obj[prevSection.id].splice(index, 1);
        window.localStorage.setItem('tasks', JSON.stringify(obj));
        liTarget = undefined;
    }
    removeFromLocalStorage(event, prevSection);
}
//delete li element from the prev section
function removeFromLocalStorage(event, prevSection){
        if(event.key == '¡' && liTarget != undefined){
            let obj = JSON.parse(window.localStorage.getItem('tasks'));
            let index = obj[prevSection.id].indexOf(liTarget.textContent);
            obj[prevSection.id].splice(index, 1);
            window.localStorage.setItem('tasks', JSON.stringify(obj));
            
        }  
        if(event.key=="™" && liTarget != undefined){
            let obj = JSON.parse(window.localStorage.getItem('tasks'));
            let index = obj[prevSection.id].indexOf(liTarget.textContent);
            obj[prevSection.id].splice(index, 1);
            window.localStorage.setItem('tasks', JSON.stringify(obj));
        }
        if(event.key=="£" && liTarget != undefined){
            let obj = JSON.parse(window.localStorage.getItem('tasks'));
            let index = obj[prevSection.id].indexOf(liTarget.textContent);
            obj[prevSection.id].splice(index, 1);
            window.localStorage.setItem('tasks', JSON.stringify(obj));
        }
}
//fetch data from api and save it to the local storage
function getDataFromApi (){
    displayLoading()
    fetch('https://json-bins.herokuapp.com/bin/614ae0d84021ac0e6c080c50')
    .then(response => response.json())
    .then(data => window.localStorage.setItem('tasks', JSON.stringify(data.tasks)))
    .then(data=> hideLoading())
   
}
//updates the api
function setDataToApi(){
    tasks = screenshotDom();
    console.log(tasks);
    fetch('https://json-bins.herokuapp.com/bin/614ae0d84021ac0e6c080c50' , {
            method: 'PUT',
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify({"_id":"614ae0d84021ac0e6c080c50","name":"Tomer","tasks":tasks,"createdAt":"2021-09-22T07:52:56.110Z","updatedAt":"2021-09-22T07:52:56.110Z"}),
          })
            .then(response => response.json())
            .then(data => console.log(data.tasks));
}
//create an object in the format of the api and local storage that represent the dom 
function screenshotDom() {
sections = document.querySelectorAll('section');
    tasks = {};
    sections.forEach(section => {
        allLi = document.getElementById(section.id).querySelectorAll('ul')[0].querySelectorAll('li');
        tasks[section.id] = [];
        allLi.forEach(li => {
            tasks[section.id].push(li.textContent);
        });
    });
return tasks;
}
//display loading div
function displayLoading(){
    document.getElementById ("load").style.visibility = 'visible';
}
//hide loading div
    function hideLoading(){
        document.getElementById('load').style.visibility = 'hidden';
}