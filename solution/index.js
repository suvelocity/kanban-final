let Tasks = {"todo":[],"in-progress":[],"done":[]};
      
  
const add= (idToAdd) =>{
    
    let currValue = document.getElementById(`${idToAdd}-input`).value;
    // if input dont have value
    if(currValue === ""){
        return alert("oops"); 
    }

    Tasks[idToAdd].push(currValue);
    // creating li and input elments
    let Li = document.createElement("li");
    let inputLi = document.createElement('input');
    // making a uniq id 
    const currTaskId = `${idToAdd}-${Tasks[idToAdd].length}`;
    Li.setAttribute('id', currTaskId);
    inputLi.setAttribute("id",currTaskId + '-input');
    let ul = document.getElementsByClassName(`${idToAdd}-tasks`)[0];
    Li.appendChild(document.createTextNode(currValue));
    ul.append(Li);
    ul.append(inputLi);
    localStorage.setItem("Tasks",JSON.stringify(Tasks));
    document.getElementById(`${idToAdd}-input`).value = '';
    inputLi.setAttribute('id', currTaskId + '-input');
    Li.addEventListener('dblclick', () => {
        document.getElementById(currTaskId).style.display = 'none';
        document.getElementById(currTaskId + '-input').style.display = 'list-item';
        
    });
   
    ///when blur
    inputLi.addEventListener('blur',()=>{
        document.getElementById(currTaskId).textContent = 
        document.getElementById(currTaskId + '-input').value;
        const foundIndex = Tasks[idToAdd].indexOf(document.getElementById(currTaskId).textContent);
        Tasks[idToAdd][foundIndex] = document.getElementById(currTaskId + '-input').value;
        document.getElementById(currTaskId).style.display = 'list-item';
        document.getElementById(currTaskId + '-input').style.display = 'none';
    });
    inputLi.style.display = 'none';
    // makes the value of li stay in the input 
    Li.textContent = currValue;
    inputLi.value = currValue;
    // makes values go from done to todo if you mouseOver + press "ALT" + 1,2,3
    let mouseHover = false;
    let onAlt = false;
    
    Li.addEventListener("mouseover",() =>{
      mouseHover = true;
     });
     Li.addEventListener("mouseleave",() =>{
      mouseHover = false;
     });
     document.onkeydown = (e) =>{
        var key = e.key 
         if(key === 'Alt'){
            onAlt = true;
         } 
         }
         document.onkeyup = (e) =>{
            var key = e.key 
             if(key === 'Alt'){
                onAlt = false;
             }
             }
    window.onkeydown = (event) =>{
        var key = event.key 
           if(mouseHover && key === "1" && onAlt){
            document.getElementsByClassName('todo-tasks')[0].append(Li);
           }else if (mouseHover && key === "2"&& onAlt){
            document.getElementsByClassName('in-progress-tasks')[0].append(Li);
           }else if(mouseHover && key === "3"&& onAlt){
            document.getElementsByClassName('done-tasks')[0].append(Li);
           }
        // document.getElementsByClassName('todo-tasks')[0].append(Li);     
    //     Li.setAttribute('id', `in-progress-${Tasks['in-progress'].length}`);
    //     inputLi.setAttribute("id",`in-progress-${Tasks['in-progress'].length}` + '-input');
    //    Tasks['in-progress'].push(Li.textContent);
    //    document.getElementsByClassName('in-progress-tasks')[0].append(Li);
    //    document.getElementsByClassName('in-progress-tasks')[0].append(inputLi);
    // //   
    //    Tasks[idToAdd].splice(Li.textContent);
    //    console.log(Tasks);
}
const search = () =>{
let input = document.getElementById('myinput');
let filter = input.value;
const returnLi = {"todo":[],"in-progress":[],"done":[]};
returnLi.done = Tasks.done.filter(currValue => {
    let isFound = false;
    Object.values()
});

const ul = document.getElementById('done-tasks');
let lengthOfE = Tasks.done.length
for(i = 0; i < lengthOfE; i++){
    let li =Tasks['done'].getElementsByTagName('li')[i];
    
    let txtValue = li.textContent || li.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";
    }else {
        li[i].style.display = "none";
    }
    }
}
}
