const sections = document.querySelectorAll('input')
const buttons = document.querySelectorAll('button')
const uls = document.querySelectorAll('ul')

if (!localStorage.tasks) {
  localStorage.setItem('tasks', '{"todo": [],"in-progress": [],"done": []}')
}

const parsedTasks = JSON.parse(localStorage.getItem('tasks'))

// add better explenation here later
function paintDomFromLocalStorage() {
  const neaterUlNames = []
  uls.forEach((ul) => neaterUlNames.push(ul.className.split('-tasks')[0])) // this leaves to-do, in-progress, done
  for (let key in parsedTasks) {
    for (let i = 0; i < neaterUlNames.length; i++) {
      if (key.split('-').join('') === neaterUlNames[i].split('-').join('')) {
        for (let j = 0; j < parsedTasks[key].length; j++) {
          uls[i].append(createLiElement(parsedTasks[key][j], ['task']))
        }
      }
    }
  }
}
paintDomFromLocalStorage()

buttons.forEach((button) => button.addEventListener('click', inputListener))

function inputListener(e) {
  const section = e.target.closest('section')
  // find out what category we're in:
  const category = section.id.split('-section')[0]
  const input = document.querySelector(`#add-${category}-task`)
  // check to see if box contains real text:
  if (input.value.replace(/\s/g, '').length < 1) {
    console.log('empty string') // this will later sub with alert()
    return
  }
  const newLiElement = createLiElement(input.value, ['task'])
  document.querySelector(`.${category}-tasks`).append(newLiElement)
  for (let key in parsedTasks) {
    if (key.split('-').join('') === category.split('-').join('')) {
      parsedTasks[key].push(input.value)
      localStorage.setItem('tasks', JSON.stringify(parsedTasks))
    }
  }
  //   localStorage.setItem(category + Math.random(), input.value) // later generate a new id here
}

function createLiElement(text, classes = []) {
  const element = document.createElement('li')
  element.append(text)
  element.classList = classes.join(' ')
  return element
}
