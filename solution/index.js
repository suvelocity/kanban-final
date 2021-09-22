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
    addTaskBox(list)
  }
}

/**************** Classes ****************/

class TaskBox extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    let container = document.createElement('div')
    container.textContent = 'hello'
    this.append(container)
  }
}

customElements.define('task-box', TaskBox)

/**************** Main Functions ****************/

function addTaskBox(list) {
  const taskBox = document.createElement('task-box')
  list.append(taskBox)
}
