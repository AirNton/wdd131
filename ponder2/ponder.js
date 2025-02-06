let tasks = [];

function newTaskItem(task) {
  return `<li ${task.completed ? 'class="strike"' : ""}>
   <p>${task.detail}</p>
   <div>
     <span data-function="delete">❎</span>
     <span data-function="complete">✅</span>
   </div>
 </li>`;
}

function renderTasks(tasks) {
  // get the list element from the DOM
  const todoList = document.getElementById("todoList");
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const listitemHTML = tasks.map(newTaskItem).join("");
  todoList.innerHTML = listitemHTML;
}

function newTask() {
  // get the value entered into the #todo input
  let taskDetail = document.getElementById("todo").value;
  // add it to our arrays tasks
  tasks.push({ detail: taskDetail, completed: false });
  // render out the list
  renderTasks(tasks);

  document.getElementById("todo").value = "";
}

function removeTask(taskElement) {
  // Notice how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  console.log(event.currentTarget);
  const parentItem = event.target.closest("li");
  if (event.target.dataset.function === "delete") {
    removeTask(parentItem);
  }
  if (event.target.dataset.function === "complete") {
    completeTask(parentItem);
  }
}

// Add your event listeners here
button = document.getElementById("submitTask");
button.addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// render  the initial list of tasks (if any) when the page loads
renderTasks(tasks);