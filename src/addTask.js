const addTaskItem = function(text, date, project, todoItems) {
    const taskListDiv = document.querySelector('.taskListDiv');
    
    const task = {
        name: text,
        date: date,
        project: project,
        id: Date.now(),
    };
    
    todoItems.push(task);
};

export default addTaskItem