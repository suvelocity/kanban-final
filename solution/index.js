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
  list.append(taskBox)
  console.log(taskBox)
  taskBox.querySelector('div').textContent = text
}

function captureData() {
  const sections = [...document.querySelectorAll('section')]
  const resultsArray = sections.map(stripData)
  storeLocally(resultsArray)
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
  const data = JSON.parse(localStorage.getItem('tasks'))
  parseData(data)
}

function parseData(data) {
  data.forEach((obj) => {
    const listName = Object.keys(obj) + '-section'
    const sectionElement = document.querySelector(`.${listName}`)
    const listElement = sectionElement.querySelector('.task-list')
    const textArray = obj[Object.keys(obj)]
    textArray.forEach((item) => {
      console.log(`${listElement},${item} `)
      addTaskBox(listElement, item)
    })
  })
}

/**************** Event Listeners ****************/
//TODO: replace all single quotes (') with double quotes ("")

mainContianer.addEventListener('click', handleClick)

window.addEventListener('load', loadData())
