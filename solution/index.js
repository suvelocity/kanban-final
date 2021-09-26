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
 * Passes a request by checking the button's class name.
 * @param {Object} event - event object recieved from the event listener
 */
function handleOptionClick(event) {
  handleRequest(event.target.className)
}

/**
 * Sends an HTTP request. Gets a string describing the type of request.
 * @param {String} req - the type of request to send
 */
async function handleRequest(req) {
  displayLoader()
  if (req === 'load') {
    await getAnswer()
  }
  if (req === 'save') {
    await storeData()
  }
  removeLoader()
}

/**************** Classes ****************/

/** Initializes a class for the custom element 'task-box'.*/
class TaskBox extends HTMLElement {
  constructor() {
    super()
  }
  /**
   * Add a div element whenever the element is added to the DOM.
   */
  connectedCallback() {
    let container = document.createElement('div')
    this.append(container)
  }
}

customElements.define('task-box', TaskBox)

/**************** Main Functions ****************/

/** Creates a new task-box element and adds it to the list passed.
 *
 * @param {Element} list - the element that will contain the task-box
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

/**
 * Moves a given task to a given list. Saves to localStorage after moving.
 * @param {Element} task - task element to be moved
 * @param {Element} list - list element to move the task to
 */
function moveTask(task, list) {
  addTaskBox(list, stripTaskBox(task))
  removeTask(task)
  captureData()
}

/**
 * Removes a task element.
 * @param {Element} task - the task element to remove.
 */
function removeTask(task) {
  task.remove()
}

/**
 *Clears the section's list from tasks completely
 * @param {Array} sections - Array of sections to clear
 */
function cleanSection(sections) {
  sections.forEach((section) =>
    section.querySelectorAll('li').forEach((item) => removeTask(item))
  )
}

/**
 * Sets the hidden attribute of an element to true or false.
 * @param {Element} task - the task element to hide
 * @param {Boolean} state - Boolean representing what the hidden attribute should be set to
 */
function isTaskHidden(task, state) {
  task.parentElement.hidden = state
}

/**
 * Gets a section and creates an object containig the section name as a key and an array with it's taskBoxes texts as a value.
 * The key name is the sections class name without the string '-section'
 * @param {Element} section - the section element to extract data from
 * @returns an object containing the section name as key and taskBox texts array as value
 */
function extractData(section) {
  const sectionName = getSectionName(section)
  const tasksArray = getTaskList(section)
  const strippedTasksArray = tasksArray.map(stripTaskBox)
  return { [sectionName]: strippedTasksArray }
}

/**
 * Gets a taskBox and extracts text from it.
 * @param {Element} taskBox
 * @returns the text from the taskBox
 */
function stripTaskBox(taskBox) {
  const text = taskBox.querySelector('div').textContent
  return text
}

/**
 * Gets the essential section name by cutting off the '-section' string.
 * @param {Element} section the section HTMLElement
 * @returns string representing the section name
 */
function getSectionName(section) {
  const sectionClassName = [...section.classList].join('')
  const sectionName = sectionClassName.replace('-section', '')
  return sectionName
}

/**
 * Return an array with a given section's taskBoxes
 * @param {Element} section the section HTMLElement
 * @returns an array containing the section's taskBox elements
 */
function getTaskList(section) {
  const tasks = section.querySelectorAll('task-box')
  return [...tasks]
}

/**************** Storage Functions ****************/

/**Captures a snapshot of the data on the page and stores it in localStorage
 * @returns the data to store in the form of an object
 */
function captureData() {
  const sections = [...document.querySelectorAll('section')]
  const resultsArray = sections.map(extractData)
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
    const tasks = getTaskList(section)
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
