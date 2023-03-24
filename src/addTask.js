const addTaskItem = function(text, date, todoItems) {
    const taskListDiv = document.querySelector('.taskListDiv');
    
    const task = {
        name: text,
        date: date,
        id: Date.now(),
    };
    
    todoItems.push(task);
    console.log(todoItems);
};

export default addTaskItem