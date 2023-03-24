import "./style.css"
import headerDiv from "./header";
import leftPanelDiv from "./leftpanel";
import rightPanelDiv from "./rightpanel";
import allTaskDiv from "./alltasks";
import todaytaskDiv from "./todaytasks";
import weektaskDiv from "./weektasks";
import importanttaskDiv from "./importanttasks";
import formdiv from "./formdiv";
import addProjectItem from "./addProject";
import addTaskItem from "./addTask";

let todoItems = [];
let projectItems = [];

const taskForm = document.querySelector('taskForm');
const taskTitle = document.querySelector('taskTitle');
const content = document.querySelector('#content');
const taskContent = document.createElement('div');
taskContent.classList.add('taskContent');
content.appendChild(taskContent);

formdiv(todoItems, projectItems);


// headerDiv();
// leftPanelDiv();
// rightPanelDiv();
// allTaskDiv(todoItems);

// const allTaskBtn = document.querySelector('#allTaskBtn');
// const todayTaskBtn = document.querySelector('#todayTaskBtn');
// const weekTaskBtn = document.querySelector('#weekTaskBtn');
// const starTaskBtn = document.querySelector('#starTaskBtn');
// const submitNewProject = document.querySelector('.submitNewProject')
// const projectForm = document.querySelector(".projectForm");


// allTaskBtn.addEventListener('click', function(){
//     console.log('AllTask');
//     allTaskDiv(todoItems);
// });

// todayTaskBtn.addEventListener('click', function(){
//     console.log('TodayTasks');
//     todaytaskDiv();
// });

// weekTaskBtn.addEventListener('click', function(){
//     console.log('Weekstasks');
//     weektaskDiv();
// });

// starTaskBtn.addEventListener('click', function(){
//     console.log('ImportantTasks');
//     importanttaskDiv();
// });

