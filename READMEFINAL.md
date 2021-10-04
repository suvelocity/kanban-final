READMEFINAL.md
# Cyber4s 3rd Pre-Course Final Project

Welcome to my pre-course final project.a task-management application.

### Page Structure

There 3 `section` elements. One for to-do tasks, one for in-progress tasks, and one for done tasks.
Each `section` contain:

- [ ] an `input` element 
- [ ] a `button` element
- [ ] an `ul` element contain task elements, which are `li` elements with the `task` class. 
### Interaction

- [ ] When you clicks on one of the add-task buttons, a new task will be added to the respective list. 
- [ ] if you Trying to submit empty tasks, alert the user.
- [ ] Double clicking a task element will enable to edit its text. When the task element loses focus the change will be saved.
- [ ] Hovering over a task element and pressing `alt + 1-3` will move the task to the appropriate list (`1`: todo, `2`: in-progress, `3`: done).
- [ ] Implement drag-and-drop sorting of tasks.

  - [ ] you have save and load buttons that sync the current tasks to the API (see details in the [api-data.txt](#api-integration) file).
  - [ ] If an error occurs show an alert.
  - [ ] If the data loaded from the API is different from the local data, replace the local data with the API data. Make sure you update both the `localStorage` and the DOM.



