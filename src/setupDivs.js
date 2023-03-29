import { differenceInDays, isToday, parseISO, startOfDay, startOfToday } from "date-fns";
import taskListGenerator from "./taskListGenerator";

const setupDivs = function(todoItems, projectItems) {
    const content = document.querySelector("#content");
    //Div to hold tasks
    const taskContent = document.createElement('div');
    taskContent.classList.add('taskContent');
    content.appendChild(taskContent);
    //Div to hold task creation form
    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    content.appendChild(taskForm);
    //Div to hold project creation form
    const projectForm = document.createElement('form');
    projectForm.classList.add('projectForm');
    content.appendChild(projectForm);
    //Div to hold permanent task filters
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filterContainer');
    content.appendChild(filterContainer);
    //Div to hold project task filters
    const projectContainer = document.createElement('div');
    projectContainer.classList.add("projectContainer");
    content.appendChild(projectContainer);
    //Div to filter for all tasks
    const allTaskDiv = document.createElement('div');
    allTaskDiv.classList.add('projectTab');
    allTaskDiv.textContent = 'All Tasks';
    filterContainer.appendChild(allTaskDiv);
    console.log(allTaskDiv);

    allTaskDiv.addEventListener('click', event => {
        taskListGenerator(todoItems, projectItems);
    })
    //Div to filter for this Week's tasks
    const thisWeekTask = document.createElement('div');
    thisWeekTask.classList.add('projectTab');
    thisWeekTask.textContent = "This Week's Tasks";
    filterContainer.appendChild(thisWeekTask);

    thisWeekTask.addEventListener('click', event => {
        let isThisWeek = todoItems.filter ( function (element) {
            let result = differenceInDays(parseISO(element.date), startOfToday())
            if (result <= 7) {
                return element;
            }
        })
        taskListGenerator(isThisWeek, projectItems);
    })

    //Div to filter for Today's tasks
    const todayTasks = document.createElement('div');
    todayTasks.classList.add('projectTab');
    todayTasks.textContent = "Tasks for Today";
    filterContainer.appendChild(todayTasks);

    todayTasks.addEventListener('click', event => {
        let todayTest = todoItems.filter ( function(element) {
            let todayresult = parseISO(element.date);
            if (isToday(todayresult)) {
                return element;
            }
        })
        taskListGenerator(todayTest, projectItems);
    })
}

export default setupDivs