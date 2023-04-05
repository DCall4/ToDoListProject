import "./style.css"
import importanttaskDiv from "./importanttasks";
import formdiv from "./formdiv";
import projectformdiv from "./projectformdiv";
import setupDivs from "./setupDivs";
import projectTab from "./projectTab";
import taskListGenerator from "./taskListGenerator";

//localStorage.clear();
let todoItems = [];
let projectItems = ['Gym', 'Yard', 'Garage'];

//check local storage for to do items
if(localStorage.getItem("todoItems")) {
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
};

//check local storage for project Items
if(localStorage.getItem("projectItems")) {
    projectItems = JSON.parse(localStorage.getItem("projectItems"));
};

setupDivs(todoItems, projectItems);
formdiv(todoItems, projectItems);
projectformdiv(projectItems, todoItems);
projectTab(projectItems, todoItems);
taskListGenerator(todoItems, projectItems, todoItems);

