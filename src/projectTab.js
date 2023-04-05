import taskListGenerator from "./taskListGenerator";

const projectTab = function(projectItems, todoItems) {
    const projectContainer = document.querySelector(".projectContainer");
    const taskDiv = document.querySelector(".allTask");
    projectContainer.textContent = '';

    projectItems.forEach((project, index) => {
        let projectTabDiv = document.createElement('div');
        projectTabDiv.classList.add('projectTab');
        projectContainer.appendChild(projectTabDiv);

        let projectTextDiv = document.createElement('div');
        projectTextDiv.classList.add('projectText');
        projectTextDiv.textContent = project;
        projectTabDiv.appendChild(projectTextDiv);

        let projectDeleteBtn = document.createElement('button');
        projectDeleteBtn.classList.add('projectDeleteBtn');
        projectDeleteBtn.textContent = 'X';
        projectTabDiv.appendChild(projectDeleteBtn);

        projectDeleteBtn.addEventListener('click', event => {
            projectItems.splice(index, 1);
            localStorage.setItem("projectItems", JSON.stringify(projectItems));
            projectTab(projectItems, todoItems);
            let highLighted = document.querySelector('.highlightDiv');
            highLighted.classList.remove('highlightDiv');
            taskDiv.classList.add('highlightDiv');
            taskListGenerator(todoItems, projectItems, todoItems);
        })

        projectTextDiv.addEventListener('click', event => {
            let projectTabArray = todoItems.filter ( function (element) {
                return element.project == project;
            })
            taskListGenerator(projectTabArray, projectItems, todoItems);  
            let highLighted = document.querySelector('.highlightDiv');

            highLighted.classList.remove('highlightDiv');
            projectTabDiv.classList.add('highlightDiv');

        })
    })

}

export default projectTab;