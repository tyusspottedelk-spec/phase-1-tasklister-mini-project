document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  function buildToDo(task) {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
  }

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = event.target.elements.namedItem("new-task-description").value;
    buildToDo(task);
  });
});
