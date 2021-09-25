let Tasks = {"todo":[],"in-progress":[],"done":[]};
      
  
const add = (idToAdd) =>{
    
    let currValue = document.getElementById(`add-${idToAdd}-task`).value;
    // if input dont have value
    if(currValue === ""){
        return alert("oops"); 
    }
    if(idToAdd === 'to-do'){
        idToAdd = 'todo';
    }
    Tasks[idToAdd].unshift(currValue);
    // creating li and input elments
    let Li = document.createElement("li");
    let inputLi = document.createElement('input');
    // making a uniq id 
    const currTaskId = `${idToAdd}-${Tasks[idToAdd].length}`;
    Li.setAttribute('id', currTaskId);
    Li.setAttribute('class', 'task');
    inputLi.setAttribute("id",currTaskId + '-input');
    console.log(idToAdd)
    let ul = document.getElementsByClassName(`${idToAdd}-tasks`)[0];
    Li.appendChild(document.createTextNode(currValue));
    ul.append(Li);
    ul.append(inputLi);
    localStorage.setItem("tasks",JSON.stringify(Tasks));
    if(idToAdd === 'todo'){
        idToAdd = 'to-do'
    }
    document.getElementById(`add-${idToAdd}-task`).value = '';
    inputLi.setAttribute('id', currTaskId + '-input');
    Li.addEventListener('dblclick', () => {
        document.getElementById(currTaskId).style.display = 'none';
        document.getElementById(currTaskId + '-input').style.display = 'list-item';
        
    });
   
    ///when blur
    inputLi.addEventListener('blur',()=>{
        document.getElementById(currTaskId).textContent = 
        document.getElementById(currTaskId + '-input').value;
        if(idToAdd === 'to-do'){
            idToAdd = 'todo';
        }
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
            Li.setAttribute('id', `todo-${Tasks['todo'].length+1}`);
            inputLi.setAttribute("id",`todo-${Tasks['todo'].length+1}` + '-input');
            document.getElementsByClassName('todo-tasks')[0].append(Li);
            document.getElementsByClassName('todo-tasks')[0].append(inputLi);

           }else if (mouseHover && key === "2"&& onAlt){
            Li.setAttribute('id', `in-progress-${Tasks['in-progress'].length+1}`);
            inputLi.setAttribute("id",`in-progress-${Tasks['in-progress'].length+1}` + '-input');
            document.getElementsByClassName('in-progress-tasks')[0].append(Li);
            document.getElementsByClassName('in-progress-tasks')[0].append(inputLi);

           }else if(mouseHover && key === "3"&& onAlt){
            Li.setAttribute('id', `done-${Tasks['done'].length+1}`);
            inputLi.setAttribute("id",`done-${Tasks['done'].length+1}` + '-input');
            document.getElementsByClassName('done-tasks')[0].append(Li);
            document.getElementsByClassName('done-tasks')[0].append(inputLi);
           }
        }
}
// end of add function 
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



// for(let i = 0; i < 3;++i){
//     returnLi[mapper[i]] = Tasks[mapper[i]].filter(LiValue => {
//         let isFound = false;
//         Object.values(LiValue).forEach(currValue =>{
//            if(currValue.toLowerCase().match(filtered)){
//             isFound = true;
//            } 
//         });
//         return isFound;
//     });
//     returnLi[mapper[i]] = Tasks[mapper[i]].filter(currLi =>{
//         let result = currLi.match(filtered);
//         console.log(result)
//         console.log(document.getElementsByTagName('li'));
//         if(result !== document.getElementsByTagName('li')[i].data && result === null){
//             console.log(result)
//             document.getElementsByTagName('li')[i].style.visibility = 'hidden'
//         }
//         if(filtered === ''){
//             document.getElementsByTagName('li')[i].style.visibility = 'visible';
//         }
//     })
    
// }


