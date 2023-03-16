
const headerDiv = function() {
    const content = document.querySelector("#content");

    //Header container
    const header = document.createElement('div');
    header.classList.add('header');

    content.appendChild(header);

    //button to hide left panel
    const leftHiddenBtn = document.createElement('button');
    leftHiddenBtn.classList.add('leftHiddenBtn');
    
    header.appendChild(leftHiddenBtn);

    //Title for page
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.textContent = 'To Do List';

    header.appendChild(headerTitle);

    //button to switch color scheme
    const colorMode = document.createElement('button');
    colorMode.classList.add('colorMode');

    header.appendChild(colorMode);

};

export default headerDiv