/**************** Select Elements ****************/

const todoSection = document.querySelector('.todo-section')

const taskBox = document.createElement('div')

function addTaskBox() {}

class TaskBox extends HTMLElement {
  constructor() {
    super()
    const container = document.createElement('div')
    container.textContent = 'hello'
    this.append(container)
  }
}

customElements.define('task-box', TaskBox)
