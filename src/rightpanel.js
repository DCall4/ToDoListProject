
const rightPanelDiv = function() {
    const content = document.querySelector('#content');

    const mainContentDiv = document.querySelector('.mainContentDiv');

    //create Right panel container div
    const rightPanel = document.createElement('div');
    rightPanel.classList.add('rightPanel');
    mainContentDiv.appendChild(rightPanel);

    //create footer container div
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    const footerText = document.createElement('div');
    footerText.classList.add('footText');
    footer.appendChild(footerText);
    footerText.textContent = "Made by David Callahan";

}

export default rightPanelDiv