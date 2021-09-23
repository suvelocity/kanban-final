/**************** Select Elements ****************/

const todoSection = document.querySelector('.todo-section')
const doneSection = document.querySelector('.done-section')
const inProgressSection = document.querySelector('.in-progress-section')
const mainContianer = document.querySelector('.main-container')

const doneTasks = document.querySelector('.done-tasks')
const todoTasks = document.querySelector('.to-do-tasks')
const inProgressTasks = document.querySelector('.in-progress-tasks')

const taskBox = document.createElement('div')

/**************** Event Handlers ****************/

function handleClick(event) {
  if (event.target.className.includes('submit-task')) {
    const list = event.target.parentElement.querySelector('ul')
    const taskText = event.target.parentElement.querySelector('input').value
    addTaskBox(list, taskText)
    captureData()
  }
}

/**************** Classes ****************/

class TaskBox extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    let container = document.createElement('div')
    this.append(container)
  }
}

customElements.define('task-box', TaskBox)

/**************** Main Functions ****************/

function addTaskBox(list, text) {
  const taskBox = document.createElement('task-box')
  const listItem = document.createElement('li')
  listItem.classList.add('task')
  listItem.append(taskBox)
  list.insertBefore(listItem, list.firstChild)
  console.log(taskBox)
  taskBox.querySelector('div').textContent = text
}

function captureData() {
  const sections = [...document.querySelectorAll('section')]
  const resultsArray = sections.map(stripData)
  const dataObject = {}
  resultsArray.forEach((item) => {
    Object.assign(dataObject, item)
  })
  storeLocally(dataObject)
}

/**Stores the data captured in localStorage.
 *
 * @param {Array} data - the array that contains the data objects
 */
function storeLocally(data) {
  localStorage.setItem('tasks', JSON.stringify(data))
}

/**************** Utility Functions ****************/

function stripData(section) {
  const list = section.querySelector('.task-list')
  const sectionName = section.className.replace('-section', '')
  const tasksArray = [...list.children]
  const strippedTasksArray = tasksArray.map(stripTaskBox)
  const keyValuePair = { [sectionName]: strippedTasksArray }
  return keyValuePair
}

function stripTaskBox(taskBox) {
  const text = taskBox.querySelector('div').textContent
  return text
}

function loadData() {
  assertDataNotEmpty()
  const data = JSON.parse(localStorage.getItem('tasks'))
  parseData(data)
}

function parseData(data) {
  console.log(data)
  const propsArr = Object.entries(data)
  console.log(propsArr)
  propsArr.forEach((prop) => {
    const listName = prop[0] + '-section'
    const sectionElement = document.querySelector(`.${listName}`)
    const listElement = sectionElement.querySelector('.task-list')
    const textArray = prop[1]
    //reverse if for creating each taskBox in the order they appeared last.
    //this could be fixed if we reverse ahead the order in which they are stored by. so this is a temp fix.
    textArray.reverse()
    textArray.forEach((item) => {
      console.log(`${listElement},${item} `)
      addTaskBox(listElement, item)
    })
  })
}

function assertDataNotEmpty() {
  if (!localStorage.getItem('tasks')) {
    captureData()
    console.log('no local data found. creating new data item.')
  }
}

/**************** Event Listeners ****************/
//TODO: replace all single quotes (') with double quotes ("")

mainContianer.addEventListener('click', handleClick)

window.addEventListener('load', loadData())

/*
i'm currently storing the data in the form of: 3 objects inside 1 array.
the requested form is actually:
3 proprties inside one object.
it should look like this in local storage:
key                     value
tasks                   {todo: ['task1','task2'], in-progress: ['ahla','janana'], done: ['shoko', 'bimbo']}

*/
