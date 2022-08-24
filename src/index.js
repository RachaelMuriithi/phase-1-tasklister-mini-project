
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector ("#create_task_form")
  submit.addEventListener ('submit', (e)=> {
    e.preventDefault()
    const inputValue = (document.getElementById ('new_task_description').value)
    // console.log (e.target.new_task_description.value)
    buildToDo (inputValue)
    submit.reset ()
  })
});

function buildToDo (todo) {
  let li = document.createElement ('li')
  let btn = document. createElement ('button')
  btn. textContent = ' x'
  li.textContent = todo
  li.appendChild (btn)
  ul = document.querySelector ('#tasks')
  ul.appendChild (li);
  btn.addEventListener ('click', () => {
    li.remove()
  })
}
