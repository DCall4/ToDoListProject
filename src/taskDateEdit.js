import taskListGenerator from "./taskListGenerator";

const taskDateEdit = function(taskDateText, taskDate, element, todoItems, projectItems, totalTodoItems) {
    taskDateText.remove();
    if(document.querySelector('.taskDateChange')) {
        let deleteDate = document.querySelector(".taskDateChange")
        deleteDate.remove();
        taskListGenerator(todoItems, projectItems, totalTodoItems);
    }
    let taskDateChange = document.createElement('input');
    taskDateChange.classList.add('taskDateChange');
    taskDateChange.setAttribute('type', 'date');
    taskDateChange.value = element.date;
    taskDate.appendChild(taskDateChange);
    taskDateChange.addEventListener('change', event => {
        element.date = taskDateChange.value;
        taskDateChange.remove();
        taskDateText.textContent = element.date;
        taskDate.appendChild(taskDateText);
        storageSave(totalTodoItems);
    })

}
export default taskDateEdit