//create task element with user input
function createTaskElement(taskInput){
    let newTask = document.createElement("li")
    newTask.classList.add("task")
    newTask.innerText = taskInput
    newTask.addEventListener("dblclick",edit)
    return newTask
}

//add new task to the relevant section
function addButtonClick(){
    const taskInput = this.parentNode.querySelector("input").value
    if (taskInput && taskInput.trim()){
        const sectionCategory = event.currentTarget.parentNode.id
        const list = this.parentNode.querySelector("ul")
        const task = createTaskElement(taskInput)
        list.appendChild(task)
        saveToLocalStorage(taskInput, sectionCategory)
    }
    else{
        alert("You can't add an empty task")
    }
}

//Builds an empty object of tasks to LocalStorage
function buildLocalStorage(){
    if(!localStorage.getItem("tasks")){
        const tasks = {
            "todo": [],
            "in-progress": [],
            "done": []
        }
        localStorage.setItem("tasks",JSON.stringify(tasks))
    }
}

//Saves tasks from DOM to LocalStorage
function saveToLocalStorage(taskInput, category) {
    const myLocalStorage = JSON.parse(localStorage.getItem("tasks"))

    //Match for the appropriate category
    const appropriateTasksList = myLocalStorage[category]

    appropriateTasksList.push(taskInput)
    myLocalStorage[category] = appropriateTasksList
    localStorage.setItem("tasks", JSON.stringify(myLocalStorage)) //adds the new task to the local storage 
    console.log(localStorage)
}

//Build task elements from tasks saved to LocalStorage
function localStorageTasksToDom(){
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    for(let [category, tasksList] of Object.entries(tasks)){
        let categoryElement = document.querySelector(`#${category}`).querySelector("ul")
        for (let task of tasksList){
            categoryElement.appendChild(createTaskElement(task))
        }       
    }
}

//Event handlers for adding buttons
document.getElementById("submit-add-to-do").addEventListener("click", addButtonClick)
document.getElementById("submit-add-in-progress").addEventListener("click", addButtonClick)
document.getElementById("submit-add-done").addEventListener("click", addButtonClick)


//On load functions

buildLocalStorage()
localStorageTasksToDom()