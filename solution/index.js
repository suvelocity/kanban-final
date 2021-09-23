const localSave=localStorage.getItem("tasks")
let existTaskText
// console.log(localSave)
let data
if(localSave!=undefined){
   data=JSON.parse(localSave)
   generateExistsTasks()
//    console.log(data)
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
        const newTaskEl=createLiElement(newTask,{"dblclick":editTask})
        sectionUl.prepend(newTaskEl)
        section.querySelector("input").value=""
        addNewTaskData(target,newTask)
        saveLocalData()
    }

}


function addNewTaskData(target,newTask){
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


function saveLocalData(){
    const save=JSON.stringify(data)
    localStorage.setItem("tasks",save)
}

function editTask(targetTask){
   existTaskText=targetTask.target.innerHTML
   targetTask.target.contentEditable = true
}

function outOfEditTask(targetTask){
    targetTask.target.contentEditable = false
    const targetTasksSection=targetTask.target.closest("section")
    const targetTaskSubmit=targetTasksSection.querySelector("button")
    // console.log(targetTask.target.innerText)
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
        // console.log(targetTask.target.innerText)
        updateTask(dataKey,targetTask.target.innerText)
    }
}
function updateTask(dataKey,newTaskText){
    arrayOfData=data[dataKey]
          for(let i=0;i<arrayOfData.length;i++){
              if(arrayOfData[i]===existTaskText){
                  data[dataKey][i]=newTaskText
                  alert("changed")
                  saveLocalData()
                  return
              }
          }
}
    

    function createLiElement(text,eventListeners={}){
        const liEl=document.createElement("li")
    liEl.setAttribute("class","task")
    liEl.append(text)
    const events=Object.keys(eventListeners)
    for(let i=0;i<events.length;i++){
        liEl.addEventListener(events[i],eventListeners[events[i]])  
    }
    return liEl
    }

    //shows existing tasks that are saved in the local storage upon refreshing/start of the page
    function generateExistsTasks(){
        for(let i=0;i<data.todo.length;i++){    
        const newTaskEl=createLiElement(data.todo[i],{"dblclick":editTask,"blur":outOfEditTask})
        const sectionUl=document.querySelector("#main > section:nth-child(2) > div > ul")
        sectionUl.prepend(newTaskEl)
        }
    
        for(let i=0;i<data["in-progress"].length;i++){    
            const newTaskEl=createLiElement(data["in-progress"][i],{"dblclick":editTask})
            const sectionUl=document.querySelector("#main > section:nth-child(3) > div > ul")
            sectionUl.prepend(newTaskEl)
            }
            for(let i=0;i<data.done.length;i++){    
                const newTaskEl=createLiElement(data.done[i],{"dblclick":editTask})
                const sectionUl=document.querySelector("#main > section:nth-child(4) > div > ul")
                sectionUl.prepend(newTaskEl)
                }
    }





document.getElementById("submit-add-to-do").addEventListener("click",addNewTask)
document.getElementById("submit-add-in-progress").addEventListener("click",addNewTask)
document.getElementById("submit-add-done").addEventListener("click",addNewTask)



