import taskListGenerator from "./taskListGenerator";

const projectTab = function(projectItems, todoItems) {
    const projectContainer = document.querySelector(".projectContainer");
    projectContainer.textContent = '';

    projectItems.forEach((project) => {
        let projectTabDiv = document.createElement('div');
        projectTabDiv.classList.add(project);
        projectTabDiv.classList.add('projectTab');
        projectTabDiv.textContent = project;
        projectContainer.appendChild(projectTabDiv);

        projectTabDiv.addEventListener('click', event => {
            let projectTabArray = todoItems.filter ( function (element) {
                return element.project == project;
            })
            taskListGenerator(projectTabArray, projectItems);
        })
    })

}

export default projectTab;