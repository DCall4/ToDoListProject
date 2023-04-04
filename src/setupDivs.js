import { differenceInDays, isPast, isToday, parseISO, startOfDay, startOfToday } from "date-fns";
import taskListGenerator from "./taskListGenerator";

const setupDivs = function(todoItems, projectItems) {
    const content = document.querySelector("#content");
    //create Header Div
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    content.appendChild(headerDiv);
    //LeftSide Div for Filters
    const leftFilterDiv = document.createElement('div');
    leftFilterDiv.classList.add('leftFilterDiv');
    content.appendChild(leftFilterDiv);
    //Div to hold tasks
    const taskContent = document.createElement('div');
    taskContent.classList.add('taskContent');
    content.appendChild(taskContent);
    //Div to hold task creation form
    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    headerDiv.appendChild(taskForm);
    //Div to hold project creation form
    const projectForm = document.createElement('form');
    projectForm.classList.add('projectForm');
    headerDiv.appendChild(projectForm);
    //Button to delete completed tasks
    const deleteCompletedTasksBtn = document.createElement('button');
    deleteCompletedTasksBtn.classList.add('clearBtn');
    deleteCompletedTasksBtn.textContent = 'Clear Completed Tasks?'
    headerDiv.appendChild(deleteCompletedTasksBtn);
    deleteCompletedTasksBtn.addEventListener('click', event => {
        for (let i = todoItems.length - 1; i >= 0; i--) {
            if(todoItems[i].isDone == true) {
                todoItems.splice(i,1);
            }
        };
        taskListGenerator(todoItems, projectItems);
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        let highLighted = document.querySelector('.highlightDiv');

        highLighted.classList.remove('highlightDiv');
        allTaskDiv.classList.add('highlightDiv');
    })
    //Div to hold permanent task filters
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filterContainer');
    leftFilterDiv.appendChild(filterContainer);
    //Div to hold project task filters
    const projectContainer = document.createElement('div');
    projectContainer.classList.add("projectContainer");
    leftFilterDiv.appendChild(projectContainer);
    //Div to filter for all tasks
    const allTaskDiv = document.createElement('div');
    allTaskDiv.classList.add('permTab');
    allTaskDiv.classList.add('highlightDiv');
    allTaskDiv.classList.add('allTask');
    allTaskDiv.textContent = 'All Tasks';
    filterContainer.appendChild(allTaskDiv);
    console.log(allTaskDiv);

    allTaskDiv.addEventListener('click', event => {
        taskListGenerator(todoItems, projectItems);
        let highLighted = document.querySelector('.highlightDiv');

        highLighted.classList.remove('highlightDiv');
        allTaskDiv.classList.add('highlightDiv');
        console.log(todoItems);
        console.log(JSON.parse(localStorage.getItem("todoItems")));
    })
    //Div to filter for this Week's tasks
    const thisWeekTask = document.createElement('div');
    thisWeekTask.classList.add('permTab');
    thisWeekTask.textContent = "This Week's Tasks";
    filterContainer.appendChild(thisWeekTask);

    thisWeekTask.addEventListener('click', event => {
        let isThisWeek = todoItems.filter ( function (element) {
            let result = differenceInDays(parseISO(element.date), startOfToday())
            if ((result <= 7) && !(isPast(parseISO(element.date)))) {
                return element;
            }
        })
        taskListGenerator(isThisWeek, projectItems);
        let highLighted = document.querySelector('.highlightDiv');

        highLighted.classList.remove('highlightDiv');
        thisWeekTask.classList.add('highlightDiv');
    })

    //Div to filter for Today's tasks
    const todayTasks = document.createElement('div');
    todayTasks.classList.add('permTab');
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
        let highLighted = document.querySelector('.highlightDiv');

        highLighted.classList.remove('highlightDiv');
        todayTasks.classList.add('highlightDiv');
    })

    //Div to filter overdue Tasks
    const overdueTasks = document.createElement('div');
    overdueTasks.classList.add('permTab');
    overdueTasks.textContent = "Overdue Tasks";
    filterContainer.appendChild(overdueTasks);

    overdueTasks.addEventListener('click', event => {
        let overdueTodoItems = todoItems.filter ( function (element) {
            if (isPast(parseISO(element.date)) && !isToday(parseISO(element.date))) {
                return element;
            }
        })
        taskListGenerator(overdueTodoItems, projectItems);
        let highLighted = document.querySelector('.highlightDiv');

        highLighted.classList.remove('highlightDiv');
        overdueTasks.classList.add('highlightDiv');
    })
}

export default setupDivs