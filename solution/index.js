/**************** Select Elements ****************/

const todoSection = document.querySelector('.todo-section')
const doneSection = document.querySelector('.done-section')
const inProgressSection = document.querySelector('.in-progress-section')
const mainContianer = document.querySelector('.main-container')

const doneTasks = document.querySelector('.done-tasks')
const todoTasks = document.querySelector('.to-do-tasks')
const inProgressTasks = document.querySelector('.in-progress-tasks')

const taskBox = document.createElement('div')

/**************** Constants ****************/
const POSSIBLE_KEYS = ['1', '2', '3']

/**************** Event Handlers ****************/

/**Handles click events.
 * @param {Object} event - event object recieved from event listener
 */
function handleClick(event) {
  if (event.target.className.includes('submit-task')) {
    const list = event.target.parentElement.querySelector('ul')
    assertInputNotEmpty(list)
    const taskText = event.target.parentElement.querySelector('input').value
    addTaskBox(list, taskText)
    captureData()
  }
}

function handleDoubleClick(event) {
  console.log(event.target)
  event.target.setAttribute('contenteditable', true)
}

function handleKeyPress(event) {
  if (document.querySelector('task-box:hover')) {
    if (event.altKey && POSSIBLE_KEYS.includes(event.key)) {
      handleMultipleKeys(event)
    }
  }
}

function handleBlur(event) {
  console.log('blur')
  event.target.setAttribute('contenteditable', false)
}

function handleMultipleKeys(event) {
  const task = document.querySelector('task-box:hover')

  const options = {
    1: todoTasks,
    2: inProgressTasks,
    3: doneTasks,
  }

  const list = options[event.key]

  if (list) {
    moveTask(task, list)
  }
}

function moveTask(task, list) {
  addTaskBox(list, stripTaskBox(task))
  removeTask(task)
  captureData()
}

function removeTask(task) {
  task.remove()
}

/**************** Classes ****************/

/** Initializes a class for the custom element 'task-box'.
 */
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

/** Creates a new task-box element and adds it to the list passed.
 *
 * @param {HTMLElement} list - the element that will contain the task-box
 * @param {String} text - the text to be inserted inside the task-box
 */
function addTaskBox(list, text) {
  const taskBox = document.createElement('task-box')
  const listItem = document.createElement('li')
  listItem.classList.add('task')
  listItem.append(taskBox)
  list.insertBefore(listItem, list.firstChild)
  taskBox.querySelector('div').textContent = text
}

/**************** Utility Functions ****************/

/** takes a section and makes an object containig the section name and it's taskBoxes values
 *
 * @param {HTMLElement} section - the section element to extract data from
 * @returns an object containing the section name as key and taskBox texts as value
 */
function stripData(section) {
  const classNames = [...section.classList].join('')
  const readyClassName = classNames.replace('-section', '')
  const list = section.querySelectorAll('task-box')
  const tasksArray = [...list]
  const strippedTasksArray = tasksArray.map(stripTaskBox)
  const keyValuePair = { [readyClassName]: strippedTasksArray }
  return keyValuePair
}

/** Gets a taskBox and extracts the text from it.
 *
 * @param {HTMLElement} taskBox
 * @returns the text from the taskBox
 */
function stripTaskBox(taskBox) {
  const text = taskBox.querySelector('div').textContent
  return text
}

function listenToKeyboard(event) {}

/**************** Storage Functions ****************/

/**Captures a snapshot of the data on the page and stores it in localStorage
 */
function captureData() {
  const sections = [...document.querySelectorAll('section')]
  const resultsArray = sections.map(stripData)
  // resultsArray.reverse()
  console.log(resultsArray)
  const dataObject = {}
  resultsArray.forEach((item) => {
    Object.assign(dataObject, item)
  })
  storeLocally(dataObject)
}

/**Stores the data captured in localStorage.
 * @param {Array} data - the array that contains the data object
 */
function storeLocally(data) {
  console.log(data)
  localStorage.setItem('tasks', JSON.stringify(data))
}

/** Loads data from localStorage. Creates data item in localStorage if it is empty.
 */
function loadData() {
  assertDataNotEmpty()
  const data = JSON.parse(localStorage.getItem('tasks'))
  parseData(data)
}

/** Takes data and displays it on the page.
 *
 * @param {Object} data - the data from which information will be parsed
 */
function parseData(data) {
  const propsArr = Object.entries(data)
  propsArr.forEach((prop) => {
    const sectionName = prop[0] + '-section'
    const sectionElement = document.querySelector(`.${sectionName}`)
    const listElement = sectionElement.querySelector('ul')
    const textArray = prop[1]
    //reverse if for creating each taskBox in the order they appeared last.
    //this could be fixed if we reverse ahead the order in which they are stored by. so this is a temp fix.
    textArray.reverse()
    textArray.forEach((item) => {
      addTaskBox(listElement, item)
    })
  })
}

/**
 *  Checks if localStorage contains any related data. If not, stores a template data object.
 */
function assertDataNotEmpty() {
  if (!localStorage.getItem('tasks')) {
    captureData()
    console.log('no local data found. creating new data item.')
  }
}

function assertInputNotEmpty(list) {
  const input = list.parentElement.querySelector('input')
  if (input.value === '') {
    throw 'you must enter a value'
  }
}

/**************** Event Listeners ****************/
//TODO: replace all single quotes (') with double quotes ("")

mainContianer.addEventListener('click', handleClick)
// mainContianer.addEventListener('mouseover', handleHover)

window.addEventListener('load', loadData())

window.addEventListener('keydown', handleKeyPress)

mainContianer.addEventListener('dblclick', handleDoubleClick)

mainContianer.addEventListener('blur', handleBlur)
