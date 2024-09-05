const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
    const task = taskInput.value; // get the task from input

    const listItem = document.createElement("li"); // create a list item

    listItem.textContent = task; // save the task in the list item

    taskList.appendChild(listItem); // add the list item to the list

    taskInput.value = ""; // clear the input box
});

// Event listener for using enter button to input information and error handling
// for empty tasks
taskInput.addEventListener("keydown", function(event) {
    const task = taskInput.value;

    if (event.key === "Enter" && task !== "") {
        addTaskButton.click();
    }

})