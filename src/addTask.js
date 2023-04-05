const addTaskItem = function(text, date, project, importance, todoItems) {
    
    const task = {
        name: text,
        date: date,
        project: project,
        importance: importance,
        isDone: false,
        notes: '',
        id: Date.now(),
    };
    
    todoItems.push(task);

    localStorage.setItem("todoItems", JSON.stringify(todoItems));
};

export default addTaskItem