import addTaskItem from "./addTask";

const alltaskDiv = function(todoItems) {
    const rightPanel = document.querySelector('.rightPanel');
    rightPanel.textContent = "";

    //create All task list div

    const rightHeader = document.createElement('div');
    rightHeader.classList.add('rightHeader');
    rightPanel.appendChild(rightHeader);
    rightHeader.textContent = "All Tasks";

    const taskListDiv = document.createElement('div');
    taskListDiv.classList.add('taskListDiv');
    rightPanel.appendChild(taskListDiv);
    
    //Task Input div
    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    taskListDiv.appendChild(taskForm);

    const taskName = document.createElement("input");
    taskName.classList.add('taskInput');
    taskName.setAttribute("type", "text");
    taskName.setAttribute("placeholder", "Task Title");
    taskForm.appendChild(taskName);

    console.log(todoItems);

    taskForm.addEventListener('submit', event => {
        event.preventDefault();

        const text = taskName.value.trim();
        if (text !== '') {
            addTaskItem(text, todoItems);

            let itemTemp = document.createElement('div');
            itemTemp.classList.add('task', text);
            itemTemp.textContent = text;
            itemTemp.appendChild(taskListDiv);

            console.log(3);
            taskName.value = '';
            taskName.focus();
        }
    });

    
    return todoItems;
}

export default alltaskDiv