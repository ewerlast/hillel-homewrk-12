function createButton(buttonType, buttonClass, buttonValue) {
    let button = document.createElement('button');
    button.type = `${buttonType}`;
    button.className = `${buttonClass}`;
    button.innerHTML = `${buttonValue}`;
    return button;
}