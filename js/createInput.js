function createInput(inputClass, inputType, inputValue) {
    let input = document.createElement('input');
    input.className = `${inputClass}`;
    input.type = `${inputType}`;
    input.value = `${inputValue}`;

    return input;
}