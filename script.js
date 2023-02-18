const form = document.querySelector('#form');
const firstName = document.querySelector('#fn');
const lastName = document.querySelector('#ln');
const email = document.querySelector('#email');
const password = document.querySelector('#pw');
const errorIcon = document.querySelectorAll('.error-icon');
const errorMsg = document.querySelectorAll('.error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  validation(firstName, 0, "can't be blank!");
  validation(lastName, 1, "can't be blank!");
  validation(email, 2, "can't be blank!");
  validation(password, 3, "can't be blank!");
});

function validation(id, index, message) {
  // validation if empty string
  if (id.value.trim() === '') {
    errorIcon[index].style.opacity = '1';
    errorMsg[index].innerHTML = message;
    id.style.outline = '2px solid hsl(0, 100%, 74%)';
    // validation if less than 3 char
  } else if (id.value.length <= 3) {
    errorIcon[index].style.opacity = '1';
    errorMsg[index].innerHTML = 'too short';
    id.style.outline = '2px solid hsl(0, 100%, 74%)';
  } else {
    errorIcon[index].style.opacity = '0';
    errorMsg[index].innerHTML = '';
    id.style.outline = '2px solid hsl(246, 25%, 90%)';
  }
}


function passwordValidation() {
  
}