import "./style.css"
import importanttaskDiv from "./importanttasks";
import formdiv from "./formdiv";
import projectformdiv from "./projectformdiv";
import setupDivs from "./setupDivs";
import projectTab from "./projectTab";

let todoItems = [];
let projectItems = ['Gym', 'Yard', 'Garage'];

setupDivs(todoItems, projectItems);
formdiv(todoItems, projectItems);
projectformdiv(projectItems, todoItems);
projectTab(projectItems, todoItems);
