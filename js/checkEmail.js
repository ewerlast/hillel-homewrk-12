function checkEmail() {
    let email = document.querySelector('.email');

    let emailValue = email.value;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailValue) === false) {
        email.classList.add("error");
        return false;
    }

    // console.log(emailValue);
    return emailValue;
}