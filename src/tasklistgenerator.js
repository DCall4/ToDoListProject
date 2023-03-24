const taskListGen = function() {
    const taskListDiv = document.querySelector('.taskListDiv');

    //Task Input div
    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    taskListDiv.appendChild(taskForm);

    const taskName = document.createElement("input");
    taskName.classList.add('taskInput');
    taskName.setAttribute("type", "text");
    taskName.setAttribute("placeholder", "Task Title");
    taskForm.appendChild(taskName);
    
}