const taskDateEdit = function(taskDateText, taskDate, element, ) {
    taskDateText.remove()
    if(document.querySelector('.taskDateChange')) {
        let deleteDate = document.querySelector(".taskDateChange")
        deleteDate.remove();
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
    })
}
export default taskDateEdit