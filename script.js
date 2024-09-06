const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");


addTaskButton.addEventListener("click", function() {
    
    const task = taskInput.value; // get the task from input

    if (task != "") {

        const listItem = document.createElement("li"); // create a list item

        listItem.textContent = task; // save the task in the list item

        taskList.appendChild(listItem); // add the list item to the list

        const deleteButton = document.createElement("button"); // create a button
        deleteButton.classList.add("delete-button");
    
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
            taskList.removeChild(deleteButton);
        });
    
        taskList.appendChild(deleteButton); // add the delete button to the list
    
        taskInput.value = ""; // clear the input box
        taskInput.focus(); // set focus back to the input box
        
    } else {
        return
    }
 
});

taskInput.addEventListener("keydown", function(event) {
    const task = taskInput.value;

    if (event.key === "Enter" && task !== "") {
        addTaskButton.click();
    }

});




