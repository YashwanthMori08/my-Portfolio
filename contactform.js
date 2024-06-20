/* js for contact-form*/
const submitBtn = document.getElementsByClassName('btn2');

const validate = (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    if (username.value === ""){
        alert("username is required.");
        username.focus();
        return false;
    }
    if (email.value === "") {
        alert("email address is required.");
        email.focus();
        return false;
    }
    else
     return true;
}

submitBtn.addEventListener('click', validate);
