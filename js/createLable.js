function createLable(lableClass, lableValue) {
    let lable = document.createElement('p');
    lable.className = `${lableClass}`;
    lable.innerHTML = `${lableValue}`;
    return lable;
}