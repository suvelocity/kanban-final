const localSave=localStorage.getItem("tasks")
let existTaskText
let data
if(localSave!=undefined){
   data=JSON.parse(localSave)
   generateExistsTasks()
}
else{
    data={
        "todo":[],
        "in-progress" :[],
        "done":[]
    }
}


//function that adds a task to the addTasks section
function addNewTask({target}){
    const section=target.closest("section")
    const newTask=section.querySelector("input").value
    if(newTask===""){
        alert("cannot add empty task")
    }
    else{
        const sectionUl=section.querySelector("ul")
        const newTaskEl=createLiElement(newTask)
        sectionUl.prepend(newTaskEl)
        section.querySelector("input").value=""
        addTaskData(target,newTask)
        saveLocalData()
    }

}

//add the new data to the data variable
function addTaskData(target,newTask){
    if(target.id==="submit-add-to-do"){
        data.todo.push(newTask)
    }
    if(target.id==="submit-add-in-progress"){
        data["in-progress"].push(newTask)
    }
    if(target.id==="submit-add-done"){
        data.done.push(newTask)
    }
}

//save every change to thr local data
function saveLocalData(){
    const save=JSON.stringify(data)
    localStorage.setItem("tasks",save)
}


//enable the double click function
function editTask(targetTask){
   existTaskText=targetTask.target.innerHTML
   targetTask.target.contentEditable = true
}



//checks when the finished to change a task  and if he did not changed it to empty task
function outOfEditTask(targetTask){
    targetTask.target.contentEditable = false
    const targetTasksSection=targetTask.target.closest("section")
    const targetTaskSubmit=targetTasksSection.querySelector("button")
    const innerText=targetTask.target.innerText
    if(innerText===""){
        alert("cannot edit to empty task")
        targetTask.target.innerText=existTaskText
    }
    else{
        const targetTaskSubmitId=targetTaskSubmit.id
        let dataKey
        if(targetTaskSubmitId==="submit-add-to-do")dataKey="todo"
        if(targetTaskSubmitId==="submit-add-in-progress")dataKey="in-progress"
        if(targetTaskSubmitId==="submit-add-done")dataKey="done"
        updateTask(dataKey,targetTask.target.innerText)
    }
}



//update the changed task
function updateTask(dataKey,newTaskText){
    arrayOfData=data[dataKey]
          for(let i=0;i<arrayOfData.length;i++){
              if(arrayOfData[i]===existTaskText){
                  data[dataKey][i]=newTaskText
                  saveLocalData()
                  return
              }
          }
}


let taskToMove
function chooseTask(targetTask){
    if(targetTask.target.classList.contains("task")){
        taskToMove=targetTask.target
        document.addEventListener("keydown",movingTaskToSection)
    }
    targetTask.onmouseout=() =>{
        document.removeEventListener("keypress", movingTaskToSection)
        taskToMove = null
    }
}
   

function movingTaskToSection({altKey,key}){
    if (taskToMove){
        if (altKey && key == 1){
            const toDoList = document.querySelector(".to-do-tasks")
            moveTask(toDoList)
        }
        if (altKey && key == 2){
            const toDoList = document.querySelector(".in-progress-tasks")
            moveTask(toDoList)
        }
        if (altKey && key == 3){
            const toDoList = document.querySelector(".done-tasks")
            moveTask(toDoList)
        }
    }
}

const moveTask = (section) => {
    // Get the needed data about the task
const taskText = taskToMove.innerText
    // Create the task in it's new section
const newTaskElem = createLiElement(taskText)
section.prepend(newTaskElem)
taskToMove.parentElement.removeChild(taskToMove)
    // Updates local storage
removeTaskData(taskText)
addNewTaskData(section, taskText)
saveLocalData()
taskToMove = null
}


function removeTaskData(text){
    for(const key of data.todo){
        if(key ===text){
            data.todo.splice(data.todo.indexOf(key),1)
        }
    }
    for(const key of data["in-progress"]){
        if(key ===text){
                data["in-progress"].splice(data["in-progress"].indexOf(key),1)
         }
    }
     for(const key of data.done){
            if(key ===text){
                    data.done.splice(data.done.indexOf(key),1)
             }

    }
    return data
}
//update the local storage 
function addNewTaskData(section,text){
       if(section.classList.contains("to-do-tasks")){
           data.todo.push(text)
       }
       if(section.classList.contains("in-progress-tasks")){
        data["in-progress"].push(text)
    }
    if(section.classList.contains("done-tasks")){
        data.done.push(text)
    }
    return data
}


    
//create the HTML which the task is written in it
    function createLiElement(text){
        const liEl=document.createElement("li")
    liEl.setAttribute("class","task")
    liEl.setAttribute("draggable","true")
    liEl.append(text)
    const  events={"dblclick":editTask,"blur":outOfEditTask,"mouseover":chooseTask}
    const eventsArr=Object.keys(events)
    for(let i=0;i<eventsArr.length;i++){
        const key=eventsArr[i]
        liEl.addEventListener(key,events[key])  
    }
    return liEl
    }
    
    //shows existing tasks that are saved in the local storage upon refreshing/start of the page
    function generateExistsTasks(){
        const sectionsUl=document.querySelectorAll("ul")
        for(let i=0;i<sectionsUl.length;i++){
            if(sectionsUl[i].classList.contains("to-do-tasks")){
        for(let j=0;j<data.todo.length;j++){    
        const newTaskEl=createLiElement(data.todo[j])
        const sectionUl=sectionsUl[i]
        sectionUl.prepend(newTaskEl)
        }
         }
         if(sectionsUl[i].classList.contains("in-progress-tasks")){
            for(let j=0;j<data["in-progress"].length;j++){ 
                const newTaskEl=createLiElement(data["in-progress"][j])
                const sectionUl=sectionsUl[i]
                sectionUl.prepend(newTaskEl)
            }
        }
        if(sectionsUl[i].classList.contains("done-tasks")){
            for(let j=0;j<data.done.length;j++){ 
                const newTaskEl=createLiElement(data.done[j])
                const sectionUl=sectionsUl[i]
                sectionUl.prepend(newTaskEl)
            }
        }    
    }  
 }
    //search and show the tasks the user want
function searchTask(search){
    if(search.keyCode!==32){
    let searchText=search.target.value
    searchText=searchText.toLowerCase()
     const tasks=document.querySelectorAll(".task")
     for(let i=0;i<tasks.length;i++){
         if(searchText!==""){
            let taskContent=tasks[i].innerText    
             taskContent=taskContent.toLowerCase()
             if(!taskContent.includes(searchText)){
                 tasks[i].style="display:none;"
                }
     else {
        tasks[i].style="display:block;"
         }
     
        }
        else {
            tasks[i].style="display:block;"
             }
        }
    }
}


function resetPage(){
    let permission=confirm("do you want to rest your daily tasks?")
    if (permission===true){
        localStorage.clear()
        location.reload()
    }
}



document.getElementById("reset").addEventListener("click",resetPage)
document.getElementById("search").addEventListener("keyup",searchTask)
document.getElementById("submit-add-to-do").addEventListener("click",addNewTask)
document.getElementById("submit-add-in-progress").addEventListener("click",addNewTask)
document.getElementById("submit-add-done").addEventListener("click",addNewTask)



