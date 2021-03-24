function checkPassword() {

    let password = document.querySelector('.password');
    let passwordValue = password.value;
    let reg = /^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-z].*[a-z].).{8,}$/;
    if (reg.test(passwordValue) === false) {
        password.classList.add("error");
        return false;

    }
    return passwordValue;


}
// @$#!?&