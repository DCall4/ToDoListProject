import formdiv from "./formdiv";
import projectTab from "./projectTab";

const projectformdiv = function(projectItems, todoItems) {
    const content = document.querySelector('#content');
    const select = document.querySelector('.taskProject');

    const projectForm = document.querySelector('.projectForm');

    const projectTitle = document.createElement('input');
    projectTitle.classList.add('input', 'projectTitle');
    projectTitle.setAttribute('type', 'text');
    projectTitle.setAttribute('placeholder', 'Add New Project');
    projectForm.appendChild(projectTitle);

    const projectBtn = document.createElement('input');
    projectBtn.classList.add('projectBtn');
    projectBtn.setAttribute('type','submit');
    projectForm.appendChild(projectBtn);

    projectForm.addEventListener('submit', event => {
        event.preventDefault();

        const text = projectTitle.value.trim();
        if (text !== '') {
            projectItems.push(text);
            localStorage.setItem("projectItems", JSON.stringify(projectItems));

            projectTitle.value = '';
            projectTitle.focus();

            //add new project to select input
            let projectOption = document.createElement('option');
            projectOption.setAttribute('value', text);
            projectOption.textContent = text;
            select.appendChild(projectOption);

            projectTab(projectItems, todoItems);
        }
    })

}
export default projectformdiv;