let Tasks = {"todo":[],"inprogress":[],"done":[]};


// document.getElementById('pe').addEventListener('dblclick',()=>{
//     let old = document.getElementById('pe')
// let newinput = document.createElement('input');
//     old.replaceWith(newinput);
//  //    document.getElementById('pe').appendChild(newinput);
//  // document.getElementById('pe').style.visibility = "hidden" ;  
//   })
        
let counterId = 0;      
const add= (idToAdd) =>{
    
    let currValeu = document.getElementById(`${idToAdd}-input`).value;
    if(currValeu === ""){
        return alert("oops"); 
    }
    let Li = document.createElement("li");
    let inputLi = document.createElement('input');
    const currTaskId = `${idToAdd}-${Tasks[idToAdd].length}`;
    Li.setAttribute('id', currTaskId);
    inputLi.setAttribute("id",`${currTaskId} + '-input'`);
    inputLi.setAttribute("display","none");
    let ul = document.getElementsByClassName(`${idToAdd}-tasks`)[0];
    Li.appendChild(document.createTextNode(currValeu));
    ul.append(Li);
    Tasks[idToAdd].push(currValeu);
    localStorage.setItem("Tasks",JSON.stringify(Tasks));
    document.getElementById(`${idToAdd}-input`).value = '';

}

// const addInProgress = () =>{
//     let currValeu = document.getElementById("add-in-progress-task").value;
//     if(currValeu === ""){
//         return alert("oops"); 
//     }
//     let Li = document.createElement("li");
//     Li.setAttribute("id",counterId)
//     let ul = document.getElementsByClassName("in-progress-tasks")[0];
//     Li.appendChild(document.createTextNode(currValeu));
//     ul.append(Li);
//     Tasks.inprogress.push(currValeu);
//     localStorage.setItem("Tasks",JSON.stringify(Tasks));
//     document.getElementById("add-in-progress-task").value = '';
//     console.log(localStorage);
//     counterId++;
// }

// const addDone = () =>{
//     let currValeu = document.getElementById("add-done-task").value;
//     if(currValeu === ""){
//         return alert("oops"); 
//     }
//     let Li = document.createElement("li");
//     Li.setAttribute("id",counterId)
//     let ul = document.getElementsByClassName("done-tasks")[0];
//     Li.appendChild(document.createTextNode(currValeu));
//     ul.append(Li);
//     Tasks.done.push(currValeu);
//     localStorage.setItem("Tasks",JSON.stringify(Tasks));
//     document.getElementById("add-done-task").value = '';
//     counterId++;
// }

// if(localStorage.Tasks) {
//     tasks = JSON.parse(localStorage.Tasks);
// }
// console.log(Tasks)

