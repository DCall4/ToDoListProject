import addTaskItem from "./addTask";
import taskListGenerator from "./taskListGenerator";

const formdiv = function(todoItems, projectItems) {

    const taskForm = document.querySelector('.taskForm');

    taskForm.textContent = '';

    const taskTitle = document.createElement('input');
    taskTitle.classList.add('input', 'taskTitle');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('placeholder', "Add New Task");
    taskForm.appendChild(taskTitle);

    const taskDueDate = document.createElement('input');
    taskDueDate.classList.add('input', 'taskDueDate');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('required', '');
    taskForm.appendChild(taskDueDate);

    const taskProject = document.createElement('select');
    taskProject.classList.add('input', 'taskProject');

    projectItems.forEach((option) => {
        taskProject.add(
            new Option(option, option)
        );
    });
    taskForm.appendChild(taskProject);

    const taskBtn = document.createElement('input');
    taskBtn.classList.add('inputBtn');
    taskBtn.setAttribute('type','submit');
    taskForm.appendChild(taskBtn);

    taskForm.addEventListener('submit', event => {
        event.preventDefault();

        const date = taskDueDate.value.trim();
        const text = taskTitle.value.trim();
        const project = taskProject.value.trim();
        if (text !== '') {
            addTaskItem(text, date, project, todoItems);
            taskListGenerator(todoItems, projectItems);
            taskTitle.value = '';
            taskTitle.focus();
        }
    });

}

export default formdiv