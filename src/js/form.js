const form = document.querySelector('form');

function checkName(inputField) {
  const regex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
  if (!regex.test(inputField.value) || inputField.value.length < 3) {
    return false;
  }
  return true;
}

function checkEmail(inputField) {
  const regex = new RegExp(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/);
  if (!regex.test(inputField.value)) {
    return false;
  }
  return true;
}

function checkPhone(inputField) {
  if (inputField.value.trim()) {
    return true;
  }
  return false;
}

function checkSubject(inputField) {
  if (inputField.value.trim()) {
    return true;
  }
  return false;
}

function checkMessage(textareaField) {
  if (textareaField.value.trim()) {
    return true;
  }
  return false;
}

let formErrors = [];
function formValidation() {
  form.addEventListener('submit', (e) => {
    const nameField = form.children[0];
    const emailField = form.children[1];
    const phoneField = form.children[2];
    const subjectField = form.children[3];
    const messageField = form.children[4];

    formErrors = [];
    formErrors = [checkName(nameField), checkEmail(emailField), checkPhone(phoneField), checkSubject(subjectField), checkMessage(messageField)];
    if (formErrors.includes(false)) {
      e.preventDefault();
      formErrors.forEach((input, index) => {
        if (input) {
          form.children[index].style.borderColor = 'green';
        } else {
          form.children[index].style.borderColor = 'tomato';
        }
      });
    }
  });
}

export default formValidation;
