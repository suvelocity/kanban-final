const sections = document.querySelectorAll('.section') // changed from input to section
const buttons = document.querySelectorAll('button')
const uls = document.querySelectorAll('ul')
const searchBar = document.querySelector('#search')

if (!localStorage.tasks) {
  localStorage.setItem('tasks', '{"todo": [],"in-progress": [],"done": []}') // makes sure there is always a tasks key in local storage
}

const parsedTasks = JSON.parse(localStorage.getItem('tasks'))

// add better explanation here later
function paintDomFromLocalStorage(dataObject) {
  const neaterUlNames = []
  uls.forEach((ul) => neaterUlNames.push(ul.className.split('-tasks')[0]))
  // this leaves nicer names to work with
  for (let key in dataObject) {
    for (let i = 0; i < neaterUlNames.length; i++) {
      if (key.split('-').join('') === neaterUlNames[i].split('-').join('')) {
        // find the matching ul to the mathching key (todo & to-do)
        for (let j = 0; j < dataObject[key].length; j++) {
          // iterate over the property in the parsed version of the local storage and put it on the DOM
          const newLi = createLiElement(dataObject[key][j], ['task'])
          uls[i].append(newLi)
        }
      }
    }
  }
}
paintDomFromLocalStorage(parsedTasks)

const liS = document.querySelectorAll('li')
liS.forEach((li) => {
  li.addEventListener('mouseenter', altHandlerFunction)
})

function altHandlerFunction(e) {
  // make sure this only runs while cursor is on <li>
  const liElements = document.querySelectorAll('li') // a different var than above var (for the initial use of the app, the app doesn't know liS until the first refresh)
  liElements.forEach((li) =>
    li.addEventListener('mouseleave', () => {
      document.removeEventListener('keydown', addToObject)
    })
  )
  const numberOptions = ['1', '2', '3']

  function addToObject(altClickEvent) {
    const keyPressedObject = {}
    keyPressedObject[altClickEvent.key] = true
    document.addEventListener('keydown', function second(secondClickEvent) {
      // document.removeEventListener('keydown', second)
      // works with and without the above line but with it
      // you can't leave your finger on Alt and keep moving it around. Haven't decided which I like better yet.
      if (
        keyPressedObject['Alt'] &&
        numberOptions.includes(secondClickEvent.key)
      ) {
        let category = getCategory(e)
        if (category === 'to-do') category = 'todo'
        parsedTasks[category].splice(
          parsedTasks[category].indexOf(e.target.textContent),
          1 // deletes the appropriate li from it's place in parsed version of local storage.
        )
        switch (secondClickEvent.key) {
          case '1':
            uls[0].prepend(e.target)
            parsedTasks.todo.unshift(e.target.textContent)
            break
          case '2':
            uls[1].prepend(e.target)
            parsedTasks['in-progress'].unshift(e.target.textContent)
            break
          case '3':
            uls[2].prepend(e.target)
            parsedTasks.done.unshift(e.target.textContent)
            break
        }
        localStorage.setItem('tasks', JSON.stringify(parsedTasks))
      }
    })
    document.addEventListener('keyup', (e) => {
      keyPressedObject[e.key] = false
    }) // makes sure BOTH keys are simultaneously pressed.
  }

  if (e.type === 'mouseenter') {
    document.addEventListener('keydown', addToObject)
  }
}

buttons.forEach((button) => button.addEventListener('click', inputListener))

function getCategory(e) {
  const section = e.target.closest('section')
  // find out what category we're in:
  return section.id.split('-section')[0]
}

function updateLocalStorage(category, input, methodOfExtraction) {
  for (let key in parsedTasks) {
    if (key.split('-').join('') === category.split('-').join('')) {
      parsedTasks[key].unshift(input[methodOfExtraction])
      localStorage.setItem('tasks', JSON.stringify(parsedTasks))
    }
  }
}

function inputListener(e) {
  if (!e.target.closest('button').id.includes('submit')) return
  const category = getCategory(e)
  const input = document.querySelector(`#add-${category}-task`)
  // check to see if box contains real text:
  if (input.value.replace(/\s/g, '').length < 1) {
    console.log('empty string') // this will later sub with alert()
    return
  }
  const newLiElement = createLiElement(input.value, ['task'])
  if (!input.value.includes(searchBar.value)) {
    newLiElement.className = 'hidden'
  } else {
    newLiElement.className = 'list-item task'
  }
  newLiElement.addEventListener('mouseenter', altHandlerFunction) // makes sure you don't have to refresh
  // newly added! line 124
  newLiElement.addEventListener('dblclick', makeEditable)
  newLiElement.addEventListener('dragstart', addDragging)
  newLiElement.addEventListener('dragend', removeDragging)
  document.querySelector(`.${category}-tasks`).prepend(newLiElement)
  updateLocalStorage(category, input, 'value')
}

function createLiElement(text, classes = []) {
  const element = document.createElement('li')
  element.append(text)
  element.classList = classes.join(' ')
  element.setAttribute('draggable', 'true')
  return element
}

liS.forEach((li) => li.addEventListener('dblclick', makeEditable))
function makeEditable(e) {
  e.target.addEventListener('blur', setEditedText)
  e.target.setAttribute('contenteditable', 'true')
  e.target.focus() // otherwise you have to reclick
  const originalTextContent = e.target.textContent

  function setEditedText(blurEvent) {
    let category = getCategory(blurEvent)
    if (category === 'to-do') category = 'todo'
    parsedTasks[category].splice(
      parsedTasks[category].indexOf(originalTextContent),
      1,
      blurEvent.target.textContent
    )
    localStorage.setItem('tasks', JSON.stringify(parsedTasks))
  }
}

document.querySelector('#search').addEventListener('input', globalSearch)
function globalSearch(e) {
  const liList = document.querySelectorAll('li')
  liList.forEach((li) => {
    if (
      !li.textContent
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    ) {
      li.className = 'hidden'
    } else {
      li.className = 'task list-item'
    }
  })
}

function createLoader() {
  const container = document.querySelector('#container')
  const loader = document.createElement('img')
  loader.className = 'loader'
  loader.src = 'https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif'
  loader.alt = 'image of loader'
  document.body.insertBefore(loader, container)
  return loader
}

document.querySelector('#load-btn').addEventListener('click', loadFromApi)
document.querySelector('#save-btn').addEventListener('click', saveToApi)

async function loadFromApi() {
  try {
    const loader = createLoader()
    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'
    const response = await fetch(url, {
      method: 'Get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    // handle errors:
    if (!response.ok) {
      alert(response.status)
      throw `HTTP Error ${response.status}`
    }
    const data = await response.json()
    if (localStorage.tasks === data.tasks) {
      return loader.remove()
    } else {
      const newString = makeNormalString(JSON.stringify(data.tasks)) // stringifies without `\\`
      localStorage.setItem('tasks', newString)
    }
    loader.remove()
    location.reload()
  } catch (e) {
    console.log(e)
  }
}

async function saveToApi() {
  try {
    const { tasks } = localStorage
    console.log(tasks)
    const loader = createLoader()
    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tasks }),
    })
    if (!response.ok) {
      alert(response.status)
      throw `HTTP ERROR ${response.status}`
    }
    loader.remove()
  } catch (e) {
    console.log(e)
  }
}

function makeNormalString(tasks) {
  tasks = tasks.replace('"{', '{')
  tasks = tasks.replace('}"', '}')
  return tasks.replaceAll('\\', '')
}

liS.forEach((li) => {
  li.addEventListener('dragstart', () => {
    li.classList.add('dragging')
  })
})

liS.forEach((li) => {
  li.addEventListener('dragend', () => {
    li.classList.remove('dragging')
  })
})
let tempLi
liS.forEach((li) => {
  li.addEventListener('dragend', () => {
    if (tempLi) {
      tempLi.remove()
      tempLi = null
    }
  })
})

uls.forEach((ul) => {
  ul.addEventListener('dragover', (e) => {
    if (uls[0].textContent === '') {
      tempLi = createLiElement(' ', ['task'])
      tempLi.style = 'background-color: rgb(212, 212, 212)'
      uls[0].prepend(tempLi)
      // this is start of solution but still has a way to go
      // also you need to add a dragstart dragend event listener on this liElement
      // you can first create the element and then style it with grey background so it will basically be invisible
    }
    e.preventDefault()
    const immediatelyBelowElement = getDragAfterElement(ul, e.clientY) // Gets the element you're immediately above
    const draggable = document.querySelector('.dragging') // only one el with class 'dragging' at a time
    if (immediatelyBelowElement == 'null') {
      ul.append(immediatelyBelowElement)
    } else {
      ul.insertBefore(draggable, immediatelyBelowElement)
    }
    let droppedAt = ul.className.split('-tasks')[0]
    if (droppedAt === 'to-do') droppedAt = 'todo'
    for (const key in parsedTasks) {
      let takenFrom = key
      parsedTasks[key].forEach((string, i) => {
        let wantedIndex
        if (draggable.textContent === string) {
          if (!immediatelyBelowElement) {
            parsedTasks[droppedAt].push(draggable.textContent)
          } else {
            wantedIndex = parsedTasks[droppedAt].indexOf(
              immediatelyBelowElement.textContent
            )
            parsedTasks[droppedAt].splice(wantedIndex, 0, draggable.textContent)
          }
          parsedTasks[key].splice(i, 1)
          localStorage.setItem('tasks', JSON.stringify(parsedTasks))
        }
      })
    }
  })
})

function getDragAfterElement(ul, yCoordinate) {
  // Y axis of where your mouse is
  const draggableElements = [...ul.querySelectorAll('.task:not(.dragging)')] // get every draggable but the one your'e currently dragging
  return draggableElements.reduce(
    (closestElement, task) => {
      const box = task.getBoundingClientRect() // rectangle of <li>
      const offset = yCoordinate - box.top - box.height / 2 // positive if above the half line of box, negative otherwise
      if (offset < 0 && offset > closestElement.offset) {
        // takes the element with the losest POSITIVE offset
        return { offset: offset, element: task }
      } else {
        return closestElement
      }
    },
    { offset: -Infinity } // start at -Infinty so any elements offset will be above
  ).element // returning the element itself
}

function addDragging(e) {
  e.target.classList.add('dragging')
}

function removeDragging(e) {
  e.target.classList.remove('dragging')
}

function makeObjectOutOfUls() {
  const arrayOfUls = [...uls]
}
