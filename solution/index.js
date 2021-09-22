/**************** Select Elements ****************/

const todoSection = document.querySelector('.todo-section')
const doneSection = document.querySelector('.done-section')
const inProgressSection = document.querySelector('.in-progress-section')
const mainContianer = document.querySelector('.main-container')

const doneTasks = document.querySelector('.done-tasks')
const todoTasks = document.querySelector('.to-do-tasks')
const inProgressTasks = document.querySelector('.in-progress-tasks')

const taskBox = document.createElement('div')

/**************** Event Listeners ****************/

mainContianer.addEventListener('click', handleClick)

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
    container.textContent = this.append(container)
  }
}

customElements.define('task-box', TaskBox)

/**************** Main Functions ****************/

function addTaskBox(list, text) {
  const taskBox = document.createElement('task-box')
  list.append(taskBox)
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
