import storageSave from "./storageSave";
import taskListGenerator from "./taskListGenerator";

const taskProjectEdit = function(taskProjectText, taskProject, element, todoItems, projectItems, totalTodoItems) {
    taskProjectText.remove();
    if(document.querySelector('.taskProjectChange')) {
        let deleteProject = document.querySelector('.taskProjectChange');
        deleteProject.remove();
        taskListGenerator(todoItems, projectItems, totalTodoItems);
    };
    let taskProjectChange = document.createElement('select');
    taskProjectChange.classList.add('taskProjectChange');

    projectItems.forEach((option) => {
        taskProjectChange.add(
            new Option(option, option)
        );
    });

    taskProjectChange.value = element.project;
    taskProject.appendChild(taskProjectChange);
    taskProjectChange.addEventListener('change', event => {
        element.project = taskProjectChange.value;
        taskProjectChange.remove();
        taskProjectText.textContent = element.project;
        taskProject.appendChild(taskProjectText);
        storageSave(totalTodoItems);
    })
}
export default taskProjectEdit