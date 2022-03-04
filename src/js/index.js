let taskInput = document.getElementById("new-task"); // new-task
let addButton = document.getElementById("addButton"); //first button
let incompleteTasks = document.getElementById("incomplete-tasks"); //incomplete-tasks
let completedTasks = document.getElementById("completed-tasks"); //completed-tasks
let clearButton = document.getElementById("clear");


const addTask = () =>  {
    if (taskInput.value == "") {
        alert("Task to be added should not be empty!");
        return;
    }
    const listItem = createNewTask(taskInput.value);
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
}

addButton.addEventListener("click", addTask);