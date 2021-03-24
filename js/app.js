let body = document.querySelector('body');
let form = document.createElement('form');

body.appendChild(form);
form.appendChild(createLable("lable-name", "Login")).appendChild(createInput("name", "text", ""));
form.appendChild(createLable("lable-email", "email")).appendChild(createInput("email", "email", ""));
form.appendChild(createLable("lable-password", "password")).appendChild(createInput("password", "password", ""));
form.appendChild(createButton("button", "buuton-submit", "SEND"));

let login = document.querySelector('.name');
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let submit = document.querySelector('.buuton-submit');

submit.disabled = true;



function run() {
    let resultLogin = false;
    let resultEmail = false;
    let resultPassword = false;

    function checkValidata() {
        form.addEventListener("focus", function(event) {
            event.target.style.background = "pink";
            event.target.value.innerHTML = "";
            event.target.classList.remove("error");
        }, true);
        form.addEventListener("blur", function(event) {
            event.target.style.background = "";
            if (event.target.className === "name") {
                resultLogin = checkLogin();
            }

            if (event.target.className === "email") {
                resultEmail = checkEmail();
            }
            if (event.target.className === "password") {
                resultPassword = checkPassword();
            }

            if (resultLogin !== false && resultEmail !== false && resultPassword !== false) {
                submit.disabled = false;
            }


        }, true);

    }

    form.addEventListener("click", function(event) {


        if (event.target.className === "buuton-submit") {
            login.value = "";
            email.value = "";
            password.value = "";


            console.log(JSON.stringify(`${resultLogin}` + "," + `${resultEmail}` + "," + `${resultPassword}`));
        }
    })
    return checkValidata();
}
run();