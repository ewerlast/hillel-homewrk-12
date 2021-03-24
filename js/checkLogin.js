function checkLogin() {
    let name = document.querySelector('.name')
    let inputValue = name.value;
    for (let i = 0; i < inputValue.length; i++) {

        if ((inputValue.charCodeAt(i) > 48 && inputValue.charCodeAt(i) < 57) && inputValue.length < 16 ||
            (inputValue.charCodeAt(i) > 65 && inputValue.charCodeAt(i) < 90) && inputValue.length < 16 ||
            (inputValue.charCodeAt(i) > 97 && inputValue.charCodeAt(i) < 122) &&
            inputValue.length < 16) {
            // console.log(inputValue);
            return inputValue;
        } else {
            name.classList.add("error");
            inputValue = "";

        }
    }

}