import addProjectItem from "./addProject";

const leftPanelDiv = function() {
    const content = document.querySelector("#content");

    //create container Div for Left and Right panels
    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('mainContentDiv');
    content.appendChild(mainContentDiv);

    //create Left panel container div
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('leftPanel');
    mainContentDiv.appendChild(leftPanel);

    //create Home Div 
    const HomeDiv = document.createElement('div');
    HomeDiv.classList.add('homeDiv');
    leftPanel.appendChild(HomeDiv);

    //create Project Div
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectDiv');
    leftPanel.appendChild(projectDiv);

    //Fill in Home Div
    const allTaskDiv = document.createElement('div');
    allTaskDiv.classList.add('homeActionDiv');
    allTaskDiv.setAttribute('id', 'allTaskBtn');
    HomeDiv.appendChild(allTaskDiv);

    const allTaskText = document.createElement('div');
    allTaskText.classList.add('leftText');
    allTaskText.textContent = "All Tasks"
    allTaskDiv.appendChild(allTaskText);

    const todayDiv = document.createElement('div');
    todayDiv.classList.add('homeActionDiv');
    todayDiv.setAttribute('id', 'todayTaskBtn');
    HomeDiv.appendChild(todayDiv);

    const todayText = document.createElement('div');
    todayText.classList.add('leftText');
    todayText.textContent = "Today's Tasks"
    todayDiv.appendChild(todayText);

    const weekDiv = document.createElement('div');
    weekDiv.classList.add('homeActionDiv');
    weekDiv.setAttribute('id', 'weekTaskBtn');
    HomeDiv.appendChild(weekDiv);

    const weekText = document.createElement('div');
    weekText.classList.add('leftText');
    weekText.textContent = "Tasks for this Week"
    weekDiv.appendChild(weekText)

    const starDiv = document.createElement('div');
    starDiv.classList.add('homeActionDiv');
    starDiv.setAttribute('id', 'starTaskBtn');
    HomeDiv.appendChild(starDiv);

    const starText = document.createElement('div');
    starText.classList.add('leftText');
    starText.textContent = "Important Tasks";
    starDiv.appendChild(starText);

    //Fill in Project div
    const addProject = document.createElement('div');
    addProject.classList.add('addProject');
    projectDiv.appendChild(addProject);
    addProject.textContent = 'Projects';

    //Create project Form dynamically
    const projectForm = document.createElement('form');
    projectForm.classList.add("projectForm");
    //projectForm.setAttribute("method", "post");
    //projectForm.setAttribute("action", "javascript:addNewProject()");
    projectDiv.appendChild(projectForm);

    //Create input element for Project name
    const projectName = document.createElement("input");
    projectName.classList.add('projectInput');
    projectName.setAttribute("type", "text");
    //projectName.setAttribute("name", "projectTitle");
    projectName.setAttribute("placeholder", "Project Title");
    projectForm.appendChild(projectName);
    
    //intialize todo arrays
    let projectItems = [];

    projectForm.addEventListener('submit', event => {
        event.preventDefault();

        const text = projectName.value.trim();
        if (text !== '') {
            addProjectItem(text, projectItems);
            let projectTemp = document.createElement('div');
            projectTemp.classList.add('project', text);
            projectTemp.textContent = text;
            projectDiv.appendChild(projectTemp);

            console.log(2);
            projectName.value = '';
            projectName.focus();
        }
    });

    return projectItems;
}

export default leftPanelDiv