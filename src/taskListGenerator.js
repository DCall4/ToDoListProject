import { parseISO } from "date-fns";
import taskDateEdit from "./taskDateEdit";
import taskExpand from "./taskExpand";

const taskListGenerator = function (todoItems, projectItems) {
    const taskContent = document.querySelector('.taskContent');

    taskContent.textContent = '';

    //sorting by date
    todoItems = todoItems.sort(
        (objA, objB) => parseISO(objA.date) - parseISO(objB.date),
    );

    todoItems.forEach((element, index) => {
        const taskTemp = document.createElement('div');
        const taskTitleTemp = document.createElement('div');
        const taskDate = document.createElement('div');
        taskDate.classList.add('taskDate');
        const taskDateText = document.createElement('div');
        const taskProject = document.createElement('div');
        const taskDoneBtn = document.createElement('button');
        const taskDeleteBtn = document.createElement('button');
        taskTemp.appendChild(taskTitleTemp);
        taskTemp.appendChild(taskDate);
        taskTemp.appendChild(taskProject);
        taskTemp.appendChild(taskDoneBtn);
        taskTemp.appendChild(taskDeleteBtn);
        taskDate.appendChild(taskDateText);

        taskTemp.classList.add('task');
        taskTitleTemp.textContent = element.name;
        taskDateText.textContent = element.date;
        taskProject.textContent = element.project;
        taskDoneBtn.textContent = 'Completed?';
        taskDeleteBtn.textContent = 'X';
        taskContent.appendChild(taskTemp);

        if(element.isDone == true) {
            taskTemp.classList.add('isDone');
        }

        taskDateText.addEventListener('click', event => {
            taskDateEdit(taskDateText, taskDate, element);
        })

        taskTitleTemp.addEventListener('click', event => {
            taskExpand(taskTemp, element, todoItems, projectItems);
        })
        //Task Complete Button Logic
        taskDoneBtn.addEventListener('click', event => {
            element.isDone = !element.isDone;
            localStorage.setItem("todoItems", JSON.stringify(todoItems));
            taskListGenerator(todoItems, projectItems);
        })

        //Task Delete Button Logic
        taskDeleteBtn.addEventListener('click', event => {
            todoItems.splice(index, 1);
            localStorage.setItem("todoItems", JSON.stringify(todoItems));
            taskListGenerator(todoItems, projectItems);
        })
    });
}
export default taskListGenerator;