const sections = document.querySelectorAll('input')
const buttons = document.querySelectorAll('button')

localStorage.setItem('tasks', '{"todo":[],"in-progress":[],"done":[]}')

buttons.forEach((button) => button.addEventListener('click', inputListener))

function inputListener(e) {
  const section = e.target.closest('section')
  const category = section.id.split('-section')[0]
  const input = document.querySelector(`#add-${category}-task`)
  if (input.value.replace(/\s/g, '').length < 1) {
    console.log('empty string') // this will later sub with alert()
    return
  }
  const newLiElement = createLiElement(input.value, [category])
  section.append(newLiElement)
  for (let key of localStorage.tasks) {
    if (category.split('-').join('') === key.split('-').join('')) {
      // code
    }
  }
  localStorage.setItem(category + Math.random(), input.value) // later generate a new id here
}

function createLiElement(text, classes = []) {
  const element = document.createElement('li')
  element.append(text)
  element.classList = classes.join(' ')
  return element
}
