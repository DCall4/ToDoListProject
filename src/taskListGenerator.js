import { parseISO } from "date-fns";
import storageSave from "./storageSave";
import taskDateEdit from "./taskDateEdit";
import taskExpand from "./taskExpand";
import taskProjectEdit from "./taskProjectEdit";

const taskListGenerator = function (todoItems, projectItems, totalTodoItems) {
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
        taskProject.classList.add('taskProject');
        const taskProjectText = document.createElement('div');
        const taskDoneBtn = document.createElement('button');
        const taskDeleteBtn = document.createElement('button');
        taskTemp.appendChild(taskTitleTemp);
        taskTemp.appendChild(taskDate);
        taskTemp.appendChild(taskProject);
        taskTemp.appendChild(taskDoneBtn);
        taskTemp.appendChild(taskDeleteBtn);
        taskDate.appendChild(taskDateText);
        taskProject.appendChild(taskProjectText);

        taskTemp.classList.add('task');
        if(element.importance == 'true') {
            taskTemp.classList.add('important');
        }
        taskTitleTemp.textContent = element.name;
        taskDateText.textContent = element.date;
        taskProjectText.textContent = element.project;
        taskDoneBtn.textContent = 'Completed?';
        taskDeleteBtn.textContent = 'X';
        taskContent.appendChild(taskTemp);

        if(element.isDone == true) {
            taskTemp.classList.add('isDone');
        }

        taskProjectText.addEventListener('click', event => {
            taskProjectEdit(taskProjectText, taskProject, element, todoItems, projectItems, totalTodoItems);
        });

        taskDateText.addEventListener('click', event => {
            taskDateEdit(taskDateText, taskDate, element, todoItems, projectItems, totalTodoItems);
        })

        taskTitleTemp.addEventListener('click', event => {
            taskExpand(taskTemp, element, todoItems, projectItems);
        })
        //Task Complete Button Logic
        taskDoneBtn.addEventListener('click', event => {
            element.isDone = !element.isDone;
            if(element.isDone){
                taskTemp.classList.add('isDone');
            } else {
                taskTemp.classList.remove('isDone');
            }
           storageSave(totalTodoItems);
        })

        //Task Delete Button Logic
        taskDeleteBtn.addEventListener('click', event => {
            let todoFilter = todoItems.splice(index, 1);
            for (let i = totalTodoItems.length - 1; i >= 0; i--) {
                if(totalTodoItems[i].id == todoFilter[0].id) {
                    totalTodoItems.splice(i,1);
                }
            };

            taskListGenerator(todoItems, projectItems, totalTodoItems);
            storageSave(totalTodoItems);
        })
    });
}
export default taskListGenerator;