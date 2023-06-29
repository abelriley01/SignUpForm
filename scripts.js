function submitForm() {
    var form = document.getElementById("signupForm");
    form.submit();
  }

const passwordInput = document.getElementById('password');
const passwordConfirmationInput = document.getElementById('passwordConfirmation');
const passwordError = document.getElementById('passwordError');

function validatePasswords(){
    const password = passwordInput.value;
    const passwordConfirmation = passwordConfirmationInput.value;

    if (password !== passwordConfirmation){
        passwordError.textContent = '*Passwords do not match';
        passwordInput.classList.add('error');
        passwordConfirmationInput.classList.add('error');
    } else{
        passwordError.textContent ='';
        passwordInput.classList.remove('error');
        passwordConfirmationInput.classList.remove('error');
    }
    }

passwordConfirmationInput.addEventListener('input', validatePasswords);