const localSave=localStorage.getItem("tasks")
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
    // console.log(target.id)
    const newTask=section.querySelector("input").value
    if(newTask===""){
        alert("cannot add empty task")
    }
    else{
        const sectionUl=section.querySelector("ul")
        const newTaskEl=createLiElement(newTask)
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
// const list=document.getElementsByClassName("to-do-tasks")
// const li=createLiElement(text)
// list[0].appendChild(li)
// document.getElementById("add-to-do-task").value=""
// tasks.todo.push(text)
// localStorage.setItem("todo",JSON.stringify(tasks))
// }







//function that adds a task to the addTasks section
// function addInProgress(text){
//     const list=document.getElementsByClassName("in-progress-tasks")
//     const li=createLiElement(text)
//     list[0].appendChild(li)
//     document.getElementById("add-in-progress-task").value=""
//     // const lijs=JSON.stringify({"text":li.value})    
//     // arrayOfToDoTasks.unshift(text)
//     localStorage.setItem("InProgress",text)
//     }

// //function the adds a task to done tasks section 
//     function addDoneTasks(text){
//         const list=document.getElementsByClassName("done-tasks")
//         const li=createLiElement(text)
//         list[0].appendChild(li)
//         document.getElementById("add-done-task").value=""
//         localStorage.setItem("doneTasks",text)
        // }



    function createLiElement(text){
        const li=document.createElement("li")
    li.setAttribute("class","task")
    li.append(text)
    return li
    }
    
    function generateExistsTasks(){
        for(let i=0;i<data.todo.length;i++){    
        const newTaskEl=createLiElement(data.todo[i])
        const sectionUl=document.querySelector("#main > section:nth-child(2) > div > ul")
        sectionUl.prepend(newTaskEl)
        }
        for(let i=0;i<data["in-progress"].length;i++){    
            const newTaskEl=createLiElement(data["in-progress"][i])
            const sectionUl=document.querySelector("#main > section:nth-child(3) > div > ul")
            sectionUl.prepend(newTaskEl)
            }
            for(let i=0;i<data.done.length;i++){    
                const newTaskEl=createLiElement(data.done[i])
                const sectionUl=document.querySelector("#main > section:nth-child(4) > div > ul")
                sectionUl.prepend(newTaskEl)
                }
    }

// function addTaskEvent(){
// const text=document.getElementById("add-to-do-task").value
// if(text==="")alert("cannot add empty task")
// else
// addTask(text)
// }


// function inProgressEvent(){
//     const text=document.getElementById("add-in-progress-task").value
//     if(text==="")alert("cannot add empty task")
//     else
//     addInProgress(text)
//     } 

//     function doneTasksEvent(){
//         const text=document.getElementById("add-done-task").value
//         if(text==="")alert("cannot add empty task")
//         else
//         addDoneTasks(text)
//         }



document.getElementById("submit-add-to-do").addEventListener("click",addNewTask)
document.getElementById("submit-add-in-progress").addEventListener("click",addNewTask)
document.getElementById("submit-add-done").addEventListener("click",addNewTask)



