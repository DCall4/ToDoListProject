const addProjectItem = function(text, projectItems) {
    const projectDiv = document.querySelector('.projectDiv');

        const project = {
            name: text,
            id: Date.now(),
        };

        projectItems.push(project);
        console.log(projectItems);
};

export default addProjectItem