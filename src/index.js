document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector('#create-task-form')

  function addTask() {
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault()
      // console.log(e)
      const input = e.target['new-task-description'].value
      // console.log(input)
      // debugger
      const newTask = document.querySelector('#tasks')
      const li = document.createElement("li")
      li.textContent = input 
      newTask.append(li)

      const deleteButton = document.createElement("button")
      deleteButton.className = 'delete-button'
      deleteButton.dataset.action = "delete"
      deleteButton.textContent = "X"
      li.append(deleteButton)

      deleteButton.addEventListener("click", function() {
        li.remove()
      })
    })
    

  }

  addTask()

  const priority = document.createElement('collection-select')




}); // end of dOMContentLoaded
