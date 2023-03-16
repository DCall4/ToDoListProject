import "./style.css"
import headerDiv from "./header";
import leftPanelDiv from "./leftpanel";
import rightPanelDiv from "./rightpanel";
import allTaskDiv from "./alltasks";
import todaytaskDiv from "./todaytasks";
import weektaskDiv from "./weektasks";
import importanttaskDiv from "./importanttasks";

headerDiv();
leftPanelDiv();
rightPanelDiv();
allTaskDiv();

const allTaskBtn = document.querySelector('#allTaskBtn');
const todayTaskBtn = document.querySelector('#todayTaskBtn');
const weekTaskBtn = document.querySelector('#weekTaskBtn');
const starTaskBtn = document.querySelector('#starTaskBtn');

allTaskBtn.addEventListener('click', function(){
    console.log('AllTask');
    allTaskDiv();
});

todayTaskBtn.addEventListener('click', function(){
    console.log('TodayTasks');
    todaytaskDiv();
});

weekTaskBtn.addEventListener('click', function(){
    console.log('Weekstasks');
    weektaskDiv();
});

starTaskBtn.addEventListener('click', function(){
    console.log('ImportantTasks');
    importanttaskDiv();
});

