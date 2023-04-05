const taskExpand = function(taskTemp, element, todoItems, projectItems) {
    if (document.querySelector('textarea')) {
        let deleteTemp = document.querySelector('textarea');
        deleteTemp.remove();
    }
    const taskNotes = document.createElement('textarea');
    if(element.notes == '') {
        taskNotes.setAttribute('placeholder', "Add notes");
    } else {
        taskNotes.value = element.notes;
    }
    taskTemp.appendChild(taskNotes);

    taskNotes.addEventListener('change', event => {
        element.notes = taskNotes.value;
    })

};
export default taskExpand;