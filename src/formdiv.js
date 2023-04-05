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

    const taskImportance = document.createElement('select');
    taskImportance.classList.add('input', 'taskImportance');
    taskImportance.add(new Option('Is this Task Important?', false));
    taskImportance.add(new Option('Yes', true));
    taskImportance.add(new Option('No', false));
    taskForm.appendChild(taskImportance);

    const taskBtn = document.createElement('input');
    taskBtn.classList.add('inputBtn');
    taskBtn.setAttribute('type','submit');
    taskForm.appendChild(taskBtn);

    taskForm.addEventListener('submit', event => {
        event.preventDefault();

        const date = taskDueDate.value.trim();
        const text = taskTitle.value.trim();
        const project = taskProject.value.trim();
        const importance = taskImportance.value;
        if (text !== '') {
            addTaskItem(text, date, project, importance, todoItems);
            taskListGenerator(todoItems, projectItems, todoItems);
            taskTitle.value = '';
            taskTitle.focus();
        }
    });

}

export default formdiv