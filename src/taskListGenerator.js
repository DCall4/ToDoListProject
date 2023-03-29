const taskListGenerator = function (todoItems, projectItems) {
    const taskContent = document.querySelector('.taskContent');

    taskContent.textContent = '';

    todoItems.forEach(element => {
        const taskTemp = document.createElement('div');
        const taskTitleTemp = document.createElement('div');
        const taskDate = document.createElement('div');
        const taskProject = document.createElement('div');
        taskTemp.appendChild(taskTitleTemp);
        taskTemp.appendChild(taskDate);
        taskTemp.appendChild(taskProject);

        taskTemp.classList.add('task');
        taskTitleTemp.textContent = element.name;
        taskDate.textContent = element.date;
        taskProject.textContent = element.project;
        taskContent.appendChild(taskTemp);
    });
}
export default taskListGenerator;