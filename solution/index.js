// ============================
// ====== Main run ============
// ============================
document.addEventListener('click', onClickHandler);
if(localStorage.getItem('task') === null){
    const task = {
        "todo": [],
        "in-progress": [],
        "done": []
    }
    localStorage.setItem('task', JSON.stringify(task));
}



// ============================
// ====== Function ============
// ============================
function onClickHandler(event){
    const target = event.target;
    let inputValue;    
    if(target.tagName === "HTML"){
        return;
    }
    if(target.tagName === "BUTTON"){
        switch (target.id){
            case "submit-add-to-do":
                inputValue = getTextFromInputId("add-to-do-task");            
                AddToSection(inputValue, "todo");    
                break;
            case "submit-add-in-progress":
                inputValue = getTextFromInputId("add-in-progress-task");
                AddToSection(inputValue, "in-progress"); 
                break;
            case "submit-add-done":
                inputValue = getTextFromInputId("add-done-task");
                AddToSection(inputValue, "done");  
                break;
            case "search":
                // Do search, will build it later
        }
    }        
}


/* 
*   ===> Adding task to LocalStorage <===
*   taskName: String
*   Section: String, where to add (to-do, prograss, done);
*/
function AddToSection(taskName, key){
    const taskManagerDataString = localStorage.getItem('task');
    const taskManagerDataJSON = JSON.parse(taskManagerDataString);
    const arrayOfSection = taskManagerDataJSON[key];
    arrayOfSection.unshift(taskName);
    localStorage.setItem('task', JSON.stringify(taskManagerDataJSON));  
    console.log(JSON.parse(localStorage.getItem('task')));  
}

function getTextFromInputId(id){
    let input = document.querySelector("#" + id);         
    let inputValue = input.value;
    input.value = "";
    return inputValue;
}