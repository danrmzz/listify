const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");

addTaskButton.addEventListener("click", function() {
    const task = taskInput.value;

    console.log(task);
});