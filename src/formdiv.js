import addTaskItem from "./addTask";

const formdiv = function(todoItems, projectItems) {
    const content = document.querySelector("#content");
    const taskContent = document.querySelector('.taskContent');

    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    content.appendChild(taskForm);

    const taskTitle = document.createElement('input');
    taskTitle.classList.add('input', 'taskTitle');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('placeholder', "Add New Task");
    taskForm.appendChild(taskTitle);

    const taskDueDate = document.createElement('input');
    taskDueDate.classList.add('input', 'taskDueDate');
    taskDueDate.setAttribute('type', 'date');
    taskForm.appendChild(taskDueDate);

    const taskProject = document.createElement('select');
    taskProject.classList.add('input', 'taskProject');

    projectItems.forEach((option) => {
        taskProject.add(
            new Option(option.text, option.text)
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
        if (text !== '') {
            addTaskItem(text, date, todoItems);
            const taskTemp = document.createElement('div');
            const taskTitleTemp = document.createElement('div');
            const taskDate = document.createElement('div');
            taskTemp.appendChild(taskDate);
            taskTemp.appendChild(taskTitleTemp);

            taskTemp.classList.add('task');
            taskTitleTemp.textContent = text;
            taskDate.textContent = date;
            console.log(1);
            taskContent.appendChild(taskTemp);
            console.log(2);
            taskTitle.value = '';
            taskTitle.focus();
        }
    });

}

export default formdiv