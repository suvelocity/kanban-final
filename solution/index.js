/**************** Select Elements ****************/

//Layout Elements
const todoSection = document.querySelector('.todo-section')
const doneSection = document.querySelector('.done-section')
const inProgressSection = document.querySelector('.in-progress-section')
const mainContianer = document.querySelector('.main-container')
//List Elements
const doneTasks = document.querySelector('.done-tasks')
const todoTasks = document.querySelector('.to-do-tasks')
const inProgressTasks = document.querySelector('.in-progress-tasks')
//Task Elements
const taskBox = document.createElement('div')
//Utility Elements
const searchInput = document.querySelector('#search')
const optionBox = document.querySelector('.option-box')
const loader = document.querySelector('.loader')

/**************** Constants ****************/

const POSSIBLE_KEYS = ['1', '2', '3']

const EMPTY_TASKS_DATA = { todo: [], 'in-progress': [], done: [] }

/**************** Event Handlers ****************/

/**Handles click events by delegation.
 * Checks if input is not empty before allowing to add.
 * Captures and saves data after adding a task.
 * @param {Object} event - event object recieved from the event listener
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

/**Handles double click events.
 * Makes the double-clicked event editable.
 * @param {Object} event - event object recieved from the event listener
 */
function handleDoubleClick(event) {
  const eventTarget = event.target
  eventTarget.setAttribute('contenteditable', true)
  // eventTarget.addEventListener('input', handleInput)
}

/**Handles keyboard events.
 * If a task box is being hovered, allows task removal with ALT + num shortcut.
 * @param {Object} event - event object recieved from the event listener
 */
function handleKeyPress(event) {
  if (document.querySelector('task-box:hover')) {
    if (event.altKey && POSSIBLE_KEYS.includes(event.key)) {
      handleMultipleKeys(event)
    }
  }
}

/**Handles focusout events.
 * Removes the 'contenteditable' attribute.
 * @param {Object} event - event object recieved from the event listener
 */
function handleFocusOut(event) {
  event.target.setAttribute('contenteditable', false)
}

/**
 * Saves the board for every element edit event.
 */
function handleInput() {
  if (document.querySelector('div:focus')) {
    console.log('focus detected')
    captureData()
  }
}

/**Handles multiple keystroke events.
 * Uses an options dictionary to match the corresponding number pressed to a list.
 * Pressing a number that does not match any dictionary property will result in no action.
 * @param {Object} event - event object recieved from the event listener
 */
function handleMultipleKeys(event) {
  const task = document.querySelector('task-box:hover').parentElement

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

/**Handles input events targeting the search box.
 * @param {Object} event - event object recieved from the event listener
 */
function handleSearchInput(event) {
  filterTasks(event.target.value)
}

/**Handles click events targeting an option button.
 * @param {Object} event - event object recieved from the event listener
 */
async function handleOptionClick(event) {
  if (event.target.className === 'load') {
    console.log('load')
    displayLoader()
    await getAnswer()
    removeLoader()
  }
  if (event.target.className === 'save') {
    console.log('save')
    displayLoader()
    await storeData()
    removeLoader()
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

/** Clears the section's list from tasks completely
 *
 * @param {Array} sections - Array of sections to clear
 */
function cleanSection(sections) {
  sections.forEach((section) =>
    section.querySelectorAll('li').forEach((item) => removeTask(item))
  )
}

//to hide, state = true, to view, state = false
function isTaskHidden(task, state) {
  task.parentElement.hidden = state
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

function getTasksFromSection(section) {
  const tasks = section.querySelectorAll('task-box')
  return tasks
}

/**************** Storage Functions ****************/

/**Captures a snapshot of the data on the page and stores it in localStorage
 * @returns the data to store in the form of an object
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
  return dataObject
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

//TODO: Unify load remote data and load local data.

function loadRemoteData(data) {
  cleanSection(document.querySelectorAll('section'))
  parseData(data)
  storeLocally(data)
}

/** Takes data and displays it by adding it to the page.
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

function filterTasks(text) {
  text = text.toLowerCase()
  console.log(text + ' to filter by..')
  const sections = document.querySelectorAll('section')

  sections.forEach((section) => {
    const tasks = getTasksFromSection(section)
    tasks.forEach((task) => {
      if (!stripTaskBox(task).toLowerCase().includes(text)) {
        console.log('does not match query!')
        console.log(task)
        isTaskHidden(task, true)
      } else {
        isTaskHidden(task, false)
      }
    })
  })
}

function displayLoader() {
  const loader = document.createElement('div')
  loader.classList.add('loader')
  mainContianer.append(loader)
}

function removeLoader() {
  const loader = document.querySelector('.loader')
  loader.remove()
}

//this function is used to satisfy test requirements. For some reason the test demands to get a clear board and clear storage right after loading. This function makes it happen.
function cleanLocalStorage() {
  storeLocally(EMPTY_TASKS_DATA)
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

//
optionBox.addEventListener('click', handleOptionClick)
//

window.addEventListener('load', loadData())

window.addEventListener('keydown', handleKeyPress)

mainContianer.addEventListener('dblclick', handleDoubleClick)

mainContianer.addEventListener('focusout', handleFocusOut)

//TODO: give a better name to "handleInput" to differentiate it from any other general input event
mainContianer.addEventListener('input', handleInput)

searchInput.addEventListener('input', handleSearchInput)

/**************** HTTP Requests ****************/

async function getAnswer() {
  const response = await fetch(
    'https://json-bins.herokuapp.com/bin/614aea974021ac0e6c080c61',
    {
      method: 'GET',
    }
  )
  const data = await response.json()
  console.log(data.tasks)
  loadRemoteData(data.tasks)
  return data.tasks
}

//TODO: give better name that signals it's remote api
async function storeData() {
  const response = await fetch(
    'https://json-bins.herokuapp.com/bin/614aea974021ac0e6c080c61',
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prepareRemoteDataBody()),
    }
  )
  console.log('store data initiated')
  console.log(response)
}

function prepareRemoteDataBody() {
  const remoteData = {
    _id: '614aea974021ac0e6c080c61',
    name: 'Ido',
    tasks: captureData(),
    createdAt: '2021-09-22T08:34:31.333Z',
    updatedAt: '2021-09-22T08:34:31.333Z',
  }
  return remoteData
}
