/* const username = document.getElementById('username');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
form.addEventListener('submit', (e) => {
    let messages = []

    function isValidEmail(email){
        return email.includes('@');
    }

    if (username.value === '' || username.value == null) {
      messages.push('username is required');  
    }
     else if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',')
    }
}) */
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