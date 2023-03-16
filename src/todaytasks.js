const todaytaskDiv = function() {
    const rightPanel = document.querySelector('.rightPanel');
    rightPanel.textContent = "";

    //create All task list div

    const rightHeader = document.createElement('div');
    rightHeader.classList.add('rightHeader');
    rightPanel.appendChild(rightHeader);
    rightHeader.textContent = "Today's Tasks";

    const taskListDiv = document.createElement('div');
    taskListDiv.classList.add('taskListDiv');
    rightPanel.appendChild(taskListDiv);
    

}

export default todaytaskDiv